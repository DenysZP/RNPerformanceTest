import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import configureStore from './state/configureStore';
import HomeScreen from './views/HomeScreen';
import ComponentScreen from './views/ComponentScreen';
import PureComponentScreen from './views/PureComponentScreen';
import ImmutableComponentScreen from './views/ImmutableComponentScreen';
import RamdaComponentScreen from './views/RamdaComponentScreen';
import ReduxRamdaComponentScreen from './views/ReduxRamdaComponentScreen';
import ReduxReselectComponentScreen from './views/ReduxReselectComponentScreen';

const Stack = createStackNavigator();

const App = () => (
  <Provider store={configureStore()}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="PureComponent" component={PureComponentScreen} />
        <Stack.Screen name="ImmutableComponent" component={ImmutableComponentScreen} />
        <Stack.Screen name="RamdaComponent" component={RamdaComponentScreen} />
        <Stack.Screen name="ReduxRamdaComponent" component={ReduxRamdaComponentScreen} />
        <Stack.Screen name="ReduxReselectComponent" component={ReduxReselectComponentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
