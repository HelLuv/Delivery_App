import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {ChevronDownIcon, UserIcon} from "react-native-heroicons/outline";


const Header: React.FC= () => {

  return (
    <View className="flex-row pb-3 items-center space-x-2 bg-black/50 px-4 pt-10">
      <Image
        source={{
          uri: "https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg",
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <View className="flex-row items-center">
          <Text className="font-bold text-xl">
            Current Location
          </Text>
          <Text className="pt-1 pl-1">
            <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
      </View>
      <UserIcon size={35} color="#00CCBB"/>
    </View>
  )
};

export default Header;