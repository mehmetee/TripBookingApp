import React from "react";
import { View,Text, Image } from "react-native";
import {icons,} from "../../../constants";
import styles from "./star.styles";

const StarReview =({rate})=>{
    var starComponents=[];
    var fullStar =Math.floor(rate);
    var noStar=Math.floor(5-rate);
    var halfStar=5-fullStar-noStar;
    //full Star
    for (var i=0;i<fullStar;i++){
        starComponents.push(
            <Image 
            key={`full-${i}`}
            source={icons.starFull}
            style={styles.image}
            />
        )
    }
    //Half star
    for (var i=0;i<halfStar;i++){
        starComponents.push(
            <Image
            key={`half-${i}`}
            source={icons.starHalf}
            style={styles.image}
            />
        )
    }
    //No star
    for(var i=0;i<noStar;i++){
        starComponents.push(
            <Image 
            key={`empty-${i}`}
            source={icons.starEmpty}
            style={styles.image}
            />
        )
    }

    return(
        <View style={styles.container}>
            {starComponents}
            <Text style={styles.textRate}>{rate}</Text>
        </View>
    )
} 
export default StarReview;