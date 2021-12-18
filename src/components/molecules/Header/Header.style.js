import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  section: {
    backgroundColor: Colors.THEMECOLOR,
    height: 280,
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  flex: {
    flexDirection: "row",
    paddingVertical: 15,
    justifyContent: "space-between",
  },

  title: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
  },
  value: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
    paddingVertical: 3,
  },
  heading1: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    paddingVertical: 8,
  },
  subtitle: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    paddingVertical: 3,
  },
  card: {
    backgroundColor: Colors.SECONDARY,
    borderRadius: 24,
  },
  cardHeader: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  cardFooter: {
    backgroundColor: Colors.GRAY_DARK,
    paddingVertical: 2,
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    paddingHorizontal: 16,
  },
  textFooter: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_16,
    paddingVertical: 3,
    paddingHorizontal: 16,
  }


});
export default styles;
