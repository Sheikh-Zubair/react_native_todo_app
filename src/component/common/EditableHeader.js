/* eslint-disable camelcase */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Heading } from './Heading';
import { Input } from './Input';

const EditableHeader = ({ heading, headingStyle, isEditing, onSave, onEdit, onEditing }) => {
  const { heading_style, input_style } = styles;
  return (
    <View>
      {isEditing ? (
        <View style={{ flexDirection: 'row' }}>
          <Input value={heading} onChangeText={onEditing} autoFocus />
          <Icon
            type="font-awesome"
            name="save"
            iconStyle={input_style}
            onPress={onSave}
            size={30}
          />
        </View>
      ) : (
        <View>
          {heading.length > 9 ? (
            <View>
              <TouchableOpacity onPress={onEdit}>
                <Heading extraStyling={headingStyle}>{heading || 'Enter List Title'}</Heading>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <Heading extraStyling={headingStyle}>{heading || 'Enter List Title'}</Heading>
              <Icon type="font-awesome" name="edit" iconStyle={heading_style} onPress={onEdit} />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading_style: {
    marginTop: 35,
    color: 'grey',
  },
  input_style: {
    color: 'grey',
    marginLeft: 10,
  },
});

export { EditableHeader };
