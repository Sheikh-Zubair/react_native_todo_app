import { createAppContainer, createStackNavigator } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';
import NewListTitle from '../containers/NewList/NewListTitle';
import NewListEdit from '../containers/NewList/NewListEdit';

const NewListNavigator = createAppContainer(
  createStackNavigator(
    {
      NewListEdit,
      NewListTitle,
    },
    {
      headerMode: 'none',
      transitionConfig: () => fromRight(),
    },
  ),
);

export default NewListNavigator;
