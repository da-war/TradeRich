import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "../global/CustomText";
import { COLORS, FONTS } from "@/constants";

interface SocialLoginButtonProps {
  icon: React.ReactNode;
  text: string;
  onPress: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      {icon}
      <CustomText variant="h8" fontFamily={FONTS.medium} style={styles.text}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginVertical: 10,
    backgroundColor: COLORS.light_background,
    borderWidth: 1,
    borderColor: "#DFDFDF",
  },
  text: {
    marginLeft: 10,
    color: "black",
  },
});

export default SocialLoginButton;
