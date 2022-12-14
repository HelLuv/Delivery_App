import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon} from "react-native-heroicons/solid";


interface InfoProps {
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
}

const Info: React.FC<InfoProps> = ({title, rating, genre, address, short_description}) => {

  return (
    <>
      <View>
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row item-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22}/>
              <Text className="text-xs text-gray-500 mt-1">
                <Text className="text-green-500">{rating}</Text> • {genre}
              </Text>
            </View>

            <View className="flex-row item-center space-x-1">
              <MapPinIcon color="gray" opacity={0.4} size={22}/>
              <Text className="text-xs text-gray-500 mt-1">
                <Text className="text-green-500">Nearby</Text> • {address}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">
            {short_description}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className="flex-row bg-white items-center space-x-2 p-4 border-y bg-gray-300"
        activeOpacity={0.5}
      >
        <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
        <Text className="pl-2 flex-1 text-lg font-bold">
          Have a food allergy?
        </Text>
        <ChevronRightIcon color="#00ccbb"/>
      </TouchableOpacity>
    </>
  )
};

export default Info;