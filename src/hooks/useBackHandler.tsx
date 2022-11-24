import {NavigationProp, StackActions, useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import {BackHandler} from "react-native";


export const useBackHandler = (count = 1) => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const backAction = () => {
      const popAction = StackActions.pop(count);
      navigation.dispatch(popAction);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
}