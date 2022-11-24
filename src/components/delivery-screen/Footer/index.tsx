import * as React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';


const Footer: React.FC = () => {

  return (
    <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
      <Image
        source={require('../../../../assets/deliverer.jpg')}
        className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
      />

      <View className="flex-1">
        <Text className="text-lg">Nick Miriad</Text>
        <Text className="text-gray-400">Your Rider</Text>
      </View>

      <Text className="text-[#00ccbb] text-lg mr-6">Call</Text>
    </SafeAreaView>
  )
};

export default Footer;
