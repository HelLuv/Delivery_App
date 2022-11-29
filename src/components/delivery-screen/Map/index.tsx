import * as React from 'react';
import MapView, {Marker} from "react-native-maps";
import {View} from "react-native";

import {useAppSelector} from "../../../store";
import {selectRestaurant} from "../../../store/slices/restaurantSlice";


const Map: React.FC = () => {
  const restaurant = useAppSelector(selectRestaurant);


  return (
    <View className="flex-1 -mt-10 z-0">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        style={{minHeight: "80%"}}
      >
        <Marker
          coordinate={{latitude: restaurant.lat, longitude: restaurant.long}}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>
    </View>
  )
};

export default Map;