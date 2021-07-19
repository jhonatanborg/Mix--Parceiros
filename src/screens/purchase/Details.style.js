import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BACKGROUND_APP,
    paddingTop: 25,
    paddingHorizontal: 16,
    flex: 1,
  },
  backButton: {
    backgroundColor: Colors.WHITE,
    padding: 5,
    borderRadius: 8,
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTotal: {
    flex: 2,
    backgroundColor: Colors.THEMECOLOR,
    paddingVertical: 10,
    marginRight: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  labeTotal: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_22,
  },
  textTotal: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
  },
  cardCommission: {
    backgroundColor: Colors.SUCCESS,
    flex: 3,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  labelComission: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_22,
  },
  textCommision: {
    color: Colors.THEMECOLOR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
  },
  flex: {
    flexDirection: "row",
    paddingVertical: 5,
    justifyContent: "space-between",
  },
  heading1: {
    color: Colors.GRAY_DARK,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
    paddingVertical: 10,
  },
  bottomBar: {
    backgroundColor: Colors.WHITE,
    paddingVertical: 20,
    elevation: 2,
    shadowColor: Colors.BLACK,
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "100%",
    paddingHorizontal: 16,
  },
});
export default styles;
