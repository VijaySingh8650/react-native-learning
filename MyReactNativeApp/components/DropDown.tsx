import { TypeOfDropDown } from "@/types";
import React, { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { View, Text, StyleSheet } from "react-native";

type TypeProps = {
  name: string;
  list: TypeOfDropDown[];
  placeholder: string;
  handleChange: (name:string, value:string) => void;
  subname: string;
};

const DropDown: React.FC<TypeProps> = ({ name, list, placeholder, handleChange, subname }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <View style={{ display: "flex", marginBottom: 16 }}>
      <Text style={styles.text}>{name}</Text>
      <RNPickerSelect
        onValueChange={(value) => handleChange(subname, value)}
        items={list}
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
  text:{

    fontSize: 16,
    marginBottom: 8,
    fontWeight: 500,
    color: '#333',

  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1, // Border width
    borderColor: "#000", // Border color (black in this case)
    padding: 10, // Padding inside the input
    borderRadius: 16, // Rounded corners
    fontSize: 16, // Text size
    height: 50, // Height of the input field
    backgroundColor: "#fff", // Background color (optional)
  },
});

export default DropDown;
