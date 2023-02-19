import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screen/Home/Homee";
import { COLORS ,icons} from "../constants";

const Tab=createBottomTabNavigator();
const tabOptions={
    showLabel:false,
    style:{
        height:90,
        shadowColor:'#000',
        shadowOffset:{
            width:0,height:10
        },
        shadowOpacity:0.53,
        shadowRadius:13.97,
        elevation:21
    }
}

function Tabs(){
    return(
        <Tab.Navigator tabBarOptions={tabOptions}
        screenOptions={({route})=>({
            tabBarIcon:({focused})=>{
                const tintColor=focused ? COLORS.primary: COLORS.gray;
                switch (route.name) {
                    case "Homee":
                        return(
                            <Image 
                            source={icons.home}
                            style={{
                                resizeMode:'contain',
                                height:30,width:30,
                                tintColor:tintColor
                            }}
                            />
                        )
                    case "Search":
                        return(
                            <Image 
                            source={icons.search}
                            style={{
                                resizeMode:'contain',
                                height:30,width:30,
                                tintColor:tintColor
                            }}
                            />
                        )
                    case 'Bookmark':
                        return(
                            <Image 
                            source={icons.bookmark}
                            style={{
                                resizeMode:'contain',
                                height:30,width:30,
                                tintColor:tintColor
                            }}
                            />
                        )
                    case "Account":
                        return(
                            <Image 
                            source={icons.user}
                            style={{
                                resizeMode:'contain',
                                height:30,width:30,
                                tintColor:tintColor
                            }}
                            />
                        )
                }
            }
        })}
        >
            <Tab.Screen name="Homee" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Search" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Bookmark" component={Home} options={{headerShown:false}}/>
            <Tab.Screen name="Account" component={Home} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

export default Tabs;