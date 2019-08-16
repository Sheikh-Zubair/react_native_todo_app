import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Heading = ({extraStyling, children}) => {
  return <Text style={[styles.title, extraStyling]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'BebasNeue-Regular',
    textTransform: 'uppercase',
    fontSize: 48,
    lineHeight: 50,
    // color: TITLE_COLOR,
  },
});

export {Heading};
