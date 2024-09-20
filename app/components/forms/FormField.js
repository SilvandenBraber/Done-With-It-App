import React from "react";
import { View } from "react-native";
import { useFormikContext } from "formik";

import colors from "../../config/colors";

import ErrorMessage from "./ErrorMessage";
import { TextInput } from "../inputs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function FormField({ name, onBlur, width, ...otherProps }) {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();

  const handleBlur = () => {
    setFieldTouched(name);
  };

  return (
    <>
      <TextInput
        name={name}
        onBlur={handleBlur}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
