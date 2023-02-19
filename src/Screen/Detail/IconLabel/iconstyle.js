import { StyleSheet } from "react-native";
import { COLORS, FONTS,SIZES } from "../../../constants";

export default StyleSheet.create({
    container:{
        alignItems:'center'
    },
    image:{
        resizeMode:'cover',
        width:45,
        height:45,
    },

    title:{
        marginTop:SIZES.base,
        color:COLORS.gray, 
        ...FONTS.h3
    }
})