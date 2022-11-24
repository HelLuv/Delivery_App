import * as React from 'react';
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress';


const AnimatedBanner: React.FC = () => {

  return (
    <>
      <Animatable.Image
        source={require('../../../../assets/orderLoading.gif')}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-full"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate color="white"/>
    </>

  )
};

export default AnimatedBanner;