import React from "react";
import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";


const Card: React.FC = () => {

  return (
    <View className={'p-10 '}>
      <Text className={'text-gray-400'}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </View>
  )
};

export default Card;