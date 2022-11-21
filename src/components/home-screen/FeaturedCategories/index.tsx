import * as React from 'react';
import FeatureRow from "./components/FeatureRow";
import {useGetFeaturedCategories} from "./hooks/useGetFeaturedCategories";


const FeaturedCategories: React.FC = () => {
  const {featuredCategories} = useGetFeaturedCategories();

  return (
    <>
      {featuredCategories.map((item) => (
        <FeatureRow
          title={item.name}
          key={item._id}
          description={item.short_description}
          id={item._id}
        />
      ))}
    </>
  )
};

export default FeaturedCategories;