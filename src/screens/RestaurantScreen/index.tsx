import * as React from 'react';
import {useEffect, useLayoutEffect} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {ScrollView, View,} from "react-native";

import TopBanner from "../../components/restaurant-screen/TopBanner";
import Info from "../../components/restaurant-screen/Info";
import Dishes from "../../components/restaurant-screen/Dishes";
import {useAppDispatch} from "../../store";
import {setRestaurant} from "../../store/slices/restaurantSlice";


const RestaurantScreen: React.FC = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

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

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);

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