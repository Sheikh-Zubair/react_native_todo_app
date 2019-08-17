/* eslint-disable camelcase */
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Alert } from 'react-native';

import { inputChange } from '../actions';
import { LISTS_ADDED_SUCCESS, LISTS_ADDED_FAILURE, UPDATE_LISTS } from '../../constants';
import { setItem } from '../../helpers/LocalStorage';

export class UpdateListsEpic {
  static updateListsEpic = action$ =>
    action$.pipe(
      ofType(UPDATE_LISTS),
      switchMap(async ({ payload }) => {
        try {
          const data = { Lists: payload };
          await setItem('@lists', JSON.stringify(data));
          Alert.alert('List Updated');
          return inputChange(LISTS_ADDED_SUCCESS, {});
        } catch (error) {
          console.log(error);
          return inputChange(LISTS_ADDED_FAILURE, {});
        }
        return null;
      }),
    );
}
