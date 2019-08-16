import React, {Component} from 'react';
import {View, StatusBar, Platform} from 'react-native';

// navigator
import AppContainer from './AppContainer';
// Helpers
import NavigationService from './navigator';

class RouterContainer extends Component {
  render() {
    if (Platform.OS === 'android') StatusBar.setTranslucent(true);
    return (
      <View style={{flex: 1}}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

export default RouterContainer;
