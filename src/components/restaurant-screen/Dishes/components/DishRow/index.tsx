import * as React from 'react';
import {useState} from "react";

import {Dish} from "../../../../../types";
import DishCard from "../DishCard";
import BasketButtons from "../BasketButtons";


interface DishRowProps extends Dish {
}

const DishRow: React.FC<DishRowProps> = ({_id, short_description, name, price, image}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <DishCard
        _id={_id}
        image={image}
        price={price}
        name={name}
        short_description={short_description}
        setIsPressed={setIsPressed}
        isPressed={isPressed}
      />

      {isPressed && (
        <BasketButtons
          name={name}
          short_description={short_description}
          price={price}
          image={image}
          _id={_id}
        />
      )}
    </>
  )
};

export default DishRow;