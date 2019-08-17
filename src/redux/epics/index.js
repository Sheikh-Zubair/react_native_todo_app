import { combineEpics } from 'redux-observable';
import { FetchListsEpic } from './fetchListsEpic';
import { SaveListsEpic } from './saveListsEpic';
import { UpdateListsEpic } from './updateListsEpic';

export const epics = combineEpics(
  FetchListsEpic.fetchListsEpic,
  SaveListsEpic.saveListsEpic,
  UpdateListsEpic.updateListsEpic,
);
