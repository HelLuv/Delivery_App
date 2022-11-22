import * as React from 'react';
import {View, Text} from 'react-native';

import {Dish} from "../../../types";
import DishRow from "./components/DishRow";
import {useAppSelector} from "../../../store";
import {selectBasketItems} from "../../../store/slices/basketSlice";


interface DishesProps {
  dishes: Array<Dish>;
}

const Dishes: React.FC<DishesProps> = ({dishes}) => {
  const items = useAppSelector(selectBasketItems);

  return (
    <View className={`${items.length > 0 && "pb-36"}`}>
      <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

      {dishes.map((item) => (
        <DishRow
          key={item._id}
          {...item}
        />
      ))}
    </View>
  )
};

export default Dishes;