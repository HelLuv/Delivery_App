import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {XCircleIcon} from "react-native-heroicons/solid";
import {NavigationProp, useNavigation} from "@react-navigation/native";

import {useAppSelector} from "../../../store";
import {selectRestaurant} from "../../../store/slices/restaurantSlice";


const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>()
  const restaurant = useAppSelector(selectRestaurant);

  return (
    <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
      <View>
        <Text className="text-lg font-bold text-center">Basket</Text>
        <Text className="text-center text-gray-400">{restaurant.title}</Text>
      </View>

      <TouchableOpacity
        onPress={navigation.goBack}
        activeOpacity={0.5}
        className="rounded-full bg-gray-100 absolute top-6 right-5"
      >
        <XCircleIcon color="#00ccbb" size={50}/>
      </TouchableOpacity>
    </View>
  )
};

export default Header;