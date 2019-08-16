import {createAppContainer, createStackNavigator} from 'react-navigation';
import {fromRight} from 'react-navigation-transitions';
import Boarding from '../containers/Boarding';
import NewListNavigator from './newListNavigator';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Boarding: Boarding,
      NewListNavigator,
    },
    {
      initialRouteName: 'Boarding',
      headerMode: 'none',
      transitionConfig: () => fromRight(),
    },
  ),
);

export default AppContainer;
