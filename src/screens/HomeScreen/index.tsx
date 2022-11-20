import * as React from 'react';
import {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Header from "../../components/home-screen/Header";
import Search from "../../components/home-screen/Search";
import Body from "../../components/home-screen/Body";


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
    <SafeAreaView>
      <Header/>

      <Search/>

      <Body/>
    </SafeAreaView>
  )
};

export default HomeScreen;