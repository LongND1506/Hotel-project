import { call, put, select, takeLatest,takeEvery,cancel} from 'redux-saga/effects';
import {callAPI,callApiRequireAuth} from 'utils/callAPI';
//LOAD ROOM
export function* Loadroom(action){
    try {
        let res= yield callAPI("http://localhost:8000/api/room/"+action.hotelid,"GET")
        console.log(res)
        if(res.code==200)
            {
                const rooms=res.room
                yield put({type:"LOAD_ROOM_SUCCESS",rooms})
            }
     
    } catch (error) {
        alert(error)
    }
}
export function* Bookroom(action){
    try {
        console.log(action.bookedroom)
    } catch (error) {
        
    }
}
export default function* rootSaga() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount);
    // yield takeEvery("LOGIN",Login)
     yield [
         
         takeLatest("LOAD_ROOM",Loadroom),
         takeEvery("BOOK_ROOM",Bookroom)

        ]
  }


