import React from "react";
import { View,Text, Image, TouchableOpacity, } from "react-native";

import styles from './Options.Styles';
import { LinearGradient } from "expo-linear-gradient";



const OptionItem=({icon,bgColor,label,onPress})=>{
    return(
        <TouchableOpacity style={styles.button_container} onPress={onPress}>
            <View style={[styles.shadow,styles.inner_container] }>
                <LinearGradient style={styles.linear_container}
                colors={bgColor}
                start={{x:0 ,y:0}}
                end={{x:0,y:1}}
                >
                    <Image 
                    source={icon}
                    style={styles.image}
                    />
                </LinearGradient>
            </View>
            <Text style={styles.label} >{label}</Text>
        </TouchableOpacity>
    )
}

export default OptionItem;
