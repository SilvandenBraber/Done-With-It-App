import { useState } from "react";

export default function useRefresh(apiRequestFunc, delay = 1000) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (refreshing) return; // Do nothing if already refreshing

    setRefreshing(true);

    try {
      await apiRequestFunc(); // Execute the provided API request function
    } catch (error) {
      console.error("Error during refresh:", error);
    } finally {
      // Ensure refreshing state is set to false even on error
      setTimeout(() => {
        setRefreshing(false);
      }, delay);
    }
  };

  return { refreshing, handleRefresh };
}
