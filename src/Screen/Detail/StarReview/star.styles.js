import { StyleSheet } from "react-native";
import { COLORS,SIZES,FONTS } from "../../../constants";

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    textRate:{
        marginLeft:SIZES.base,
        color:COLORS.gray,
        ...FONTS.body3
    },

    image:{
        resizeMode:'cover',
        width:20,
        height:20,
    }


})