import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import BoardingListItem from './BoardingListItem';

const ListItemWithIcon = props => {
  const {item, icon_name} = props;
  const {listItemContainer, icon, iconContainer} = styles;
  return (
    <View style={listItemContainer}>
      <View style={iconContainer}>
        <Icon type="font-awesome" name={icon_name} iconStyle={icon} />
      </View>
      <BoardingListItem item={item} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    color: 'grey',
  },
  iconContainer: {
    width: 55,
    marginLeft: -10,
    paddingBottom: 25,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 150,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default ListItemWithIcon;
