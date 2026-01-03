import images from "@/assets/images";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function suggestJobs() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="mx-5 border-y py-4 border-[#FF9900] ">
          {/* header */}
          <View className="flex flex-row justify-between items-center">
            <View className=" ">
              <Image source={images.badge} className="w-[42px] h-[42px]" />
            </View>
            <View className="w-[265px] gap-2 flex">
              <Text className="font-bold">
                Bartender for a restaurant – Green Street + medical insurance
              </Text>
              <Text>Published Jan 23</Text>
            </View>
            <View className=" ">
              <Image source={images.dots} />
            </View>
          </View>
          {/* TEXTS */}
          <View className="flex mx-14 mt-5   ">
            <View className="flex flex-row gap-1  ">
              <Text className="font-bold text-black">Johnny’s Best </Text>
              <Text> • Austin, TX (0.9 mi from you)</Text>
            </View>
            {/* icons and text */}
            <View className="flex flex-row gap-2 mt-4 w-full ">
              <Image source={images.job} />
              <Text className="font-bold text-black">
                Shift position • Shift starts 24 Jan 5 PM
              </Text>
            </View>
            {/* icons and text */}
            <View className="flex flex-row gap-2 mt-4 w-full ">
              <Image source={images.coin} />
              <Text className="font-bold text-black">$250</Text>
            </View>
            <Text className="mt-5 text-[#181E1F] font-[400] text-[13px]">
              URGENT!! {"\n"} Bartender needed for two shifts at the restaurant
              tomorrow!
            </Text>
            <Text className="mt-5 text-[#00A52C] font-[600] text-[13px]">
              Learn more
            </Text>
          </View>
        </View>
        {/* CARD TWO */}
        <View className="mt-10">
          {/* Header */}
          <View className="flex flex-row gap-4  mx-5 ">
            <Image source={images.burger} className="w-[32px] h-[32px] " />
            <View>
              <Text>Johnny’s Best</Text>
              <Text>7:14 PM • Austin, TX</Text>
            </View>
            <Image source={images.arrow} className="ml-auto" />
          </View>
          <Text className="font-[400] text-[13px] text-[#181E1F]  mt-4  mx-5">
            Surf and turf quality Australian produce I'll have the pork belly a
            la carte closed themed cafe kombucha tatooed waiters marron two
            ways.
          </Text>
          <Image source={images.pizza} className="w-full h-[206px] mt-5" />
          {/* restuarant */}
          <View className="mx-5 mt-5 ">
            {/* header */}
            <View className="flex flex-row justify-between items-center">
              <View className=" ">
                <Image
                  source={images.restuarant}
                  className="w-[42px] h-[42px]"
                />
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
            <View className="flex mx-14 mt-5   ">
              <View className="flex flex-row gap-1  ">
                <Text className="font-bold text-black">Slices & Dices </Text>
                <Text> • Austin, TX (0.9 mi from you)</Text>
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
                Looking for an experienced Restaurant Manager
              </Text>
              <Text className="mt-5 text-[#00A52C] font-[600] text-[13px]">
                Learn more
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
