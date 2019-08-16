import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';

import {inputChange} from '../../redux/actions';
import {LIST_HEADING_CHANGE, NEW_LIST_EDIT} from '../../constants';
import {Screen} from '../../component/common/Screen';
import {Heading} from '../../component/common/Heading';
import {Input} from '../../component/common/Input';

const NewListTitle = ({
  todoListReducer: {listHeading},
  inputChange,
  navigation: {navigate},
}) => {
  return (
    <Screen>
      <View key="header" />
      <View key="content" style={{marginTop: 100}}>
        <Heading>Enter List Title</Heading>
        <Input
          value={listHeading}
          onChangeText={text => {
            inputChange(LIST_HEADING_CHANGE, text);
          }}
        />
        <View style={{marginTop: 30}}>
          <Button
            title="Next"
            type="outline"
            raised
            disabled={!listHeading}
            onPress={() => navigate(NEW_LIST_EDIT)}
          />
        </View>
      </View>
      <View key="footer" />
    </Screen>
  );
};

const mapStateToProps = ({todoListReducer}) => {
  return {todoListReducer};
};

export default connect(
  mapStateToProps,
  {inputChange},
)(NewListTitle);
