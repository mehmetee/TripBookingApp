import { StyleSheet } from "react-native";
import { COLORS,SIZES,FONTS } from "../../../constants";

export default StyleSheet.create({
    container:{
        flex:1,
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.35,
        shadowRadius:3.84,
        elevation:5
    },
    /*Header*/
    headerContainer:{
        flex:1.9
    },
    headerBannerImage:{
        resizeMode:'cover',
        width:'100%',
        height:'82%'
    },
    headerBodyContainer:{
        position:'absolute',
        bottom:'2%',
        left:'5%',
        right:'5%',
        borderRadius:15,
        padding:15,
        backgroundColor:COLORS.white
    },
    headerInnerContainer1:{
        flexDirection:'row'
    },
    headerInnerContainer1Image:{
        width:70,
        height:70,
        borderRadius:15
    },
    headerTitleContainer:{
        marginHorizontal:SIZES.radius,
        justifyContent:'space-around'
    },
    headerTitle:{
        ...FONTS.h3
    },
    headerLocations:{
        color:COLORS.gray,
        ...FONTS.body3
    },
    headerDescriptonsContainer:{
        marginTop: SIZES.base 
    },
    headerDescriptons:{
        color: COLORS.gray,
        fontSize:13 
    },
    /*Header back and menu Buttons*/
    headerGlobalButtonContainer:{
        position:'absolute',
        top:35,
        left:20,
        right:20,
        flexDirection:'row'
    },
    headerBackButtonContainer:{
        flex:1
    },
    backImage:{
        resizeMode:'cover',
        width:30,
        height:30
    },
    headerMenuButtonContainer:{
        flex:1,
        alignItems:'flex-end'
    },
    menuImage:{
        resizeMode:'cover',
        width:30,
        height:30
    },

    /*Body*/
    bodyContainer:{flex:1.6},
    /*Body icons*/
    iconContainer:{
        flexDirection:'row',
        marginTop:SIZES.base,
        marginHorizontal:SIZES.padding*2,
        justifyContent:'space-between'
    },
    /*Body description about*/
    aboutContainer:{
        marginTop: SIZES.base, 
        paddingHorizontal: SIZES.padding
    },
    aboutTitle:{...FONTS.h2},
    aboutDescription:{
        marginTop:SIZES.radius, 
        color: COLORS.gray, 
        ...FONTS.body4 
    },

    /*Footer*/
    footerContainer:{
        flex:0.5,
        paddingHorizontal:SIZES.padding
    },
    globalLinear:{
        height:70,
        width:'100%',
        borderRadius:15
    },
    footerBodyContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    footerPriceContainer:{
        flex:1,
        marginHorizontal:SIZES.padding,
        justifyContent:'center'
    },
    priceText:{
        ...FONTS.h1,
        fontWeight:'bold'
    },
    footerButton:{
        width:130,
        height:'80%',
        marginHorizontal:SIZES.radius
    },
    buttonLinear:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:10
    },
    footerButtonText:{
        color:COLORS.white,
        ...FONTS.h2,
        textAlign:'center',
        fontWeight:'bold'
    }

})