import * as React from 'react';
import {useEffect, useLayoutEffect} from 'react';
import {useNavigation, useRoute} from "@react-navigation/native";
import {ScrollView, View,} from "react-native";

import TopBanner from "../../components/restaurant-screen/TopBanner";
import Info from "../../components/restaurant-screen/Info";
import Dishes from "../../components/restaurant-screen/Dishes";
import {useAppDispatch, useAppSelector} from "../../store";
import {selectRestaurant, setRestaurant} from "../../store/slices/restaurantSlice";
import Basket from "../../components/restaurant-screen/Basket";
import {clearBasket} from "../../store/slices/basketSlice";


const RestaurantScreen: React.FC = () => {
  const navigation = useNavigation();
  const restaurant = useAppSelector(selectRestaurant);

  const dispatch = useAppDispatch();
  const {
    params: {
      _id,
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
        _id,
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

  useEffect(() => {
    if (restaurant._id !== _id) {
      dispatch(clearBasket());
    }
  }, [_id]);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])


  return (
    <>
      <Basket/>

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