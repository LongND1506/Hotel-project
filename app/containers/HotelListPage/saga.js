import { call, put, select, takeLatest,takeEvery,cancel} from 'redux-saga/effects';
import {callAPI,callApiRequireAuth} from 'utils/callAPI';
import {message} from 'antd'
//LOAD HOTEL
export function* Loadhotel(){
    try {
            const res = yield callAPI('http://localhost:8000/api/hotel','GET')
    if(res.code==200)
        {
            const hotels=res.hotel;
            yield put({type:"LOAD_DATA_SUCCESS",hotels})
        }
    } catch (error) {
        message.error('' + error)
    }
    console.log('load hotel')
}
export default function* rootSaga() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount);
    // yield takeEvery("LOGIN",Login)
     yield [
         takeLatest("LOAD_HOTEL",Loadhotel),
        ]
  }