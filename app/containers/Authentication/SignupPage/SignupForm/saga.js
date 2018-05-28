import { call, put, select, takeLatest,takeEvery,cancel} from 'redux-saga/effects';
import {callAPI,callApiRequireAuth,} from 'utils/callAPI';
import {message} from 'antd'
export function* Signup(action){
    let signupacc={
        email: action.account.email,
        password: action.account.password,
        username: action.account.nickname
      };
      try {
        let res= yield callAPI("http://localhost:8000/api/auth/signup","POST",signupacc)
        if(res.code==200)
        {
            yield put({type:"SIGNUP_SUCCESS"})
            yield message.success('Signup success ! Check your email to active account !')
        }
        else{
            yield put({type:"SIGNUP_FAILED"})
            message.error(res.message)
        }
      } catch (error) {
            yield put({type:"SIGNUP_FAILED"})
            message.error(error)
      }
    
   console.log('11111')
}
export default function* rootSaga() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount);
    // yield takeEvery("LOGIN",Login)
     yield [
         
         takeEvery("SIGNUP",Signup),
        
        ]
  }
