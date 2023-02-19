import { StyleSheet } from "react-native";

import { COLORS,SIZES,FONTS} from "../../constants";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
    },

    image_Container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },

    image:{
        resizeMode:'contain',
        width:'100%',
        height:'100%'
    },
    descriptions_globalContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    
    descriptionContainer:{
        alignItems:'center',
        marginHorizontal:SIZES.padding
    },

    descriptionTitle:{...FONTS.h2},

    description:{
        color:COLORS.gray,
        ...FONTS.body3,
        marginTop:SIZES.padding,
        textAlign:'center'
    },

    button:{
        marginTop:SIZES.padding*2,
        width:'70%',
        height:50,
        alignItems:'center',
        justifyContent:'center'
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
    Linear_Container:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15
    },

    buton_Text:{
        color:COLORS.white,
        ...FONTS.h2
    }
})