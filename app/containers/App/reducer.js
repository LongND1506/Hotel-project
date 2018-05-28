/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  isLogin:false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  listhotel:[],
  listroom:[],
  bookedroom:{
    datecheckin:'',
    datecheckout:'',
    numofroom:0,
    roomprice:0
  }
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    // case LOAD_REPOS:
    //   return state
    //     .set('loading', true)
    //     .set('error', false)
    //     .setIn(['userData', 'repositories'], false);
    // case LOAD_REPOS_SUCCESS:
    //   return state
    //     .setIn(['userData', 'repositories'], action.repos)
    //     .set('loading', false)
    //     .set('currentUser', action.username);
    // case LOAD_REPOS_ERROR:
    //   return state
    //     .set('error', action.error)
    //     .set('loading', false);

//LOGIN    
    case "LOGIN":
      return state
        .set('loading',true)
    case "LOGIN_SUCCESS":
      return state
        .set('isLogin',true)
        .set('loading',false)
    case "LOGIN_FAILED":
      return state
        .set('loading',false)
//SIGNUP
    case "SIGNUP":
      return state
        .set('loading',true)
    case "SIGNUP_SUCCESS":
      return state
        .set('loading',false)
    case "SIGNUP_FAILED":
      return state
        .set('loading',false)
//LOGOUT
    case "LOGOUT":
      return state
        .set('loading',true)
    case "LOGOUT_SUCCESS":
      return state
        .set('isLogin',false)
        .set('loading',false)
//LOAD HOTEL
    case "LOAD_DATA_SUCCESS":
      return state
        .set('listhotel',action.hotels)
//LOAD ROOM
    case "LOAD_ROOM_SUCCESS":
      return state
        .set('listroom',action.rooms)
//CHOOSE OPTION FOR BOOKING
    case "CHOOSE_DATE":
      return state
        .setIn(['bookedroom','datecheckin'],action.date.datecheckin)
        .setIn(['bookedroom','datecheckout'],action.date.datecheckout)
    case "ROOM_NUM_CHANGE":
      return state  
        .setIn(['bookedroom','numofroom'],action.num)
    case "CHOOSE_ROOM":
      return state
        .setIn(['bookedroom','roomprice'],action.price)
// BOOK ROOM
    case "BOOK_ROOM":
      console.log('book room reducer')
//RATING
    case "RATING":
      console.log('rating reducer')
    default:
      return state;
  }
}

export default appReducer;
