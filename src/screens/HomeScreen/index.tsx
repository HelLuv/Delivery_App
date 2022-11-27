import * as React from 'react';
import {useLayoutEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import ErrorBoundary from "react-native-error-boundary";

import Header from "../../components/home-screen/Header";
import Search from "../../components/home-screen/Search";
import Body from "../../components/home-screen/Body";


const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [])

  return (
    <ErrorBoundary>
      <SafeAreaView>
        <Header/>

        <Search/>

        <Body/>
      </SafeAreaView>
    </ErrorBoundary>
  )
};

export default HomeScreen;