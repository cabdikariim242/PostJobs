import images from "@/assets/images";
import React, { useState } from "react";

import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function applied() {
  const [Active, setActive] = useState(true);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex justify-center items-center gap-6 h-full ">
          {Active ? (
            <View className="flex justify-center items-center gap-6 h-full ">
              <Image source={images.applied} />
              <Text className="font-bold text-[#181E1F] text-[15px] ">
                You haven’t applied to any jobs so far
              </Text>
              <Text className="font-bold text-[#797D85] text-[15px] w-[343px] text-center  ">
                Start your search and find a job you’ve been looking for!
              </Text>
              <Pressable
                onPress={() => setActive(false)}
                className="bg-[#00A52C] mt-10 w-[154px]  h-[40px] rounded-[10px] flex flex-row justify-center items-center gap-2"
              >
                <Image source={images.search} className="w-[20px] h-[20px] " />
                <Text className="text-white font-bold ">Search jobs</Text>
              </Pressable>
            </View>
          ) : (
            <View className="w-full flex justify-center gap-4 ">
              <Cards image={images.restuarant} title="Slices & Dices" desc=" • Austin, TX (0.9 mi from you)"/> 
              <Cards image={images.restuaran} title="BBQ Roadhouse" desc=" • Austin, TX (0.9 mi from you)"/> 
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface CardProps{
  image:string,
  title:string,
  desc:string,
}

const Cards = ({image,title,desc}:CardProps) => {
  return (
    <View className="flex bg-white py-2 ">
      {/* restuarant */}
      <View className="mx-5 mt-5 ">
        {/* header */}
        <View className="flex flex-row justify-between items-center">
          <View className=" ">
            <Image source={image} className="w-[42px] h-[42px]" />
          </View>
          <View className="w-[265px] gap-2 flex">
            <Text className="font-bold">Restaurant Manager</Text>
            <Text>Published Jan 23</Text>
          </View>
          <View className=" ">
            <Image source={images.dots} />
          </View>
        </View>
        {/* TEXTS */}
        <View className="flex mx-[65px] mt-5 ">
          <View className="flex flex-row gap-1  ">
            <Text className="font-bold text-black">{title}</Text>
            <Text>{desc}</Text>
          </View>
          {/* icons and text */}
          <View className="flex flex-row gap-2 mt-4 w-full ">
            <Image source={images.job} />
            <Text className="font-bold text-black">Full time</Text>
          </View>
          {/* icons and text */}
          <View className="flex flex-row gap-2 mt-4 w-full ">
            <Image source={images.coin} />
            <Text className="font-bold text-black">$ 35 / hr</Text>
          </View>
          <Text className="mt-5 text-[#181E1F] font-[400] text-[13px]">
            Job interview scheduled for Feb 12, 3:50 PM
          </Text>
          <Text className="mt-5 text-[#00A52C] font-[600] text-[14px]">
            Add to Google Calendar
          </Text>
          <Text className="mt-5 text-[#00A52C] font-[600] text-[13px]">
            Learn more
          </Text>
        </View>
      </View>
    </View>
  );
};
