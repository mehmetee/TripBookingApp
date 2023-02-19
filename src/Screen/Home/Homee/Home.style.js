import { StyleSheet } from "react-native";
import { COLORS,SIZES,FONTS } from "../../../constants";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white
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

    /*banner */
    bannerContainer:{
        flex:1,
        marginTop:SIZES.base,
        paddingHorizontal:SIZES.padding
    },
    bannerImage:{
        resizeMode:'cover',
        width:'100%',
        height:"100%",
        borderRadius:15  
    },

    /* Options*/
    options_container:{
        flex:1,
        justifyContent:'center'
    },
    options_Inner_container:{
        flexDirection:'row',
        marginHorizontal:SIZES.base,
        marginTop:SIZES.padding
    } ,

    /*Destination*/
    destinationContainer:{flex:1},
    destinationTitle:{
        marginTop:15,
        marginBottom:7 ,
        marginHorizontal:SIZES.padding, 
        ...FONTS.h2
    },

    /* FlatList Destination Render */
    destinationStyles:{marginLeft:SIZES.padding},
    flatListButton:{
        justifyContent:'center',
        marginHorizontal:SIZES.base,
    },
    flatListImage:{
        resizeMode:'cover',
        width:SIZES.width*0.28,
        height:'82%',
        borderRadius:15
    },
    flatListImageTitle:{
        marginTop:SIZES.base/2,
        ...FONTS.h4
    }

})