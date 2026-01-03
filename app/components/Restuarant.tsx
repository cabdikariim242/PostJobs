import images from "@/assets/images";
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

export default function Restuarant() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* Search bar */}
          <View className="mt-10 flex flex-row   justify-between items-center mx-7 gap-2">
            <View className="bg-[#dbdfe4] flex flex-row items-center gap-2 w-[259px] px-3 rounded-[5px]">
              <Image source={images.search} className="w-[16px] h-[16px]" />
              <TextInput placeholder="Search" />
            </View>
            <View className="flex flex-row items-center gap-3">
              <Image source={images.not} className="w-[24px] h-[24px]" />
              <Image source={images.upload} className="w-[28px] h-[28px]" />
            </View>
          </View>
          {/* DETAILS */}
          <View className="bg-white w-ful flex gap-4 px-7 mt-6  py-5 ">
            <Text className="text-[#181E1F] text-[20px] font-bold">
              Restaurant Manager
            </Text>
            <Text className="text-[#7C898B] text-[13px] font-[400]">
              Published Jan 23
            </Text>
            <Text className="text-[#181E1F] text-[13px] font-[500]">
              45 Green str, Austin, TX (0.9 mi from you)
            </Text>
            {/* icons and text */}
            <View className="flex flex-row gap-2 mt-4 w-full ">
              <Image source={images.job} />
              <Text className="font-bold text-black">Full time</Text>
            </View>
            {/* icons and text */}
            <View className="flex flex-row gap-2 w-full ">
              <Image source={images.coin} />
              <Text className="font-bold text-black">$ 35 / hr</Text>
            </View>
            <Text className="text-[#181E1F] text-[20px] font-bold">
              Job description
            </Text>
            <Text className="text-[#181E1F] text-sm font-[400]]">
              Looking for an experienced Restaurant Manager. Professional
              mixologists dry ice icecream today's specials Aesop handwash food
              truck artisnal anything. No signs Heston Bloominhell enjoy your
              meal foraged greens nuts and berries pastry chef The Basrossa.
              Field to fork slowcooked the second sitting share plates
              biodynamic not another parfait this is cold let's have authentic
              street food. Craft beer drizzle we don't take reservations smoked
              everything tequilla and lime chicken fish tacos surf and turf cold
              brew coffee yuzu curd. Smoked anything organic kale hand roasted
              coffee beans throwback comfort food with a twist organic a la
              carte finger licking good locally sourced. Two hours sittings
              surfing the menu tiramisu braised lamb shoulder quality Australian
              produce flame grilled wagyu let's eat. Gordon Ramsey on a good day
              a sneeky kebab the mystery box twice cooked or reheated free wifi
              kimchi tacos lemon and whiskey sauce. Do you have a reservation
              who is Marco Pierre White anyway tamarind-glazed beef brisket
              another burger joint linen napkins The New York Grill.{" "}
            </Text>
          </View>
          {/* slices and dices */}
          <View className="bg-white w-full mt-4 py-5 px-4 flex flex-row justify-start gap-5  items-start ">
            <View>
              <Image source={images.chicken} />
            </View>
            <View className="flex gap-2">
              <Text className="text-[#181E1F] text-[13px] font-bold">
                {" "}
                Slices & Dices
              </Text>
              <Text className="text-[#797D85] text-[13px] font-[400]">
                {" "}
                Austin, TX
              </Text>
              <Text className="text-[#00A52C] text-[12px] font-bold">
                {" "}
                12 open jobs
              </Text>
              <Pressable className="bg-[#EBFAEF] w-[93px] h-[32px] flex flex-row justify-center gap-2 items-center rounded-[10px] ">
                <Image source={images.add} />
                <Text className="text-[#00A52C] text-[12px] font-bold">
                  Follow
                </Text>
              </Pressable>
            </View>
          </View>
          {/* JOBS AND CARDS */}
          <View className="bg-white w-full mt-4 py-5 px-4 flex gap-5 ">
            <Text className="text-[#181E1F] text-[20px] font-bold  ">Jobs</Text>
            <Cards
              image={images.shift}
              color={true}
              title="Bartender for a restaurant – Green Street + medical insurance"
            />
            <Cards
              image={images.chicken}
              color={false}
              title="Restaurant Manager"
            />
            <Cards
              image={images.chicken}
              color={false}
              title="Employee Training Specialist"
            />
          </View>
          <View className="bg-white h-[48px] flex flex-row justify-between items-center my-5 px-7 ">
            <Text className="font-bold text-[#00A52C] text-[13px]">See all 12 jobs</Text>
            <Image source={images.right} className="w-[32px] h-[32px] "/>
          </View>
          <View className= "flex flex-row justify-between items-center my-5 mx-7 ">
            <Pressable className="bg-[#00A52C] w-[255px] h-[36px] rounded-[10px] flex justify-center items-center">
                <Text className="font-bold text-white  text-[13px]">Apply now</Text>
            </Pressable>
            <Image source={images.btn2} className="w-[32px] h-[32px] "/>
            <Image source={images.btn} className="w-[32px] h-[32px] "/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

interface CardProps {
  color: boolean;
  image: string;
  title: string;
}

const Cards = ({ color, title, image }: CardProps) => {
  return (
    <View
      className="border p-4 rounded-[10px]"
      style={{ borderColor: color ? "#FF9900" : "#EAECEF" }}
    >
      <View className="flex flex-row justify-between items-start gap-2 ">
        <View>
          <Image source={image} className="w-[42px] h-[42px]" />
        </View>
        <View>
          <Text className="text-[#181E1F] text-[14px] w-[239px] font-bold">
            {title}
          </Text>
          <Text className="font-[500] text-[#565A63] text-[13px] py-3">
            Slices & Dices • Austin, TX
          </Text>
          {/* icons and text */}
          <View className="flex flex-row gap-2  w-full ">
            <Image source={images.job} />
            <Text className="font-bold text-[#565A63]">Full time</Text>
          </View>
        </View>
        <View>
          <Image source={images.dots} />
        </View>
      </View>
    </View>
  );
};
