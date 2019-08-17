/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from 'react-native';

const Input = ({
  textSize,
  padding,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  autoFocus,
  onChangeText,
  value,
  numeric,
  maxLength,
  onEndEditing,
  noPlaceHolder,
  editable,
  cancel,
}) => {
  const length = value ? value.length : 0;
  return (
    <View style={styles.container}>
      {numeric && length <= 10 ? (
        <Text
          style={
            textSize || padding
              ? [
                  styles.defaulttext,
                  textSize ? { fontSize: textSize } : '',
                  padding
                    ? {
                        paddingLeft: padding,
                        paddingRight: padding,
                      }
                    : '',
                ]
              : styles.defaulttext
          }>
          {noPlaceHolder ? '' : '+44'}
        </Text>
      ) : null}
      <TextInput
        style={
          textSize || padding
            ? [
                styles.input,
                textSize
                  ? {
                      fontSize: textSize,
                    }
                  : '',
                padding
                  ? {
                      paddingLeft: padding,
                      paddingRight: padding,
                    }
                  : '',
              ]
            : styles.input
        }
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        keyboardType={numeric ? 'numeric' : 'default'}
        maxLength={maxLength}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
        value={value}
        onChangeText={onChangeText}
        editable={editable || true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomColor: LABEL_COLOR,
    borderBottomWidth: 0.5,
  },
  defaulttext: {
    // color: TEXT_COLOR,
    fontSize: 18,
    margin: 5,
    marginTop: 0,
  },
  input: {
    flex: 1,
    // color: LABEL_COLOR,
    fontSize: 18,
    lineHeight: 20,
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  cancelImage: {
    width: 20,
    height: 20,
  },
});

export { Input };
