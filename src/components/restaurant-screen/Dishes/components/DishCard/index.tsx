import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Currency from "react-currency-formatter";

import {Dish} from "../../../../../types";
import {urlFor} from "../../../../../api/sanity";


interface DishCardProps extends Dish {
  setIsPressed: React.Dispatch<React.SetStateAction<boolean>>;
  isPressed: boolean
}

const DishCard: React.FC<DishCardProps> = ({
                                             name,
                                             short_description,
                                             _id,
                                             price,
                                             image,
                                             setIsPressed,
                                             isPressed
                                           }) => {

  return (
    <TouchableOpacity
      onPress={() => setIsPressed((prevState) => !prevState)}
      className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}
      activeOpacity={0.5}
    >
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{short_description}</Text>
          <Text className="text-gray-400 mt-2">
            <Currency quantity={price} currency="USD"/>
          </Text>
        </View>
        <View>
          <Image
            source={{uri: urlFor(image).url()}}
            className="h-20 w-20 bg-gray-300 p-4 border"
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default DishCard;