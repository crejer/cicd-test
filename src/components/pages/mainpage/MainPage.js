import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './MainPage.style';

const MainPage = props => {
  return (
    <View>
      {props.children}
      <Text>Testing</Text>
    </View>
  );
};

export default MainPage;
