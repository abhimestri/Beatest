import Axios from 'axios'
import * as actionTypes from './actionTypes'

export const signIn = (data) => {
    return { 
        type : actionTypes.IS_SIGNED_IN,
        data: data
    }
}

const authHandler = (token ,time ) => {
    setTimeout(() => {
        localStorage.removeItem('idToken')
        localStorage.removeItem('expirationTime')
    },time*1000)
}

export const signUp = (token) => {
    return { 
        type : actionTypes.IS_SIGNED_UP,
        token : token
    }
}

export const auth = (email ,password, isSignedIn) => {
    return dispatch => {
        const authData = {
            email : email,
            password : password,
            returnSecureToken : true
        }
        let url = ""
        if(!isSignedIn){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNXVWZi7uvu8J-Y34ZndPXJbMqYwXFDlc'
        }else{
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNXVWZi7uvu8J-Y34ZndPXJbMqYwXFDlc"
        }
        console.log(url)
        Axios.post(url, authData)
                .then(res => {
                    console.log(res)
                    dispatch(signIn(res.data))
                    localStorage.setItem('idToken' , res.data.idToken)
                    localStorage.setItem('expirationTime' , res.data.expiresIn)
                    dispatch(authHandler(localStorage.getItem('idToken'), localStorage.getItem('expirationTime')))
                })
                .catch(err => console.log(err))
    }
}