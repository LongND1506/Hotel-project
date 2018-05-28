/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);
const makeSelectLogin =() => createSelector(
  selectGlobal,
  (globalState) => globalState.get('isLogin')
)
const makeSelectFilter = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('filteropt') 
)
const makeSelectHotel = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('listhotel')
)
const makeSelectRoom = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('listroom')
)
const makeSelectdateCI = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookedroom','datecheckin'])
)
const makeSelectdateCO = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookedroom','datecheckout'])
)
const makeSelectnumofroom = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookedroom','numofroom'])
)
const makeSelectroomprice = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['bookedroom','roomprice'])
)
export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectLogin,
  makeSelectFilter,
  makeSelectHotel,
  makeSelectRoom,
  makeSelectdateCI,
  makeSelectdateCO,
  makeSelectnumofroom,
  makeSelectroomprice

};
