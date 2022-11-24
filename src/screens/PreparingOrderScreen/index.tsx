import * as React from 'react';
import {Alert, SafeAreaView} from 'react-native';

import AnimatedBanner from "../../components/preparing-order-screen/AnimatedBanner";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useEffect} from "react";


const PreparingOrderScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000)
  }, [])

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <AnimatedBanner/>
    </SafeAreaView>
  )
};

export default PreparingOrderScreen;