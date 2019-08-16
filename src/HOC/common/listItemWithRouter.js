import React from 'react';
import {TouchableOpacity} from 'react-native';

const withRouter = Component => {
  return props => {
    const {
      navigation: {navigate},
      location,
    } = props;
    return (
      <TouchableOpacity onPress={() => navigate(location)}>
        <Component {...props} />
      </TouchableOpacity>
    );
  };
};

export default withRouter;
