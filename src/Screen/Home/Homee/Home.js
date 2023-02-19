import React from "react";
import { View,Text, Image, TouchableOpacity, FlatList } from "react-native";
import {icons, images,} from '../../../constants/index';
import OptionItem from "../OptionsItem/OptionItem";
import {data} from '../../../Data/Data.Destination'
import styles from './Home.style';

function Home({navigation}){
    const [destinations,setDestinations]=React.useState(data);

    function renderDestination(item,index){
        var destinationsStyle={};
        if (index==0){
            destinationsStyle=styles.destinationStyles;
        }
        return(
            <TouchableOpacity style={[styles.flatListButton,{...destinationsStyle}]} onPress={()=>{navigation.navigate('Detail')}}>
                <Image 
                source={item.img}
                style={styles.flatListImage}
                />
                <Text style={styles.flatListImageTitle}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            {/*banner */ }
           <View style={styles.bannerContainer}>
            <Image 
            source={images.homeBanner}
            style={styles.bannerImage}
            />
           </View>

            {/* Options*/}
            <View style={styles.options_container}>
                <View style={styles.options_Inner_container}>
                    <OptionItem 
                        icon={icons.airplane}
                        bgColor={['#46aeff','#5884ff']}
                        label='Flight'
                        onPress={()=>{console.log('Flight')}}
                    />
                    <OptionItem 
                        icon={icons.train}
                        bgColor={['#fddf90','#fcda13']}
                        label='Train'
                        onPress={()=>{console.log('press train')}}
                    />
                    <OptionItem 
                        icon={icons.bus}
                        bgColor={['#e973ad','#da5df2']}
                        label='Bus'
                        onPress={()=>{console.log('press bus')}}
                    />
                    <OptionItem 
                        icon={icons.taxi}
                        bgColor={['#fddf90','#fcda13']}
                        label='Taxi'
                        onPress={()=>{console.log('press Taxi')}}
                    />  
                </View>
                <View style={styles.options_Inner_container}>
                    <OptionItem icon={icons.bed}
                    bgColor={['#ffc465','#ff9c5f']}
                    label='Hotel'
                    onPress={()=>{console.log('press hotel')}}
                    />
                    <OptionItem icon={icons.eat}
                    bgColor={['#7cf1fb','#4ebefd']}
                    label='Eats'
                    onPress={()=>{console.log('press eat')}}
                    />
                    <OptionItem icon={icons.compass}
                    bgColor={['#7be993','#46caaf']}
                    label='Adventure'
                    onPress={()=>{console.log('press adventure')}}
                    />
                    <OptionItem icon={icons.event}
                    bgColor={['#fca397','#fc7b6c']}
                    label='Event'
                    onPress={()=>{console.log('press event')}}
                    />
                </View>
            </View>

            {/*Destination*/}
            <View style={styles.destinationContainer}>
                <Text style={styles.destinationTitle} >Destination</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={destinations}
                    keyExtractor={item=>item.id.toString()}
                    renderItem={({item,index})=>renderDestination(item,index)}

                />
                <View>

                </View>
            </View>

        </View>
    )
}
export default Home;