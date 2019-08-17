/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { inputChange } from '../../redux/actions';
import { LIST_HEADING_CHANGE, BOARDING } from '../../constants';
import { Screen } from '../../component/common/Screen';
import { Heading } from '../../component/common/Heading';
import { Input } from '../../component/common/Input';

const NewListEdit = ({ todoListReducer, inputChange, navigation: { navigate } }) => {
  const { listHeading } = todoListReducer;
  return (
    <Screen>
      <View key="header">
        <Heading>{listHeading || 'Enter List Title'}</Heading>
      </View>
      <View key="content">
        <Input
          value={listHeading}
          onChangeText={text => {
            inputChange(LIST_HEADING_CHANGE, text);
          }}
        />
        <View style={{ marginTop: 30 }}>
          <Button
            title="Next"
            type="outline"
            raised
            disabled={!listHeading}
            onPress={() => navigate(BOARDING)}
          />
        </View>
      </View>
      <View key="footer" />
    </Screen>
  );
};

const mapStateToProps = ({ todoListReducer }) => ({ todoListReducer });

export default connect(
  mapStateToProps,
  { inputChange },
)(NewListEdit);
