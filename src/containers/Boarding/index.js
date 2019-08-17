/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardingList from '../../component/common/BoardingList';
import ListItemWithIcon from '../../component/common/ListItemWithIcon';
import withRouter from '../../HOC/common/listItemWithRouter';
import { inputChange } from '../../redux/actions';

// route
import { MY_LISTS, FETCH_LISTS, NEW_LIST_TITLE, ABOUT } from '../../constants';

class Boarding extends Component {
  componentDidMount() {
    const { navigation, inputChange } = this.props;
    this.willFocusSubscription = navigation.addListener('willFocus', async () => {
      inputChange(FETCH_LISTS, {});
    });
  }

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }

  render() {
    const ListItemWithRouter = withRouter(ListItemWithIcon);
    return (
      <BoardingList>
        <ListItemWithRouter
          {...this.props}
          item="New List"
          icon_name="plus"
          location={NEW_LIST_TITLE}
        />
        <ListItemWithRouter
          {...this.props}
          item="My Lists"
          icon_name="th-list"
          location={MY_LISTS}
        />
        <ListItemWithRouter {...this.props} item="About" icon_name="info-circle" location={ABOUT} />
      </BoardingList>
    );
  }
}

export default connect(
  null,
  { inputChange },
)(Boarding);
