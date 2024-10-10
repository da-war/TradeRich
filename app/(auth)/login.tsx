import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CText from "@/components/global/CustomText";
import { FONTS } from "@/constants";
import { screenHeight, screenWidth } from "@/utils/Scaling";
import SocialLoginButton from "@/components/auth/SocialLoginButton";

import { Ionicons } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <CText fontFamily={FONTS.thin} variant="h1">
          Hello
        </CText>
        <CText fontFamily={FONTS.thin} variant="h7">
          Invest • Pay • Loans
        </CText>
      </View>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require("@/assets/images/login_animation_light.png")}
          style={styles.image}
        />
      </View>
      <SocialLoginButton
        icon={
          <Image
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
            source={require("../../assets/images/google.png")}
          />
        }
        text="Continue with Google"
        onPress={() => {}}
      />
      <SocialLoginButton
        icon={<Ionicons name="logo-facebook" size={24} color="blue" />}
        text="Continue with Google"
        onPress={() => {}}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: screenWidth,
    height: screenHeight * 0.45,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
