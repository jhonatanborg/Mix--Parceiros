import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 25,
    backgroundColor: Colors.THEMECOLOR,
    borderRadius: 5,
  },
  text: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
  },
});
export default styles;
