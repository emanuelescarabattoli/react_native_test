import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "../Home";
import Test from "../Test";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Test: { screen: Test },
  },
  {
    defaultNavigationOptions: { header: null }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
