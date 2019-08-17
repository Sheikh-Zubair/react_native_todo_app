import { createAppContainer, createStackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import Boarding from '../containers/Boarding';
import NewListNavigator from './newListNavigator';
import MyLists from '../containers/MyLists/MyLists';

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Boarding,
      NewListNavigator,
      MyLists,
    },
    {
      initialRouteName: 'Boarding',
      headerMode: 'none',
      transitionConfig: () => fromRight(),
    },
  ),
);

export default AppContainer;
