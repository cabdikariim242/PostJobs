import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function applied() {
  return (
     <SafeAreaView>
          <ScrollView>
            <View>
              <Text>applied</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
  )
}