import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid";


interface BasketButtonsProps {
  items: Array<any>;
}

const BasketButtons: React.FC<BasketButtonsProps> = ({items}) => {

  const removeItemFomBasket = () => {
    console.log('removeItemFomBasket')
  };
  const addItemToBasket = () => {
    console.log('addItemToBasket')
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