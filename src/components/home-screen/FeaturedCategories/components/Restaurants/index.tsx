import * as React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';

import {Restaurant} from "../../../../../types";
import RestaurantCard from "../RestaurantCard";


interface RestaurantsProps {

}

const Restaurants: React.FC<RestaurantsProps> = ({}) => {
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);


  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
    >
      {restaurants?.map((item) => (
        <RestaurantCard/>
      ))}
    </ScrollView>
  )
};

export default Restaurants;