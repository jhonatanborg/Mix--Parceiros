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
  cardCheck: {
    backgroundColor: Colors.GRAY_MEDIUM,
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
  content1: {
    flex: 3,
  },
  content2: {
    flex: 1,
  },
  title: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_12,
    paddingRight: 16,
  },
  text1: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
  },
  text2: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    paddingVertical: 8,
  },
  chip: {
    backgroundColor: Colors.WARNING,
    borderRadius: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "25%",
    marginTop: 8,
  },

  textChip: {
    color: Colors.WHITE,
  },
});
export default styles;
