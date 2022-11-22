import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {MapPinIcon, StarIcon} from "react-native-heroicons/outline";

import {urlFor} from "../../../../../api/sanity";


interface RestaurantCardProps {
  _id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: Array<any>;
  long: string;
  lat: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
                                                         _id,
                                                         imgUrl,
                                                         title,
                                                         rating,
                                                         genre,
                                                         address,
                                                         short_description,
                                                         dishes,
                                                         long,
                                                         lat,
                                                       }) => {

  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="bg-white mr-3 shadow"
      onPress={() => {
        navigation.navigate("Restaurant", {
          _id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          dishes,
          long,
          lat,
        });
      }}
    >
      <Image
        source={{uri: urlFor(imgUrl).url()}}
        className="h-36 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22}/>
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> • {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" opacity={0.4} size={22}/>
          <Text className="text-xs text-gray-500">Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default RestaurantCard;