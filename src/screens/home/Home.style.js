import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_APP,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading1: {
    color: Colors.DARK_BLUE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    paddingVertical: 8,
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
export default styles;
