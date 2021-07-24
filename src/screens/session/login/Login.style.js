import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.BACKGROUND_APP,
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    paddingVertical: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  flex: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.THEMECOLOR,
    marginHorizontal: Spacing.SCALE_18,
  },
});

export default styles;
