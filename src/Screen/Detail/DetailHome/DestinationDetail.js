import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View,Text, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../../../constants";

import IconLabel from "../IconLabel/IconLabel";
import StarReview from "../StarReview/StarReview";
import styles from './DetailHomeStyles';

function Destination({navigation}){
    return(
        <View style={styles.container}>
           {/*Header*/ }
            <View style={styles.headerContainer} >
                <Image 
                source={images.skiVillaBanner}
                style={styles.headerBannerImage}
                />
                <View style={[styles.headerBodyContainer,styles.shadow]}>
                    <View style={styles.headerInnerContainer1}>
                        <View style={styles.shadow}>
                            <Image  source={images.skiVilla}
                            style={styles.headerInnerContainer1Image}
                            />
                        </View>
                        <View style={styles.headerTitleContainer}>
                            <Text style={styles.headerTitle}>Ski Villa</Text>
                            <Text style={styles.headerLocations}>France</Text>
                            <StarReview 
                                rate={4.5}
                            />
                        </View>
                    </View>
                    <View style={styles.headerDescriptonsContainer}>
                        <Text style={styles.headerDescriptons}>
                            Ski Villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort
                        </Text>
                    </View>
                </View>
                {/*Header Buttons*/}
                <View style={styles.headerGlobalButtonContainer}>
                    <View style={styles.headerBackButtonContainer}>
                        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
                            <Image 
                                source={icons.back}
                                style={styles.backImage}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerMenuButtonContainer}>
                        <TouchableOpacity onPress={()=>{console.log('press menü')}}>
                            <Image 
                                source={icons.menu}
                                style={styles.menuImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

           {/*Body*/ }
           <View style={styles.bodyContainer} >
               {/*icons*/ }
                <View style={styles.iconContainer}>
                    <IconLabel 
                        icon={icons.villa}
                        label='Villa'
                    />
                       <IconLabel 
                        icon={icons.parking}
                        label='Parking'
                    /> 
                       <IconLabel 
                        icon={icons.wind}
                        label='4 °C'
                    />    
                </View>
                {/*About*/}
                <View style={styles.aboutContainer}>
                    <Text style={styles.aboutTitle}>About</Text>
                    <Text style={styles.aboutDescription}>
                        Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as fitness center, sauna, steam room to star-rated restaurants.
                    </Text>
                </View>

           </View>

           {/*Footer*/ }
           <View style={styles.footerContainer} >
                <LinearGradient 
                style={styles.globalLinear}
                colors={['#edf0fc','#d6dfff']}
                start={{x:0,y:0}}
                end={{x:1,y:0}}
                >
                    <View style={styles.footerBodyContainer}>
                        <View style={styles.footerPriceContainer}>
                            <Text style={styles.priceText}>$1000</Text>
                        </View>
                        <TouchableOpacity style={styles.footerButton} onPress={()=>{console.log("Booking on Pressed")}}>
                                <LinearGradient
                                 style={styles.buttonLinear}
                                 colors={['#46aeff','#5884ff']}
                                 start={{x:0,y:0}}
                                 end={{x:1,y:0}}
                                >
                                    <Text style={styles.footerButtonText}>BOOKİNG</Text>
                                </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
           </View>

        </View>
    )
}
export default Destination;