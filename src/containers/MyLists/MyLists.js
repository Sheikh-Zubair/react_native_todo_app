/* eslint-disable react/state-in-constructor */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements';

import { LOAD_LIST, NEW_LIST_EDIT, UPDATE_LISTS } from '../../constants';
import { inputChange } from '../../redux/actions';
import { Screen } from '../../component/common/Screen';
import { Heading } from '../../component/common/Heading';

const MyLists = ({ myListReducer: { Lists }, navigation: { navigate }, inputChange }) => {
  console.log(Lists.length, Lists);
  return (
    <Screen>
      <View key="header">
        <Heading>My Lists</Heading>
      </View>
      <View key="content">
        {Lists.length > 0 ? (
          Lists.map(({ listHeading }, index) => {
            return (
              <ListItem
                key={`${index + 1}`}
                title={listHeading}
                leftAvatar={{ title: `${index + 1}`, size: 'small' }}
                titleStyle={{ fontSize: 30 }}
                rightIcon={
                  <View style={{ flexDirection: 'row' }}>
                    <Icon
                      type="font-awesome"
                      name="edit"
                      onPress={() => {
                        inputChange(LOAD_LIST, Lists[index]);
                        navigate(NEW_LIST_EDIT, { editListIndex: index });
                      }}
                    />
                    <Icon
                      type="font-awesome"
                      name="trash"
                      onPress={() => {
                        Alert.alert(
                          'Do you want to delete?',
                          `${listHeading}`,
                          [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('cancel pressed'),
                              style: 'cancel',
                            },
                            { text: 'OK', onPress: () => deleteItem(Lists, index, inputChange) },
                          ],
                          { cancelable: false },
                        );
                      }}
                      iconStyle={{ marginLeft: 10, color: '#cc0000' }}
                    />
                  </View>
                }
              />
            );
          })
        ) : (
          <Text>There are no lists</Text>
        )}
      </View>
      <View key="footer" />
    </Screen>
  );
};

const deleteItem = (Lists, index, inputChange) => {
  Lists.splice(index, 1);
  inputChange(UPDATE_LISTS, Lists);
};

const mapStateToProps = ({ myListReducer }) => ({
  myListReducer,
});

export default connect(
  mapStateToProps,
  { inputChange },
)(MyLists);
