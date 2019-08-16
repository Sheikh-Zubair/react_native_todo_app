import {createAppContainer, createStackNavigator} from 'react-navigation';
import {fromRight} from 'react-navigation-transitions';
import NewList from '../containers/NewList';

const NewListNavigator = createAppContainer(
  createStackNavigator(
    {
      NewList,
    },
    {
      headerMode: 'none',
      transitionConfig: () => fromRight(),
    },
  ),
);

export default NewListNavigator;
