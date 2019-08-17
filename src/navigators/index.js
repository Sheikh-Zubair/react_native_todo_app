import React, { Component } from 'react';
import { View, StatusBar, Platform } from 'react-native';

// navigator
import { Header, Icon } from 'react-native-elements';
import AppContainer from './AppContainer';
// Helpers
import NavigationService from './navigator';
import { BOARDING } from '../constants';

class RouterContainer extends Component {
  render() {
    if (Platform.OS === 'android') StatusBar.setTranslucent(true);
    return (
      <View style={{ flex: 1 }}>
        <Header
          barStyle="light-content"
          statusBarProps={{ backgroundColor: 'rgba(0,0,0,0)' }}
          backgroundColor="grey"
          centerComponent={{ text: 'My ToDo App', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={
            <Icon
              type="material"
              name="home"
              iconStyle={{ color: '#fff' }}
              underlayColor="transparent"
              onPress={() => NavigationService.navigate(BOARDING)}
            />
          }
        />
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
