/* eslint-disable camelcase */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Input } from 'react-native-elements';

const IconOrAdd = ({ addItem, listItemTitle, onEditing, onSave, onEdit }) => {
  const { input_style } = styles;
  return (
    <View>
      {addItem ? (
        <View style={{ marginBottom: 20 }}>
          <Input
            value={listItemTitle}
            onChangeText={onEditing}
            onEndEditing={onSave}
            autoFocus
            placeholder="Title"
            leftIcon={
              <Icon
                type="font-awesome"
                name="plus"
                underlayColor="transparent"
                iconStyle={input_style}
                onPress={onSave}
                size={40}
              />
            }
          />
        </View>
      ) : (
        <View style={{ alignItems: 'flex-start', marginBottom: 20 }}>
          <Icon
            type="font-awesome"
            name="plus-square"
            underlayColor="transparent"
            iconStyle={{ color: '#dfdfdf' }}
            size={40}
            onPress={onEdit}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input_style: {
    color: 'grey',
    marginRight: 15,
  },
});

export { IconOrAdd };
