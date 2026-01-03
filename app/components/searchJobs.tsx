import images from "@/assets/images";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 
export default function searchJobs() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex   ">
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
