import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

const NewList = props => {
  console.log(props.todoListReducer);
  return (
    <View style={{flex: 1}}>
      <Text style={{marginTop: 20}}>This is new list</Text>
    </View>
  );
};

const mapStateToProps = ({todoListReducer}) => {
  return {todoListReducer};
};

export default connect(mapStateToProps)(NewList);
