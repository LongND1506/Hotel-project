// import { call, put, select, takeLatest,takeEvery,cancel} from 'redux-saga/effects';
// import {callAPI,callApiRequireAuth} from 'utils/callAPI';

// // //LOGIN 
// // export function* Login(action){
// //     let account={
// //          email:action.account.userName,
// //          password:action.account.password
// //      }
// //      try {
// //         let res= yield callAPI("http://localhost:8000/api/auth/login","POST",account)
// //         if(res.token)
// //             {
// //                 localStorage.setItem('token',res.token);
// //                 yield console.log('login success')
// //                 yield put({type:"LOGIN_SUCCESS"})
// //             }
// //         else
// //           {
// //             console.log(res.message)
// //           }
        
// //      } catch (error) {
// //          alert(error) 
// //      }
    
// //  //    console.log(res)
// //  }

// //  //SIGNUP
// // export function* Signup(action){
// //     // let signupacc={
// //     //     email: action.account.email,
// //     //     password: action.account.password,
// //     //     username: action.account.nickname
// //     //   };
// //     //   try {
// //     //     let res= yield callAPI("http://localhost:8000/api/auth/signup","POST",signupacc)
// //     //     if(res.code==200)
// //     //     {
// //     //         yield alert('signup success')
// //     //       //   yield put({type:"SIGNUP_SUCCESS"})
// //     //     }
// //     //     else{
// //     //         console.log(res.message)
// //     //     }
// //     //   } catch (error) {
// //     //       alert(error)
// //     //   }
    
// //    console.log('11111')
// // }
// // //LOGOUT
// // export function* Logout(){
// //     try {
// //         let res= yield callApiRequireAuth("http://localhost:8000/api/auth/logout","GET",localStorage.getItem('token')
// //     )
// //     console.log(res)
// //     if(res.code==200)
// //         {
// //             localStorage.removeItem('token')
// //             yield alert('logout success')
// //             yield put({type:"LOGOUT_SUCCESS"})
// //         } 
// //     // console.log('123')
// //     } catch (error) {
// //         alert(error) 
// //     }
    
// // }

// //LOAD ROOM
// export function* Loadroom(action){
//     try {
//         let res= yield callAPI("http://localhost:8000/api/room/"+action.hotelid,"GET")
//         if(res.code==200)
//             {
//                 const rooms=res.room
//                 yield put({type:"LOAD_ROOM_SUCCESS",rooms})
//             }
     
//     } catch (error) {
//         alert(error)
//     }
// }
// export default function* rootSaga() {
//     // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//     // By using `takeLatest` only the result of the latest API call is applied.
//     // It returns task descriptor (just like fork) so we can continue execution
//     // It will be cancelled automatically on component unmount);
//     // yield takeEvery("LOGIN",Login)
//      yield [
         
//          takeLatest("LOAD_ROOM",Loadroom)
//         ]
//   }


