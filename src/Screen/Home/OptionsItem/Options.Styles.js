import { StyleSheet } from "react-native";
import {COLORS, FONTS} from '../../../constants/index';

export default StyleSheet.create({
    button_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    inner_container:{
        width:60,
        height:60
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
    },

    linear_container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15
    },

    image:{
        resizeMode:'cover',
        tintColor:COLORS.white,
        width:30,
        height:30
    },

    label:{
        color:COLORS.gray, 
        ...FONTS.body3
    }
})