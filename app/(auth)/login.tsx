import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CText from "@/components/global/CustomText";
import { FONTS } from "@/constants";

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
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  imageContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
