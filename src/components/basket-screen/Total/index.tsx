import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import Currency from "react-currency-formatter";

import {useAppSelector} from "../../../store";
import {selectBasketTotal} from "../../../store/slices/basketSlice";


const Total: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>()
  const basketTotal = useAppSelector(selectBasketTotal);

  return (
    <View className="p-5 bg-white mt-5 space-y-4">
      <View className="flex-row justify-between">
        <Text className="text-gray-400">SubTotal</Text>
        <Text className="text-gray-400">
          <Currency quantity={basketTotal} currency="USD"/>
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text className="text-gray-400">Delivery Fee</Text>
        <Text className="text-gray-400">
          <Currency quantity={2.99} currency="USD"/>
        </Text>
      </View>

      <View className="flex-row justify-between">
        <Text>Order Total</Text>
        <Text className="font-extrabold">
          <Currency quantity={basketTotal + 2.99} currency="USD"/>
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('PreparingOrderScreen')}
        className="rounded-lg bg-[#00ccbb] p-4"
      >
        <Text className="text-center text-white text-lg font-bold">
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default Total;