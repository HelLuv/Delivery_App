import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';


const Deliver: React.FC = () => {

  return (
    <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
      <Image
        source={{
          uri: "https://cdn.dribbble.com/users/2740774/screenshots/5490510/media/96cce37b93ea000e70388e8973446b70.jpg?compress=1&resize=1000x750&vertical=top",
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
      />
      <Text className="flex-1">Deliver in 50-70 min</Text>
      <TouchableOpacity activeOpacity={0.5}>
        <Text className="text-[#00ccbb]">Change</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Deliver;