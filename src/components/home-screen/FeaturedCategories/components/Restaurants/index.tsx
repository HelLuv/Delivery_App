import * as React from 'react';
import {ScrollView} from 'react-native';
import RestaurantCard from "../RestaurantCard";
import {useGetRestaurants} from "./hooks/useGetRestaurants";


interface RestaurantsProps {
  id: number;
}

const Restaurants: React.FC<RestaurantsProps> = ({id}) => {
  const {restaurants} = useGetRestaurants(id);


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
          _id={item._id}
          imgUrl={item.image}
          title={item.name}
          rating={item.rating}
          genre={item.type?.name}
          address={item.address}
          short_description={item.short_description}
          dishes={item.dishes}
          long={item.long}
          lat={item.lat}
        />
      ))}
    </ScrollView>
  )
};

export default Restaurants;