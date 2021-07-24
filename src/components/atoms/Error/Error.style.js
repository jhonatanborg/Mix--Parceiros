import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";

const styles = StyleSheet.create({
  error: {
    backgroundColor: Colors.ALERT_BACKGROUND,
    borderRadius: 5,
    alignItems: "center",
    opacity: 10,
    paddingVertical: 15,
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
  },
  errorText: {
    color: Colors.ALERT,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    paddingHorizontal: 25,
  },
});
export default styles;
