import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const Signup = () => {

    const inputStyle = "border-b-2 border-b-blue-400 p-2 rounded-md my-2";

    return (
        <View className={"flex flex-1"}>
            <View className={"flex-1 items-center justify-end bg-pink-300"}>
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
                <TextInput  placeholder="DOB" className={inputStyle}/>
                <TextInput  placeholder="Gender" className={inputStyle}/>
            </View>
            
            <View className={"flex-none bg-purple-400 p-5"}>
                <TouchableOpacity className={"items-center p-5 rounded-xl bg-red-300"}>
                    <Text className={" text-lg text-red-900 font-extrabold"}>Signup</Text>
                </TouchableOpacity>
            </View>    
        </View>
    );
    
};

export default Signup;