import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import ErrorBoundary from "react-native-error-boundary";

import Header from "../../components/basket-screen/Header";
import Deliver from "../../components/basket-screen/Deliver";
import GroupItems from "../../components/basket-screen/GroupItems";
import Total from "../../components/basket-screen/Total";


const BasketScreen: React.FC = () => {

  return (
    <ErrorBoundary>
      <SafeAreaView className="flex-1 bg-white pt-4">
        <View className="flex-1 bg-gray-100">
          <Header/>

          <Deliver/>

          <GroupItems/>

          <Total/>
        </View>
      </SafeAreaView>
    </ErrorBoundary>
  )
};

export default BasketScreen;