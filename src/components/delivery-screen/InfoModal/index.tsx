import * as React from 'react';
import {View, Text, Image} from 'react-native';
import * as Progress from "react-native-progress";

import {useAppSelector} from "../../../store";
import {selectRestaurant} from "../../../store/slices/restaurantSlice";


const InfoModal: React.FC = () => {
  const restaurant = useAppSelector(selectRestaurant);

  return (
    <View className="bg-white/80 mx-5 my-2 rounded-md p-6 mt-0 z-50 shadow-md">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-lg text-gray-300">Estimated Arrival</Text>
          <Text className="text-4xl font-bold">45-55 Minutes</Text>
        </View>
        <Image
          source={{
            uri: "https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/200w.gif",
          }}
          className="h-20 w-20"
        />
      </View>
      <Progress.Bar color="#00ccbb" indeterminate/>
      <Text className="pt-2">Your order at {restaurant.title} is being prepared</Text>
    </View>
  )
};

export default InfoModal;