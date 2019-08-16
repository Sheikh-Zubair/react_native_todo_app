import React from 'react';
import {Text, StyleSheet} from 'react-native';

const BoardingListItem = ({item}) => {
  const {heading} = styles;
  return <Text style={heading}>{item || 'List Item'}</Text>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    color: 'grey',
    marginBottom: 25,
  },
});

export default BoardingListItem;
