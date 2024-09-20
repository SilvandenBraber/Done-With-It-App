import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import { Button } from "../buttons";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({
  container: {},
});

export default SubmitButton;
