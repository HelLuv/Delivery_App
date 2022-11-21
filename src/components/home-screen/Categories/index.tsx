import * as React from 'react';
import {ScrollView} from 'react-native';

import CategoryCard from "./components/CategoryCard";
import {useGetCategories} from "./hooks/useGetCategories";
import {urlFor} from "../../../api/sanity";


const Categories: React.FC = () => {
  const {categories} = useGetCategories();

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((item) => (
        <CategoryCard
          title={item.name}
          imgUrl={urlFor(item.image).width(200).url()}
          key={item._id}
        />
      ))}

    </ScrollView>
  )
};

export default Categories; 