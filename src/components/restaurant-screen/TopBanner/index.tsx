import * as React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ArrowLeftIcon} from "react-native-heroicons/solid";
import {useNavigation} from "@react-navigation/native";

import {urlFor} from "../../../api/sanity";


interface TopBannerProps {
  imgUrl: string;
}

const TopBanner: React.FC<TopBannerProps> = ({imgUrl}) => {
  const navigation = useNavigation();

  return (
    <>
      <Image
        source={{uri: urlFor(imgUrl).url()}}
        className="w-full h-56 bg-gray-300 p-4"
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={navigation.goBack}
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
      >
        <ArrowLeftIcon height={20} width={20} color="#00ccbb"/>
      </TouchableOpacity>
    </>
  )
};

export default TopBanner;