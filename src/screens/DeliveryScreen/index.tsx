import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from "../../components/delivery-screen/Header";
import InfoModal from "../../components/delivery-screen/InfoModal";
import Map from "../../components/delivery-screen/Map";
import Footer from "../../components/delivery-screen/Footer";


const DeliveryScreen: React.FC = () => {

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <Header/>
        <InfoModal/>
      </SafeAreaView>

      <Map/>

      <Footer/>
    </View>
  )
};

export default DeliveryScreen;