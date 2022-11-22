import * as React from 'react';
import {View, Text} from 'react-native';
import {Dish} from "../../../../../types";


interface DishRowProps extends Dish {

}

const DishRow: React.FC<DishRowProps> = ({_id, short_description, name, price, image}) => {

  return (
    <View>
      <Text>DishRow</Text>
    </View>
  )
};

export default DishRow;