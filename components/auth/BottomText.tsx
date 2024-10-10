import React from "react";
import CustomText from "../global/CustomText";
import { StyleSheet, View } from "react-native";
import { FONTS } from "@/constants";

interface UnderlineProps {
  text: String;
}
const UnderlineText: React.FC<UnderlineProps> = ({ text }) => {
  return (
    <CustomText
      variant="h9"
      fontFamily={FONTS.regular}
      style={styles.underline}
    >
      {text}
    </CustomText>
  );
};

const BottomText = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <CustomText variant="h9" fontFamily={FONTS.regular} style={styles.text}>
        By proceeding. I accept Groww's <UnderlineText text="T&C" />.
        <UnderlineText text="Privacy Policy" />.{" "}
        <UnderlineText text="Tariff Rates" />.
      </CustomText>

      <CustomText variant="h9" fontFamily={FONTS.regular} style={styles.text}>
        <UnderlineText text="FATCA Declaration" /> &{" "}
        <UnderlineText text="CIBIL T&C" />
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { opacity: 0.6 },
  underline: { textDecorationLine: "underline" },
});
export default BottomText;
