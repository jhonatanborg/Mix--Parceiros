import { StyleSheet, Dimensions } from "react-native";
import { Typography, Colors, Spacing } from "../../styles";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f365b3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
    },
    markerFixed: {

    },
    marker: {
        height: 48,
        width: 48,
    },
    footer: {
        bottom: 0,
        position: "absolute",
        width: "100%",
        justifyContent: "flex-end",
        padding: 20,
        backgroundColor: Colors.BACKGROUND_APP,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
    },
    heading1: {
        color: Colors.GRAY_DARK,
        fontSize: Typography.FONT_SIZE_22,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        marginTop: 10,
    },
    text: {
        color: Colors.GRAY_DARK,
        fontSize: Typography.FONT_SIZE_22,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        paddingHorizontal: 10,

    },
    button: {
        backgroundColor: Colors.THEMECOLOR,
        width: "100%",
    },
    content: {
        backgroundColor: Colors.GRAY_LIGHT,
        padding: 20,
        borderRadius: 8,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    icon: {
        backgroundColor: Colors.GRAY_DARK,
        padding: 10,
    },
});

export default styles;
