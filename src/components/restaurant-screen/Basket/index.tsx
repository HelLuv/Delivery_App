import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import Currency from "react-currency-formatter";

import {selectBasketItems, selectBasketTotal} from "../../../store/slices/basketSlice";
import {useAppSelector} from "../../../store";


const Basket: React.FC = ({}) => {
  const items = useAppSelector(selectBasketItems);
  const navigation = useNavigation<NavigationProp<any>>();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        activeOpacity={0.5}
        className="mx-5 bg-[#00ccbb] p-4 rounded-lg flex-row"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded">
          {items.length}
        </Text>

        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>

        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="USD"/>
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default Basket;