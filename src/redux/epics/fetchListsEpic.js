/* eslint-disable camelcase */
import { switchMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Alert } from 'react-native';

import { inputChange } from '../actions';
import { FETCH_LISTS, FETCH_LISTS_SUCCESS, FETCH_LISTS_FAILURE } from '../../constants';
import { getItem } from '../../helpers/LocalStorage';

export class FetchListsEpic {
  static fetchListsEpic = action$ =>
    action$.pipe(
      ofType(FETCH_LISTS),
      switchMap(async payload => {
        try {
          const Item = await getItem('@lists');
          return inputChange(FETCH_LISTS_SUCCESS, JSON.parse(Item) || { Lists: [] });
        } catch (error) {
          Alert.alert('List Fetched');
          return inputChange(FETCH_LISTS_FAILURE, {});
        }
        return null;
      }),
    );
}
