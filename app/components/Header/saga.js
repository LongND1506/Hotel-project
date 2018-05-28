import { call, put, select, takeLatest,takeEvery,cancel, take} from 'redux-saga/effects';
import {callAPI,callApiRequireAuth,pause} from 'utils/callAPI';
import {message} from 'antd'
//LOGOUT
export function* Logout(){
    try {
        let res= yield callApiRequireAuth("http://localhost:8000/api/auth/logout","GET",localStorage.getItem('token')
    )
    console.log(res)
    if(res.code==200)
        {
            localStorage.removeItem('token')
            yield call(pause,1000)
            yield message.success('logout success')
            yield put({type:"LOGOUT_SUCCESS"})
        }
    else{
        yield put({type:"LOGOUT_FAILED"})
    }
    console.log('logout')
    } catch (error) {
        yield put({type:"LOGOUT_FAILED"})
        message.error(error) 
    }
    

}
export default function* rootSaga() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount);
    // yield takeEvery("LOGIN",Login)
     yield takeEvery("LOGOUT",Logout)
        
  }