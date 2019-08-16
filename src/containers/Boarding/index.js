import React, {Component} from 'react';

import BoardingList from '../../component/common/BoardingList';
import ListItemWithIcon from '../../component/common/ListItemWithIcon';
import withRouter from '../../HOC/common/listItemWithRouter';

// route
import {BOARDING, NEW_LIST} from '../../constants';

class Boarding extends Component {
  render() {
    const ListItemWithRouter = withRouter(ListItemWithIcon);
    return (
      <BoardingList>
        <ListItemWithRouter
          {...this.props}
          item="New List"
          icon_name="plus"
          location={NEW_LIST}
        />
        <ListItemWithRouter
          {...this.props}
          item="My Lists"
          icon_name="th-list"
          location={BOARDING}
        />
        <ListItemWithRouter
          {...this.props}
          item="About"
          icon_name="info-circle"
          location={BOARDING}
        />
      </BoardingList>
    );
  }
}

export default Boarding;
