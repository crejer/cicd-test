import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './MainPage.style';

const MainPage = props => {
  return (
    <View>
      {props.children}
      <Text>Hello</Text>
      {props.enabled && <Text>nope</Text>}
    </View>
  );
};

export default MainPage;
