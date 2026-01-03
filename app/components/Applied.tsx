import images from "@/assets/images";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function applied() {
  return (
     <SafeAreaView>
          <ScrollView>
            <View className="flex justify-center items-center gap-6 h-full ">
              <Image source={images.applied}  />
              <Text className="font-bold text-[#181E1F] text-[15px] ">You haven’t applied to any jobs so far</Text>
              <Text  className="font-bold text-[#797D85] text-[15px] ">Start your search and find a job you’ve been looking for!</Text>
              <Pressable onPress={()=>router.push('/components/searchJobs')} className="bg-[#00A52C] mt-10 w-[154px]  h-[40px] rounded-[10px] flex flex-row justify-center items-center gap-2">
                <Image source={images.search} className="w-[20px] h-[20px] "/>
                <Text className="text-white font-bold ">Search jobs</Text>
              </Pressable>
            </View> 
          </ScrollView>
        </SafeAreaView>
  )
}