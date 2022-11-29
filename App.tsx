import Navigation from "./src/navigation";
import {Provider} from "react-redux";
import store from "./src/store";
import {StatusBar} from "expo-status-bar";


const App = () => {
  return (
    <Provider store={store}>
      <Navigation/>
      <StatusBar style="auto"/>
    </Provider>
  );
}


export default App;
