/* eslint-disable react/state-in-constructor */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Button, ListItem, CheckBox, Icon } from 'react-native-elements';

import { inputChange } from '../../redux/actions';
import {
  LIST_HEADING_CHANGE,
  LIST_ITEM_CHECKED,
  ADD_ITEM_TO_LIST,
  ADD_TO_LISTS,
} from '../../constants';
import { Screen } from '../../component/common/Screen';
import { EditableHeader } from '../../component/common/EditableHeader';
import { IconOrAdd } from '../../component/common/IconOrAdd';

class NewListEdit extends Component {
  state = { editing: false, addItem: false, itemTitle: null, editListIndex: null };

  componentDidMount() {
    const {
      navigation: { state },
    } = this.props;
    this.setState({ editListIndex: state.params ? state.params.editListIndex : null });
  }

  listItemChecked(checked, index) {
    const {
      todoListReducer: { listItem },
      inputChange,
    } = this.props;
    const list = listItem.slice();
    list[index].isDone = !checked;
    inputChange(LIST_ITEM_CHECKED, list);
  }

  deleteListItem(index) {
    const {
      todoListReducer: { listItem },
      inputChange,
    } = this.props;
    const list = listItem.slice();
    list.splice(index, 1);
    inputChange(LIST_ITEM_CHECKED, list);
  }

  addItemToList() {
    const { itemTitle } = this.state;
    if (itemTitle) {
      const {
        todoListReducer: { listItem },
        inputChange,
      } = this.props;
      const list = listItem.slice();
      list.push({ title: itemTitle, isDone: false });
      inputChange(ADD_ITEM_TO_LIST, list);
      this.setState({ addItem: false });
    }
  }

  saveList() {
    const { editListIndex } = this.state;
    const {
      myListReducer: { Lists },
      todoListReducer,
      inputChange,
    } = this.props;
    const myList = Lists.slice();
    if (editListIndex !== null) {
      myList[editListIndex] = { ...todoListReducer };
    } else {
      myList.push(todoListReducer);
    }
    inputChange(ADD_TO_LISTS, myList);
  }

  render() {
    const {
      todoListReducer,
      inputChange,
      myListReducer: { loading },
    } = this.props;
    const { listHeading, listItem } = todoListReducer;
    const { editing, addItem, itemTitle } = this.state;
    return (
      <Screen>
        <View key="header">
          <EditableHeader
            heading={listHeading}
            isEditing={editing}
            onEditing={text => inputChange(LIST_HEADING_CHANGE, text)}
            onEdit={() => this.setState({ editing: true })}
            onSave={() => this.setState({ editing: false })}
          />
        </View>
        <View key="content">
          {listItem.length > 0
            ? listItem.map(({ title, isDone }, index) => {
                return (
                  <ListItem
                    key={`${index + 1}`}
                    title={title}
                    leftAvatar={{ title: `${index + 1}`, size: 'small' }}
                    titleStyle={{ fontSize: 20 }}
                    rightIcon={
                      <View style={{ flexDirection: 'row' }}>
                        <CheckBox
                          checked={isDone}
                          onPress={() => this.listItemChecked(isDone, index)}
                        />
                        <Icon
                          type="font-awesome"
                          name="times"
                          iconStyle={{ marginTop: 15, color: '#cc0000' }}
                          onPress={() => {
                            this.deleteListItem(index);
                          }}
                        />
                      </View>
                    }
                  />
                );
              })
            : null}
          <View>
            <IconOrAdd
              listItemTitle={itemTitle}
              addItem={addItem}
              onEditing={text => this.setState({ itemTitle: text })}
              onEdit={() => this.setState({ addItem: true })}
              onSave={() => this.addItemToList()}
            />
          </View>
        </View>
        <View key="footer">
          <Button
            loading={loading}
            title="Save Changes"
            type="outline"
            disabled={!listHeading}
            onPress={() => this.saveList()}
          />
        </View>
      </Screen>
    );
  }
}

const mapStateToProps = ({ todoListReducer, myListReducer }) => ({
  todoListReducer,
  myListReducer,
});

export default connect(
  mapStateToProps,
  { inputChange },
)(NewListEdit);
