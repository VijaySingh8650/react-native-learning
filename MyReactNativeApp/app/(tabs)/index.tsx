import DropDown from "@/components/DropDown";
import { dropDownLists, isCupLast, position } from "@/constants/constant";
import { TypeOfDropDownList, TypeOfSelectedItems } from "@/types";
import axios from "axios";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Button, ScrollView   } from "react-native";
import Toast from "react-native-toast-message";


const windowHeight = Dimensions.get('window').height;
const dynamicTopOffset = windowHeight * 0.05;

const Home = () => {


  const [selectedValue, setSelectedValue] = useState<TypeOfSelectedItems>({
    recipe: "",
    position: "",
    isCupLast: "",
  });

  const [orderCreationList, setOrderCreationList] = useState<TypeOfSelectedItems[]>([]);


  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (name: string, value: string) => {
    setSelectedValue({ ...selectedValue, [name]: value });
  };

  const handleSubmit = async() => {



    if (
      !selectedValue?.recipe ||
      !selectedValue?.position ||
      !selectedValue?.isCupLast
    ) {
      
      Toast.show({
        type: 'error',
        text1: `Please select all the dropdowns.`,
        position: 'top',  // Still at the top
        visibilityTime: 2000,  // Auto-hide after 2 seconds
        topOffset: dynamicTopOffset,  // Adjust to remain closer to the top
        text1Style: { fontSize: 14 },
      });

    } else {

      setIsLoading(true);

      Toast.show({
        type: "info", // other types: 'info', 'error'
        text1: "Loading",
        text2: "Please wait...",
        position: "top",
        visibilityTime: 0, // time in ms
        autoHide: false,
        topOffset: dynamicTopOffset, // Adjust the distance from the top of the screen
        text1Style: { fontSize: 18 }, // Increase text1 size
        text2Style: { fontSize: 14 },
      });

      try{

        let response = await axios(`http://192.168.0.97:3001/recipe_to_local?pos=${selectedValue?.position}&lastCup=${selectedValue?.isCupLast}`, {timeout: 5000});


        if(response?.status===200){
          
          Toast.hide();  // Hide the loading toast

          setOrderCreationList([
            ...orderCreationList, 
            selectedValue
          ]) 
          
         
          setSelectedValue({
            recipe: "",
            position: "",
            isCupLast: "",
          });
  
  
          // Show success toast after loading
          Toast.show({
            type: 'success',
            text1: 'Success',
            text2: 'Order created successfully!',
            position: 'top',  // Still at the top
            visibilityTime: 2000,  // Auto-hide after 2 seconds
            topOffset: dynamicTopOffset,  // Adjust to remain closer to the top
            text1Style: { fontSize: 18 },  // Customize success toast text size
            text2Style: { fontSize: 14 },
          });
  
          setIsLoading(false); 

          

        }
  
        
  
  
  
          

      }

      catch(err){

        Toast.show({
          type: 'error',
          text1: 'Oops',
          text2: 'Something went wrong!',
          position: 'top',  // Still at the top
          visibilityTime: 2000,  // Auto-hide after 2 seconds
          topOffset: dynamicTopOffset,  // Adjust to remain closer to the top
          text1Style: { fontSize: 18 },  // Customize success toast text size
          text2Style: { fontSize: 14 },
        });

        setIsLoading(false); 

      }


    }
  };
 

  return (
    <ScrollView style={styles.container}>
      <Toast />
      <View style={{ marginTop: 100, paddingHorizontal: 25}}>
        <Text
          style={{
            fontSize: 30,
            marginBottom: 10,
            margin: "auto",
            color: "#f8cb46",
          }}
        >
          Recipe Order
        </Text>

        {dropDownLists?.map((el: TypeOfDropDownList) => {
          return (
            <DropDown
              key={el?.name}
              name={el?.name}
              list={el?.list}
              placeholder={el?.placeholder}
              handleChange={handleChange}
              subname={el?.subname}
              value={el?.subname ? selectedValue[el.subname as keyof typeof selectedValue] : ""}
            />
          );
        })}

        <TouchableOpacity style={[styles.button, isLoading && styles.disabledButton,]} onPress={() => handleSubmit()} disabled={isLoading}>
          <Text style={[styles.buttonText, isLoading && styles.disabledButtonText]}>{isLoading ? "Creating Order..." : "Create Order"}</Text>
        </TouchableOpacity>
      </View>

      {orderCreationList?.length > 0 && <View style={{marginTop: 50, paddingHorizontal: 25}}>
        <Text style={{fontSize: 20, marginBottom: 10, color: "#f8cb46"}}>Order Creation List:</Text>
   
        {orderCreationList.map((el: TypeOfSelectedItems, index: number) => {
          return (
            <View key={index} style={{borderBottomWidth: 1, borderColor: "#f8cb46", paddingVertical: 10, marginBottom: 10}}>
              <Text style={{fontSize: 16}}>{el?.recipe}</Text>
              
              <View>

                <Text style={{fontSize: 16}}>Position: {el?.position} - Last Cup: {el?.isCupLast? "Yes" : "No"}</Text>
                <Button title="Remove" onPress={()=> {

                  let orderCreatedListValues = [...orderCreationList];
                  orderCreatedListValues.splice(index, 1);
                  setOrderCreationList(orderCreatedListValues);


                }}/>
              </View>
            </View>
          );
        })}
      </View>}
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: "#f8cb46", // Blue background
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    borderRadius: 8, // Rounded corners
    elevation: 5, // Shadow effect (for Android)
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  disabledButton: {
    backgroundColor: "#bbbbbb", // Gray background for disabled button
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 16, // Text size
    fontWeight: "bold", // Bold text
  },
  disabledButtonText: {
    color: "#000000",
  }
});

export default Home;
