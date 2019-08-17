/* eslint-disable react/state-in-constructor */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements';

import { LOAD_LIST, NEW_LIST_EDIT } from '../../constants';
import { inputChange } from '../../redux/actions';
import { Screen } from '../../component/common/Screen';
import { Heading } from '../../component/common/Heading';

const MyLists = ({ myListReducer: { Lists }, navigation: { navigate }, inputChange }) => {
  return (
    <Screen>
      <View key="header">
        <Heading>My Lists</Heading>
      </View>
      <View key="content">
        {Lists.length > 0
          ? Lists.map(({ listHeading }, index) => {
              return (
                <ListItem
                  key={`${index + 1}`}
                  title={listHeading}
                  leftAvatar={{ title: `${index + 1}`, size: 'medium' }}
                  titleStyle={{ fontSize: 40 }}
                  rightIcon={
                    <Icon
                      type="font-awesome"
                      name="edit"
                      onPress={() => {
                        inputChange(LOAD_LIST, Lists[index]);
                        navigate(NEW_LIST_EDIT);
                      }}
                    />
                  }
                />
              );
            })
          : null}
      </View>
      <View key="footer" />
    </Screen>
  );
};

const mapStateToProps = ({ myListReducer }) => ({
  myListReducer,
});

export default connect(
  mapStateToProps,
  { inputChange },
)(MyLists);
