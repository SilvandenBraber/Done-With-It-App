import React from "react";
import { RefreshControl } from "react-native";

import colors from "../../config/colors";

function RefreshingControl({ refreshing, onRefresh }) {
  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      tintColor={colors.primary}
      size="large"
    />
  );
}

export default RefreshingControl;
