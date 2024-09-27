import { TypeOfDropDown } from "@/types";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet } from "react-native";

type TypeProps = {
  name: string;
  list: TypeOfDropDown[];
  placeholder: string;
  handleChange: (name: string, value: string) => void;
  subname: string;
  value: string;
};

const DropDown: React.FC<TypeProps> = ({
  name,
  list,
  placeholder,
  handleChange,
  subname,
  value
}) => {



  return (
    <View style={{ display: "flex", marginBottom: 16 }}>
      <Text
        style={{
          fontSize: 16,
          marginBottom: 8,
          fontWeight: 500,
          color: "#333",
        }}
      >
        {name}
      </Text>
      <RNPickerSelect
        onValueChange={(value: string) => {

          handleChange(subname, value);

        }}
        items={list}
        value={value}
        style={{
          inputIOS: styles.input, // Style for iOS
          inputAndroid: styles.input, // Style for Android
        }}
        placeholder={{ label: placeholder, value: null }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 500,
    color: "#333",
  },
  input: {
    borderWidth: 1, // Border width
    borderColor: "#F2F0EF", // Border color (black in this case)
    padding: 10, // Padding inside the input
    borderRadius: 16, // Rounded corners
    fontSize: 16, // Text size
    height: 50, // Height of the input field
    backgroundColor: "#F2F0EF", // Background color (optional)
  },
});

export default DropDown;
