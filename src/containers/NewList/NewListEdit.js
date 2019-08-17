/* eslint-disable react/state-in-constructor */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import { inputChange } from '../../redux/actions';
import { LIST_HEADING_CHANGE, BOARDING } from '../../constants';
import { Screen } from '../../component/common/Screen';
import { EditableHeader } from '../../component/common/EditableHeader';

class NewListEdit extends Component {
  state = { editing: false };

  render() {
    const {
      todoListReducer,
      inputChange,
      navigation: { navigate },
    } = this.props;
    const { listHeading } = todoListReducer;
    const { editing } = this.state;
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
        <View key="content" />
        <View key="footer">
          <Button
            title="Save"
            type="outline"
            disabled={!listHeading}
            onPress={() => navigate(BOARDING)}
          />
        </View>
      </Screen>
    );
  }
}

const mapStateToProps = ({ todoListReducer }) => ({ todoListReducer });

export default connect(
  mapStateToProps,
  { inputChange },
)(NewListEdit);
