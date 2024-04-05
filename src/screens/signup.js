import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Signup = () => {

    const inputStyle = "border-b-2 border-b-blue-400 p-2 rounded-md my-2";

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dobValue, setDobValue ] = useState("");

    const showDatePicker = () => {
    setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDobValue(date.toString());
    hideDatePicker();
    };
 
    return (
        <View className={"flex flex-1"}>
            <View className={"flex-auto items-center justify-end bg-pink-300 "}>
                <TouchableOpacity>
                    <Image
                    source={require("../../assets/icon.png")}
                    className={"h-24 w-24 rounded-full"}/>
                </TouchableOpacity>
            </View>

            <View className={"flex-auto bg-orange-300 px-5"}>
                <TextInput  placeholder="First Name" className={inputStyle}/>
                <TextInput  placeholder="Last Name" className={inputStyle}/>
                <TextInput  placeholder="Email" className={inputStyle}/>
                <TextInput  placeholder="Password" className={inputStyle}/>
                <TextInput  placeholder="Confirm Password" className={inputStyle}/>
                
                <Pressable className={inputStyle} onPress={showDatePicker}>
                    <Text>{dobValue === "" ? "DOB": dobValue}</Text>
                </Pressable>
                <Pressable className={inputStyle}>
                    <Text>gender</Text>
                </Pressable>
            </View>
 
            <View className={"flex-none bg-purple-400 p-5"}>
                <TouchableOpacity  className={"items-center p-5 rounded-xl bg-red-300"}>
                    <Text className={" text-lg text-red-900 font-extrabold"}>Signup</Text>
                </TouchableOpacity>
            </View> 

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
        	/>   
        </View>

    );
    
};

export default Signup;