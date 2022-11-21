import * as React from 'react';
import {Text, View} from 'react-native';
import {ArrowRightIcon} from "react-native-heroicons/outline";

import Restaurants from "../Restaurants";


interface FeatureRowProps {
  id: number;
  title: string;
  description: string;
}

const FeatureRow: React.FC<FeatureRowProps> = ({title, id, description}) => {

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <Restaurants id={id}/>
    </View>

  )
};

export default FeatureRow;