import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid";

import {useAppDispatch, useAppSelector} from "../../../../../store";
import {addToBasket, removeFromBasket, selectBasketItemsById} from "../../../../../store/slices/basketSlice";
import {Dish} from "../../../../../types";


interface BasketButtonsProps extends Dish {
}

const BasketButtons: React.FC<BasketButtonsProps> = ({_id, image, price, name, short_description}) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => selectBasketItemsById(state, _id));

  const removeItemFomBasket = () => {
    if (!(items.length > 0)) return;

    dispatch(removeFromBasket({_id}))
  };

  const addItemToBasket = () => {
    dispatch(addToBasket({_id, image, price, name, short_description}))
  };

  return (
    <View className="bg-white px-4">
      <View className="flex-row items-center space-x-2 pb-3">
        <TouchableOpacity
          activeOpacity={0.5}
          disabled={!items.length}
          onPress={removeItemFomBasket}
        >
          <MinusCircleIcon
            color={items.length > 0 ? "#00ccbb" : "gray"}
            size={40}
          />
        </TouchableOpacity>

        <Text>{items.length}</Text>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={addItemToBasket}
        >
          <PlusCircleIcon
            color="#00ccbb"
            size={40}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default BasketButtons;