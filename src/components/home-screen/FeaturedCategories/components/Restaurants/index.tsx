import * as React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';

import {Restaurant} from "../../../../../types";
import RestaurantCard from "../RestaurantCard";


interface RestaurantsProps {

}

const Restaurants: React.FC<RestaurantsProps> = ({}) => {
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([{
    _id: 1,
    rating: 4.5,
    short_descr: "Some short test description",
    address: "Earth, Solar System, Milky Way",
    dishes: [],
    image: 'https://links.papareact.com/gn7',
    lat: '1000',
    long: '30',
    name: "Yo! Sushi",
    type: {name: "Japanese"}
  }]);


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
        <RestaurantCard
          key={item._id}
          id={item._id}
          imgUrl={item.image}
          title={item.name}
          rating={item.rating}
          genre={item.type?.name}
          address={item.address}
          short_description={item.short_descr}
          dishes={item.dishes}
          long={item.long}
          lat={item.lat}
        />
      ))}
    </ScrollView>
  )
};

export default Restaurants;