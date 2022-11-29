import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import ErrorBoundary from "react-native-error-boundary";

import Header from "../../components/delivery-screen/Header";
import InfoModal from "../../components/delivery-screen/InfoModal";
import Map from "../../components/delivery-screen/Map";
import Footer from "../../components/delivery-screen/Footer";
import {useBackHandler} from "../../hooks/useBackHandler";


const DeliveryScreen: React.FC = () => {
  useBackHandler(2);

  return (
    <ErrorBoundary>
      <View className="bg-[#00ccbb] flex-1">
        <SafeAreaView className="z-50">
          <Header/>
          <InfoModal/>
        </SafeAreaView>
        <ErrorBoundary>
          <Map/>
        </ErrorBoundary>
        <Footer/>
      </View>
    </ErrorBoundary>
  )
};

export default DeliveryScreen;