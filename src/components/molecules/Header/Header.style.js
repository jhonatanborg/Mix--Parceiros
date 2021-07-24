import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.THEMECOLOR,
    height: 230,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  flex: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  title: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
  },
  value: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
    borderBottomWidth: 1,
    borderColor: Colors.WHITE,
    borderStartWidth: 15,
    paddingVertical: 3,
  },
  heading1: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    paddingVertical: 8,
  },
});
export default styles;
