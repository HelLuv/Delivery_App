import * as React from 'react';
import {useLayoutEffect} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {ScrollView, Text, View,} from "react-native";

import TopBanner from "../../components/restaurant-screen/TopBanner";
import Info from "../../components/restaurant-screen/Info";
import Dishes from "../../components/restaurant-screen/Dishes";


const RestaurantScreen: React.FC = ({}) => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute<any>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  return (
    <>
      {/*<BasketIcon/>*/}
      <ScrollView>
        <View className="relative">
          <TopBanner imgUrl={imgUrl}/>

          <Info
            title={title}
            rating={rating}
            genre={genre}
            address={address}
            short_description={short_description}
          />
        </View>
        
        <Dishes dishes={dishes}/>
      </ScrollView>
    </>
  )
};

export default RestaurantScreen;