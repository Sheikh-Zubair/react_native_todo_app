/* eslint-disable camelcase */
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Alert } from 'react-native';

import { inputChange } from '../actions';
import { LISTS_ADDED_SUCCESS, LISTS_ADDED_FAILURE, BOARDING, ADD_TO_LISTS } from '../../constants';
import { setItem } from '../../helpers/LocalStorage';
import NavigationService from '../../navigators/navigator';

export class SaveListsEpic {
  static saveListsEpic = action$ =>
    action$.pipe(
      ofType(ADD_TO_LISTS),
      switchMap(async ({ payload }) => {
        try {
          const data = { Lists: payload };
          await setItem('@lists', JSON.stringify(data));
          NavigationService.navigate(BOARDING);
          Alert.alert('List Added');
          return inputChange(LISTS_ADDED_SUCCESS, {});
        } catch (error) {
          console.log(error);
          return inputChange(LISTS_ADDED_FAILURE, {});
        }
        return null;
      }),
    );
}
