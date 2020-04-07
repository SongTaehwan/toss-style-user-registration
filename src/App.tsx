import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import React, { useState, createContext } from 'react';
import { AppFlowParamList } from '@navigators/types';
import { FlowConst } from '@navigators/enums';
import { SignUpFlow } from '@navigators';

const AppFlowStack = createStackNavigator<AppFlowParamList>();

const UserContext = createContext();

const App = () => {
  const [] = useState();
  return (
    <NavigationContainer>
      <AppFlowStack.Navigator
        initialRouteName={FlowConst.SignUpFlow}
        headerMode={'none'}>
        <AppFlowStack.Screen
          name={FlowConst.SignUpFlow}
          component={SignUpFlow}
        />
      </AppFlowStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
