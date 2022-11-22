import * as React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {useEffect, useState} from "react";
import Currency from "react-currency-formatter";

import {useAppDispatch, useAppSelector} from "../../../store";
import {removeFromBasket, selectBasketItems} from "../../../store/slices/basketSlice";
import {urlFor} from "../../../api/sanity";


const GroupItems: React.FC = () => {
  const items = useAppSelector<Array<any>>(selectBasketItems);
  const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {});

    setGroupItemsInBasket(groupItems);
  }, [items?.length]);

  return (
    <ScrollView>
      {Object.entries(groupItemsInBasket).map(([key, items]) => (
        <View
          key={key}
          className="flex-row items-center space-x-3 bg-white py-2 px-5"
        >
          <Text className="text-[#00ccbb]">{items.length} x</Text>
          <Image
            className="h-12 w-12 rounded-full"
            source={{uri: urlFor(items[0].image)?.url()}}
          />
          <Text className="flex-1">{items[0]?.name}</Text>
          <Text className="text-gray-600">
            <Currency quantity={items[0]?.price} currency="USD"/>
          </Text>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => dispatch(removeFromBasket({_id: key}))}
          >
            <Text className="text-[#00CCBB] text-xs">Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  )
};

export default GroupItems;