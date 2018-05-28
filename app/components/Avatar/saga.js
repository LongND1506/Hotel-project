import { call, put, select, takeLatest,takeEvery,cancel} from 'redux-saga/effects';
import {callAPI,callApiRequireAuth} from 'utils/callAPI';
// import rootSaga from '../../containers/Authentication/LoginPage/LoginForm/saga';
//RATING
 function* Rating(action){
//     try {
//             const ratingurl= action.data.hotelid+'/'+action.data.ratingpoint
//         let res= yield callApiRequireAuth("http://localhost:8000/api/rating/"+ratingurl
// ,
//         "POST",
//         localStorage.getItem('token')
//     )
//     console.log(res)
//     // if(res.code==200)
//     //     {
//     //         localStorage.removeItem('token')
//     //         yield alert('logout success')
//     //         yield put({type:"LOGOUT_SUCCESS"})
//     //     } 
//     // console.log(res)
    
//     yield put({type:"LOAD_HOTEL"})
//     } catch (error) {
//         alert(error) 
//     }
    
console.log('Rating')
}
export default function* rootSaga() {
    // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
    // By using `takeLatest` only the result of the latest API call is applied.
    // It returns task descriptor (just like fork) so we can continue execution
    // It will be cancelled automatically on component unmount);
    // yield takeEvery("LOGIN",Login)
     yield [
         takeLatest("RATING",Rating)
        ]
  }