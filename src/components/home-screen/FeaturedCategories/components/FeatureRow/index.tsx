import * as React from 'react';
import {Text, View} from 'react-native';


interface FeatureRowProps {
  id: number;
  title: string;
  description: string;
}

const FeatureRow: React.FC<FeatureRowProps> = ({title, id, description}) => {

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text>{title}</Text>
      </View>
    </View>
  )
};

export default FeatureRow;