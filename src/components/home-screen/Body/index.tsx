import * as React from 'react';
import {ScrollView, Text} from 'react-native';


interface BodyProps {

}

const Body: React.FC<BodyProps> = ({}) => {

  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <Text>Body</Text>
    </ScrollView>
  )
};

export default Body;