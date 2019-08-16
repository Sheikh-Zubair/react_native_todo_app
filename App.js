import React from 'react';
import {Provider} from 'react-redux';

import RouterContainer from './src/navigators';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterContainer />
    </Provider>
  );
};

export default App;
