import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import{createStackNavigator} from "@react-navigation/stack";

export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigator /> 
    </NavigationContainer>
  );
}