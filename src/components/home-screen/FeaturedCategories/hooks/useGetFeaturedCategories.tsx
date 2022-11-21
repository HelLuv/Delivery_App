import {useEffect, useState} from "react";

import sanityClient from "../../../../api/sanity";
import {FeaturedCategory} from "../../../../types";


export const useGetFeaturedCategories = () => {
  const [featuredCategories, setFeaturedCategories] = useState<Array<FeaturedCategory>>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured"] {
        ...,
        restaurants[]->{
          ...,
          dishes[] ->
        }
      }`
      )
      .then((data) => {
        if (data) {
          setFeaturedCategories(data);
        }
      });
  }, []);


  return {featuredCategories};
}