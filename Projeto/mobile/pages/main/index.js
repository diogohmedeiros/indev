import * as React from "react";
import { View, TouchableOpacity, Image, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import style from './style.js';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ContainerHome from '../../containers/containerHome';
import ContainerVagas from '../../containers/containerVaga';
import ContainerAnuncio from '../../containers/containerAnuncio';
import ContainerPerfil from '../../containers/containerPerfil';

function MyTabBar({ state, descriptors, navigation }) {
  
    let selected = state.index;
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let icon = <Icon name="house" color={(selected == index ) ? "#fff" : "#fff"} size={35} />;
          if(index == 1) {
            icon = <Icon name="work"  color={(selected == index ) ? "#fff" : "#fff"} size={30} />;
          }else if(index == 2) {
            icon = <Icon name="campaign" color={(selected == index ) ? "#fff" : "#fff"} size={39} />;
          }else if(index == 3) {
            icon = <Icon name="person" color={(selected == index ) ? "#fff" : "#fff"} size={35} />;
          }

          return (
            <View key={index} style={{flex:1, height: 60, width: "100%",}} >
                <View style={{flex:1, height: 40, width: "100%", backgroundColor: "#3757BE"}}>
                    <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}
                    >
                        {icon}
                    </TouchableOpacity>
                </View>
            </View>
          );
        })}
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();

  export default function App() {
    return (
      <NavigationContainer independent={true}>
        <StatusBar 
          hidden
          style='light'
          translucent= {false}
        />
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} 
          screenOptions={{
            headerStyle: {
              backgroundColor: "#F51344"
            },
            headerShown: false,
            tabBarOptions: {
                activeTintColor: "white",
                inactiveTintColor: "blue",
                upperCaseLabel: false,
                scrollEnabled: false,
                inactiveBackgroundColor: "white",
                indicatorStyle: {
                    height: null,
                    top: 0,
                    backgroundColor: 'blue',
                    borderRadius:10
                }
            }
        }}>
            <Tab.Screen 
                name="Home" 
                component={ContainerHome}
            />

            <Tab.Screen 
                name="Vagas" 
                component={ContainerVagas}
            />

            <Tab.Screen 
                name="Anuncio" 
                component={ContainerAnuncio}
            />
            <Tab.Screen 
                name="Perfil" 
                component={ContainerPerfil}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }