import React from "react";
import { View,Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import {images,} from '../../constants'
import styles from './Onboarding.styles'

function Onboarding({navigation}){
    return(
        //render
        <SafeAreaView style={styles.container}>
            <View style={styles.image_Container}>
                <Image 
                source={images.onboardingImage} 
                style={styles.image}
                />
            </View>
            <View  style={styles.descriptions_globalContainer}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Digital Ticket</Text>
                    <Text style={styles.description}>
                        Easy solution to buy tickets for your travel, business trips, transportation, lodging and culinary.
                    </Text>
                </View>
                <TouchableOpacity style={[styles.shadow,styles.button]}
                    onPress={()=>navigation.navigate("Home")}>
                    <LinearGradient
                        style={styles.Linear_Container}
                        colors={["#46aeff",'#5884ff'] }
                        start={{x:0 ,  y:0}}
                        end={{x:1,y:1}}>

                        <Text style={styles.buton_Text}>Start !</Text>
                    
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Onboarding;