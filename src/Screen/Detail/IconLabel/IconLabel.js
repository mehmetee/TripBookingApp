import React from "react";
import { View,Text, Image } from "react-native";
import styles from './iconstyle'

const IconLabel =({icon,label})=>{
    return(
        <View style={styles.container}>
            <Image 
                source={icon}
                style={styles.image}
            />
            <Text style={styles.title}>{label}</Text>
        </View>
    )
}

export default IconLabel;