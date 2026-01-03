import images from "@/assets/images";
import React, { useState } from "react";
import { Image, ScrollView, Text, TextInput, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Applied from "../components/Applied";
import Saved from "../components/Saved";
import SuggestJobs from "../components/SuggestJobs";

export default function Jobs() {
  const [activeTab, setActiveTab] = useState<"suggested" | "applied" | "saved">(
    "suggested"
  );

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View>
          {/* Search bar */}
          <View className="mt-10 flex flex-row justify-between items-center mx-7 gap-2">
            <View className="bg-[#dbdfe4] flex flex-row items-center gap-2 w-[259px] px-3 rounded-[5px]">
              <Image source={images.search} className="w-[16px] h-[16px]" />
              <TextInput placeholder="Search" />
            </View>
            <View className="flex flex-row items-center gap-3">
              <Image source={images.not} className="w-[24px] h-[24px]" />
              <Image source={images.upload} className="w-[28px] h-[28px]" />
            </View>
          </View>

          {/* Tabs */}
          <View className="flex-row justify-between mx-7 mt-10  border-b border-gray-200">
            {[
              { key: "suggested", label: "Suggested Jobs" },
              { key: "applied", label: "Applied" },
              { key: "saved", label: "Saved" },
            ].map(tab => (
              <Pressable
                key={tab.key}
                onPress={() => setActiveTab(tab.key as any)}
                className={`pb-3 ${
                  activeTab === tab.key
                    ? "border-b-2 border-green-500"
                    : "border-b-2 border-transparent"
                }`}
              >
                <Text
                  className={`text-base ${
                    activeTab === tab.key
                      ? "text-green-500 font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {tab.label}
                </Text>
              </Pressable>
            ))}
          </View>

          {/* Content */}
          <View className="mt-4">
            {activeTab === "suggested" && <SuggestJobs />}
            {activeTab === "applied" && <Applied />}
            {activeTab === "saved" && <Saved />}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
