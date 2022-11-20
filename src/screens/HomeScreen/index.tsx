import * as React from 'react';
import {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Header from "../../components/home-screen/Header";


interface HomeScreenProps {

}

const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  return (
    <SafeAreaView className="pt-10 bg-black/50">
      {/* header */}
      <Header/>
    </SafeAreaView>
  )
};

export default HomeScreen;