import React from 'react';
import {View, StyleSheet} from 'react-native';

const BoardingList = ({children}) => {
  const {container} = styles;
  return <View style={container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BoardingList;
