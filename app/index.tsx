import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const singUp = () => {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View className="flex justify-center  items-center h-full mx-7">
          {/* LOGO and TEXT */}
          <View className="flex flex-row gap-3 justify-start   w-full items-center mt-10">
            <Image source={images.sq} className="w-[76px] h-[40px] " />
            <Text className="text-green-500 text-xl  ">
              Sign up your business
            </Text>
          </View>
          {/* SING UP TEXT */}
          <View className="mt-10 ">
            <Text className="text-[#181E1F] text-[24px] font-bold ">
              Sign up to find a job
            </Text>
            <View className="flex flex-row justify-center mt-2 items-center ">
              <Text className="text-[#565A63] text-[13px] font-[400]">
                Already have an account?
              </Text>
              <Text className="text-[#00A52C] text-[13px] font-[400]">
                Log in
              </Text>
            </View>
          </View>
          {/* google LOGO and TEXT */}
          <View className="flex flex-row gap-3 justify-center bg-[#f7f8faa1] py-2 rounded-[10px] w-full items-center mt-10">
            <Image source={images.google} className="w-[24px] h-[24px] " />
            <Text className="text-[#181E1F] text-[13px] font-bold   ">
              Continue with Google
            </Text>
          </View>
          {/* OR */}
          <Text className="mt-4 ">Or</Text>
          {/* SING UP INPUTS */}
          <View className="w-full flex gap-4">
            {/* Emails */}
            <View>
              <Text className="font-[400] text-[12px] text-[#565A63] my-3">
                Email
              </Text>
              <TextInput className="border rounded-[10px]" />
            </View>
            {/* Emails */}
            <View>
              <Text className="font-[400] text-[12px] text-[#565A63] my-3">
                Password
              </Text>
              <TextInput className="border rounded-[10px]" />
            </View>
            {/* Emails */}
            <View>
              <Text className="font-[400] text-[12px] text-[#565A63] my-3">
                Repeat password
              </Text>
              <TextInput className="border rounded-[10px]" />
            </View>
            <Text className="font-[400] text-[12px] text-[#565A63] ">
              By signing up, you confirm that you agree to Terms & Conditions
              and Privacy Policy
            </Text>
          </View>
          <Pressable onPress={()=>router.push('/Auth/Step1')} className="w-full bg-[#00A52C] mt-10 h-[40px] rounded-[10px] flex justify-center items-center">
            <Text className="text-white font-bold text-[14px]">Sign up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default singUp;
