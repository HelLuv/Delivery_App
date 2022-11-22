import {useEffect, useState} from "react";

import {Restaurant} from "../../../../../../types";
import sanityClient from "../../../../../../api/sanity";


export const useGetRestaurants = (id: number) => {
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "featured" && _id == $id] {
            ...,
            restaurants[]->{
              ...,
              dishes[] ->,
              type-> {
                name
              }
                },
              }[0]
            `,
        {id}
      )
      .then((data) => {
        if (data?.restaurants) {
          setRestaurants(data.restaurants);

        }
      });
  }, [id]);

  return {restaurants};
}