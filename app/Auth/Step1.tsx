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

const Steps = () => {
  const [step, setStep] = React.useState(1);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-1">
          {step === 1 && <Step1 onNext={() => setStep(2)} />}
          {step === 2 && <Step2 onNext={() => setStep(3)} />}
          {step === 3 && <Step3 onNext={() => setStep(4)} />}
          {step === 4 && <Step4 onNext={() => setStep(5)} />}
          {step === 5 && <Step5 onNext={() => setStep(6)} />}
          {/* Step3, Step4, Step5 later */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Steps;

const Step1 = ({ onNext }) => {
  return (
    <View className="flex-1 justify-between mx-7">
      <View className="flex justify-end items-center  h-[500px] ">
        <Text className="text-[#6B7678] text-[11px] font-bold">Step 1/5</Text>

        <Text className="text-[#181E1F] text-[24px] font-bold text-center mt-4">
          Welcome to ShiftQuest! Let’s take a few steps to complete your
          profile.
        </Text>

        <Text className="text-[#6B7678] text-[13px] font-bold text-center mt-2">
          First, please enter your name
        </Text>

        <View className="w-full gap-4 mt-10">
          <View>
            <Text className="text-[12px] text-[#565A63] my-2">First name</Text>
            <TextInput className="border rounded-[10px]" />
          </View>

          <View>
            <Text className="text-[12px] text-[#565A63] my-2">Last name</Text>
            <TextInput className="border rounded-[10px]" />
          </View>
        </View>
      </View>
      <View className="h-[300px]  flex justify-end mb-10">
        <Pressable
          onPress={onNext}
          className="w-full bg-[#00A52C] h-[40px] rounded-[10px] flex justify-center items-center "
        >
          <Text className="text-white font-bold text-[14px]">Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Step2 = ({ onNext }) => {
  return (
    <View className="flex-1 justify-between mx-7">
      <View className="mt-20 flex justify-end items-center  h-[500px]">
        <Text className="text-[#6B7678] text-[11px] font-bold">Step 2/5</Text>

        <Text className="text-[#181E1F] text-[24px] font-bold text-center mt-4">
          Enter your location
        </Text>

        <Text className="text-[#6B7678] text-[13px] font-bold text-center mt-2">
          We will display the most relevant jobs based on your location
        </Text>

        <View className="w-full gap-4 mt-10">
          <Text className="text-[12px] text-[#565A63] my-2">ZIP</Text>
          <TextInput className="border rounded-[10px]" />
        </View>
      </View>

      <Pressable
        onPress={onNext}
        className="w-full bg-[#00A52C] h-[40px] rounded-[10px] flex justify-center items-center mb-8"
      >
        <Text className="text-white font-bold text-[14px]">Next</Text>
      </Pressable>
    </View>
  );
};
const Step3 = ({ onNext }) => {
  return (
    <View className="flex-1 justify-between mx-7">
      <View className="mt-20 flex justify-end items-center  h-[500px]">
        <Text className="text-[#6B7678] text-[11px] font-bold">Step 3/5</Text>

        <Text className="text-[#181E1F] text-[24px] font-bold text-center mt-4">
          Enter your phone number
        </Text>

        <Text className="text-[#6B7678] text-[13px] font-bold text-center mt-2">
          Phone number will help protect your account as well as let employers
          contact you much easier
        </Text>

        <View className="w-full gap-4 mt-10">
          <Text className="text-[12px] text-[#565A63] my-2">Phone number</Text>
          <TextInput
            className="border rounded-[10px] "
            placeholder="+1 (902) 123 45 67"
          />
        </View>
      </View>

      <Pressable
        onPress={onNext}
        className="w-full bg-[#00A52C] h-[40px] rounded-[10px] flex justify-center items-center mb-8"
      >
        <Text className="text-white font-bold text-[14px]">Next</Text>
      </Pressable>
    </View>
  );
};
const Step4 = ({ onNext }) => {
  return (
    <View className="flex-1 justify-between mx-7">
      <View className="mt-20 flex justify-end items-center h-[500px]">
        <Text className="text-[#6B7678] text-[11px] font-bold">Step 4/5</Text>

        <Text className="text-[#181E1F] mb-4 text-[24px] font-bold text-center mt-4">
          Upload a profile picture
        </Text>
        <Image source={images.upload} style={{ width: 343, height: 180 }} />
        <Text className="text-[14px] mt-5 text-[#565A63] my-2 text-center ">
          Recommended resolution is 300x300 px. Max size – 2 MB. Allowed
          formats: *.jpg, *.jpeg, *.png, *.gif
        </Text>
      </View>

      <Pressable
        onPress={onNext}
        className="w-full bg-[#00A52C] h-[40px] rounded-[10px] flex justify-center items-center mb-8"
      >
        <Text className="text-white font-bold text-[14px]">Next</Text>
      </Pressable>
    </View>
  );
};
const Step5 = ({ onNext }) => {
  return (
    <View className="flex-1 justify-between mx-7">
      <View className="mt-20 flex justify-end items-center h-[500px]">
        <Text className="text-[#6B7678] text-[11px] font-bold">Step 5/5</Text>

        <Text className="text-[#181E1F] mb-4 text-[24px] font-bold text-center mt-4">
          Uploaded a profile picture
        </Text>
        <Image
          source={images.profile}
          style={{ width: 144, height: 144, borderRadius: 72 }}
        />
        <Text className="text-[14px] mt-5 text-[#00A52C] my-2 text-center ">
          Choose a different image
        </Text>
        <Text className="text-[14px] mt-5 text-[#565A63] my-2 text-center ">
          Recommended resolution is 300x300 px. Max size – 2 MB. Allowed
          formats: *.jpg, *.jpeg, *.png, *.gif
        </Text>
      </View>

      <Pressable
        onPress={()=>router.push('/(tabs)/jobs')}
        className="w-full bg-[#00A52C] h-[40px] rounded-[10px] flex justify-center items-center mb-8"
      >
        <Text className="text-white font-bold text-[14px]">Next</Text>
      </Pressable>
    </View>
  );
};
