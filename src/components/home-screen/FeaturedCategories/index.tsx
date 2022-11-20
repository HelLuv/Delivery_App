import * as React from 'react';
import {useState} from 'react';
import {FeaturedCategory} from "../../../types";
import FeatureRow from "./components/FeatureRow";


interface FeaturedCategoriesProps {

}

const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({}) => {
  const [featuredCategories, setFeaturedCategories] = useState<Array<FeaturedCategory>>([{
    _id: 1,
    name: "Some tasty cooking",
    short_descr: "Some very short description for restaurant"
  }]);

  return (
    <>
      {featuredCategories.map((item) => (
        <FeatureRow
          title={item.name}
          key={item._id}
          description={item.short_descr}
          id={item._id}
        />
      ))}
    </>
  )
};

export default FeaturedCategories;