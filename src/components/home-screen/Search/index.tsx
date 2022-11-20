import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import {AdjustmentsVerticalIcon, MagnifyingGlassIcon,} from "react-native-heroicons/outline";

interface SearchProps {

}

const Search: React.FC<SearchProps> = ({}) => {

  return (
    <View className="flex-row items-center space-x-2 py-2 px-4">
      <View className="flex-row space-x-2 flex-1 bg-gray-200 p-2">
        <Text className="pt-1">
          <MagnifyingGlassIcon color="gray" size={20}/>
        </Text>
        <TextInput
          placeholder="Restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsVerticalIcon color="#00CCBB"/>
    </View>
  )
};

export default Search;