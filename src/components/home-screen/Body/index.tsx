import * as React from 'react';
import {ScrollView} from 'react-native';

import Categories from "../Categories";
import FeaturedCategories from "../FeaturedCategories";


const Body: React.FC = () => {

  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 180,
      }}
    >
      <Categories/>

      <FeaturedCategories/>
    </ScrollView>
  )
};

export default Body;