import * as React from 'react';
import { View, Text, Button } from 'react-native';

const handleNavigate = (navigate, destination) => () => {
  navigate(destination);
};

const HomeScreen = ({ navigation: { navigate } }) => (
  <View>
    <Text>Home Screen</Text>
    <Button
      title="component"
      onPress={handleNavigate(navigate, 'Component')}
    />
    <Button
      title="pure component"
      onPress={handleNavigate(navigate, 'PureComponent')}
    />
    <Button
      title="component + immutable"
      onPress={handleNavigate(navigate, 'ImmutableComponent')}
    />
    <Button
      title="component + ramda"
      onPress={handleNavigate(navigate, 'RamdaComponent')}
    />
    <Button
      title="redux + ramda"
      onPress={handleNavigate(navigate, 'ReduxRamdaComponent')}
    />
    <Button
      title="redux + reselect"
      onPress={handleNavigate(navigate, 'ReduxReselectComponent')}
    />
  </View>
);

export default HomeScreen;
