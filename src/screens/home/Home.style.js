import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_APP,
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  heading1: {
    color: Colors.DARK_BLUE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_22,
    paddingVertical: 8,
  },
});
export default styles;
