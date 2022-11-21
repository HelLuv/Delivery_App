import {useEffect, useState} from "react";

import {Category} from "../../../../types";
import sanityClient from "../../../../api/sanity";


export const useGetCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);


  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        if (data) {
          setCategories(data);
        }
      });
  }, []);


  return {categories};
};