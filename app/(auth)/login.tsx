import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "@/components/global/CustomText";
import { FONTS } from "@/constants";

const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomText fontFamily={FONTS.thin} variant="h1">
        Hello
      </CustomText>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
