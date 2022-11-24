import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {XMarkIcon} from "react-native-heroicons/solid";


const Header: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>()

  return (
    <View className="flex-row justify-between items-center p-5 pt-8">
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        activeOpacity={0.5}
      >
        <XMarkIcon color="white" size={30}/>
      </TouchableOpacity>

      <Text className="font-light text-white text-lg">Order Help</Text>
    </View>
  )
};

export default Header;