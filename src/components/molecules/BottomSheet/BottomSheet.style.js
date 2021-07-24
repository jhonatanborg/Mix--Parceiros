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
  listStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginVertical: 15,
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
  textDefault: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
  },
  textSelected: {
    color: Colors.WHITE,
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
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  chipDefault: {
    backgroundColor: Colors.GRAY_LIGHT,
  },
  chipSelected: {
    backgroundColor: Colors.THEMECOLOR,
  },
  textChip: {
    color: Colors.WHITE,
  },
});
export default styles;
