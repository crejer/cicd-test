import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './MainPage.style';

const MainPage = props => {
  return (
    <View>
      {props.children}
      <Text>Hello</Text>
    </View>
  );
};

export default MainPage;
