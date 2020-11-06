import axios from 'axios'
import * as actionTypes from './actionTypes'

export const signIn = (data) => {
    return { 
        type : actionTypes.IS_SIGNED_IN,
        data: data
    }
}

export const logout = () => {
    localStorage.removeItem('idToken')
    localStorage.removeItem('expirationTime')
    return {
        type : actionTypes.AUTH_LOGOUT
    }
} 

export const authHandler = (token ,time ) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        } , time * 1000)
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
        axios.post(url, authData)
                .then(response => {
                    console.log(response)
                    dispatch(signIn(response.data))
                    localStorage.setItem('idToken' , response.data.idToken)
                    localStorage.setItem('expirationTime' , response.data.expiresIn)
                    dispatch(authHandler(localStorage.getItem('idToken'), localStorage.getItem('expirationTime')))
                    alert("Successful")
                })
                .catch(error => {
                    alert(error.response.data.error.message)
                })
    }
}