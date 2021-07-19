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
});

export default styles;
