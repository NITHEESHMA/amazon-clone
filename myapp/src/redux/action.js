import * as actionTypes from './actionType'
import { auth } from '../utils/firebase'
//---------------------------------
 const registerstart=()=>
 ({

    type:actionTypes.REGISTER_START,
 })


 const registersuccess=(user)=>
 ({

type:actionTypes.REGISTER_SUCCESS,
payload:user,

 })

 const registerfail=(error)=>({

    type:actionTypes.REGISTER_FAIL,
    payload:error,
 })
 


//------------------------------------------

 const loginstart=()=>
 ({

    type:actionTypes.LOGIN_START,
 })


 const loginsuccess=(user)=>
 ({

type:actionTypes.LOGIN_SUCCESS,
payload:user,

 })

 const loginfail=(error)=>({

    type:actionTypes.LOGIN_FAIL,
    payload:error,
 })

//============================================

 const logoutstart=()=>
 ({

    type:actionTypes.LOGOUT_START,
 })


 const logoutsuccess=()=>
 ({

type:actionTypes.LOGOUT_SUCCESS,


 })

 const logoutfail=(error)=>({

    type:actionTypes.LOGOUT_FAIL,
    payload:error,
 })


//=============================================




export const addtobasket=(item)=>({
type:actionTypes.ADD_TO_BASKET,
payload:item,
})




//================================


export const removefrombasket=(id)=>({
    type:actionTypes.REMOVE_FROM_BASKET,
    payload:id,
    })




 export const registerinitiate=(email,password)=>{
     return function(dispatch){
         dispatch(registerstart());
         auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
             dispatch(registersuccess(user));
         }).catch(error=>dispatch(registerfail(error.message)))
     }
 }


//=======================================================



 export const logininitiate=(email,password)=>{
    return function(dispatch){
        dispatch(loginstart());
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            dispatch(loginsuccess(user));
        }).catch(error=>dispatch(loginfail(error.message)))
    }
}

//=================================================


export const logoutinitiate=()=>{
    return function(dispatch){
        dispatch(logoutstart());
        auth.signOut().then((resp)=> dispatch(logoutsuccess()))
        .catch((error)=>dispatch(logoutfail(error.message)));
    }
}

//===========================================

export const setuser=(user)=>({
    type:actionTypes.SET_USER,
    payload:user,
})

//=============================================

