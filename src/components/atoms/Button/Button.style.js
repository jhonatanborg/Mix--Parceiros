import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    backgroundColor: Colors.THEMECOLOR,
    borderRadius: 5,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
    backgroundColor: Colors.THEMECOLOR,
    borderRadius: 5,
    paddingHorizontal: 25,
    alignItems: "center",
  },
  text: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_12,
  },
});
export default styles;
