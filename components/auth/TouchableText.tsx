import { COLORS, FONTS } from "@/constants";
import React from "react";
import { Text, TouchableOpacity, StyleSheet, TextStyle } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const TouchableText: React.FC<{
  firstText: string;
  style?: TextStyle;
  onPress?: () => void;
}> = ({ firstText, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.bottomText, { color: COLORS.themeColor }, style]}>
        {firstText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    fontFamily: FONTS.medium,
    fontSize: RFPercentage(1.5),
  },
});

export default TouchableText;
