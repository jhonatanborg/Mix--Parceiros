import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 16,
    borderRadius: 8,
    paddingVertical: 16,
    marginVertical: 8,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_12,
    paddingRight: 12,
  },
  text1: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
  },
  text2: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
    paddingVertical: 8,
  },
  chip: {
    backgroundColor: Colors.WARNING,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.4,
  },

  textChip: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_12,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
});
export default styles;
