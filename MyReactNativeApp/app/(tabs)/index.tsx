import DropDown from '@/components/DropDown';
import { dropDownLists, isCupLast, position } from '@/constants/constant';
import { TypeOfDropDownList } from '@/types';
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const Home = () => {

  const [selectedValue, setSelectedValue] = useState({
    recipe:"",
    position:"",
    isCupLast:""
  });


  const handleChange = (name:string, value:string) => {
    setSelectedValue({...selectedValue, [name]: value });
  }
 

  console.log(selectedValue, "selectedvalues");
  

  return (
    <View style={{marginTop: 200, width: "80%", margin: "auto"}}>

      <Text style={{fontSize: 30, marginBottom: 10, margin:"auto"}}>Recipe Order</Text>
      
      {
        dropDownLists?.map((el:TypeOfDropDownList) => {
           
          return <DropDown key={el?.name} name={el?.name} list={el?.list} placeholder={el?.placeholder} handleChange={handleChange} subname={el?.subname}/>

        })
      }
      
        
    </View>
  );
};

export default Home;
