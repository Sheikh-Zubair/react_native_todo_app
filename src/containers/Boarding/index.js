/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import BoardingList from '../../component/common/BoardingList';
import ListItemWithIcon from '../../component/common/ListItemWithIcon';
import withRouter from '../../HOC/common/listItemWithRouter';

// route
import { BOARDING, NEW_LIST_NAV } from '../../constants';

const Boarding = props => {
  const ListItemWithRouter = withRouter(ListItemWithIcon);
  return (
    <BoardingList>
      <ListItemWithRouter {...props} item="New List" icon_name="plus" location={NEW_LIST_NAV} />
      <ListItemWithRouter {...props} item="My Lists" icon_name="th-list" location={BOARDING} />
      <ListItemWithRouter {...props} item="About" icon_name="info-circle" location={BOARDING} />
    </BoardingList>
  );
};

export default Boarding;
