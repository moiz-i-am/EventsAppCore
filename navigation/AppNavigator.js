import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import TabNavigator from './MainTabNavigator';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import VerifyEmail from './../screens/VerifyEmail';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Login:Login,
    Signup:Signup,
    VerifyEmail: VerifyEmail,
    Tab: TabNavigator,
    
  })
);
