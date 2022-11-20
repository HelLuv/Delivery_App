import * as React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';


interface CategoryCardProps {
  imgUrl: string;
  title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({title, imgUrl}) => {

  return (
    <TouchableOpacity className="relative mr-2" activeOpacity={0.5}>
      <Image source={{
        uri: imgUrl,
      }}
             className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold bg-black/30 rounded">
        {title}
      </Text>
    </TouchableOpacity>
  )
};

export default CategoryCard;