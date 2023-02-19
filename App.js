import React from "react";
import { TouchableOpacity,Image, StyleSheet } from "react-native";
import {NavigationContainer,DefaultTheme, useNavigation} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Tabs from './src/navigation/Tabs'
import Detail from './src/Screen/Detail/DetailHome';
import Onboarding from './src/Screen/OnBoard/OnBoarding';
import {COLORS,SIZES,icons}  from './src/constants'

const theme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent',
  }
}

const Stack =createNativeStackNavigator();
function App(){
  return(
    <NavigationContainer theme={theme} >
      <Stack.Navigator>
        <Stack.Screen  name="Onboarding" 
        component={Onboarding} 
        options={{
          title:null,
          headerStyle:{backgroundColor:COLORS.white},
          headerLeft:null,
          headerRight:()=>(
            <TouchableOpacity style={styles.menuButton} onPress={()=>console.log("Pressed")}>
            <Image 
            source={icons.barMenu}
            style={styles.barmenu}
            />
          </TouchableOpacity>
        )
      }}        
      />
        <Stack.Screen name="Home" component={Tabs} options={{
          title:null,backgroundColor:COLORS.white,
          headerLeft:()=>(
            <TouchableOpacity style={{marginLeft:SIZES.base}} 
            onPress={useNavigation().goBack}>
              <Image 
              source={icons.back}
              style={{resizeMode:'contain',
            width:25,
            height:25,
            }}
              />
            </TouchableOpacity>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginRight:SIZES.base}} 
            onPress={()=>console.log('pressed menu')}
            >
              <Image 
              source={icons.menu}
              style={{
                resizeMode:'contain',
                width:25,
                height:25
              }}
              />
            </TouchableOpacity>
          )
        }}/>

        <Stack.Screen name="Detail" component={Detail}  options={{headerShown:false,}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles=StyleSheet.create({
  menuButton:{
    marginRight:SIZES.base
  },
  barmenu:{
    width:25,
    height:25,
    resizeMode:'contain'
  }
})