import {createStackNavigator} from 'react-navigation-stack';

import Home from './../screens/Home';
import Login from './../screens/Login';

const MainStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default MainStack;
