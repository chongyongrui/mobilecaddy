import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScreen'
import CameraScreen from '../screens/CameraScreen'
import HistoryScreen from '../screens/HistoryScreen'
import SettingsScreen from '../screens/SettingsScreen'
import ScoreTakingScreen from '../screens/ScoreTakingScreen'
import { Settings } from "react-native-web";
import { StyleSheet, Text, View, Image, TouchableOpacity} from "react-native/";
import react from "react";

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: 0,
      justifyContent: 'center',
      alignItems:'center',
    }}
    onPress = {onPress}
    >
    <View style ={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#e32f45'
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return(
    <Tab.Navigator
    tabBarOptions={{
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      elevation: 0,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      height: 90,
      ... StyleSheet.shadow
    }

    }>
      <Tab.Screen name = "Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent: 'center', top:10}}>
           <Image
            source={require('../assets/icons/HomePageIcon.png')}
            resizeMode = 'contain'
            style={{
              width: 25,
              height:25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }}
           />
           <Text style={{color: focused ? '#e32f45': '#748c94',
           }}>
            
           </Text>

          </View>
        ),
      }}/>
      <Tab.Screen name = "Caddy" component={ScoreTakingScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent: 'center', top:10}}>
           <Image
            source={require('../assets/icons/ScoreTakerIcon.png')}
            resizeMode = 'contain'
            style={{
              width: 25,
              height:25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }}
           />
           <Text style={{color: focused ? '#e32f45': '#748c94',
           }}>
            
           </Text>

          </View>
        ),
      }}/>
      <Tab.Screen
  name="Rangefinder"
  component={CameraScreen}
  options={{
    tabBarIcon: ({ focused }) => (
      <Image
        source={require('../assets/icons/CameraIcon.png')}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          tintColor: focused ? '#fff' : '#999',
        }}
      />
    ),
    tabBarButton: (props) => <CustomTabButton {...props} />,
  }}
/>


<Tab.Screen name = "History" component={HistoryScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent: 'center', top:10}}>
           <Image
            source={require('../assets/icons/HistoryIcon.png')}
            resizeMode = 'contain'
            style={{
              width: 25,
              height:25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }}
           />
           <Text style={{color: focused ? '#e32f45': '#748c94',
           }}>
            
           </Text>

          </View>
        ),
      }}/>
    

      <Tab.Screen name = "Settings" component={SettingsScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style ={{alignItems: 'center', justifyContent: 'center', top:10}}>
           <Image
            source={require('../assets/icons/SettingsIcon.png')}
            resizeMode = 'contain'
            style={{
              width: 25,
              height:25,
              tintColor: focused ? '#e32f45' : '#748c94'
            }}
           />
           <Text style={{color: focused ? '#e32f45': '#748c94',
           }}>
            
           </Text>

          </View>
        ),
      }}/>
    </Tab.Navigator>
    
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }

})



export default Tabs;