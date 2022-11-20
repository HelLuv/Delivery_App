import * as React from 'react';
import {useState} from 'react';
import {ScrollView} from 'react-native';
import CategoryCard from "./components/CategoryCard";
import {Category} from "../../../types";


interface CategoriesProps {

}

const Categories: React.FC<CategoriesProps> = ({}) => {
  const [categories, setCategories] = useState<Array<Category>>([{
    _id: 1,
    image: 'https://images.unsplash.com/photo-1657299156537-f4bcdced5392?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    name: 'Testing'
  }]);

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
          imgUrl={item.image}
          key={item._id}
        />
      ))}

    </ScrollView>
  )
};

export default Categories; 