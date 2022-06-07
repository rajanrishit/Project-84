import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Postscreen from "../screens/Postscreen";

const Stack = createStackNavigator ();

const StackNavigator=()=>{
return(
    <StackNavigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
  }}
  >

<Stack.Screen name="Home" component={TabNavigator}/>
<Stack.Screen name="Postscreen" component={Postscreen}/>
</StackNavigator>
  );
};

export default StackNavigator;
