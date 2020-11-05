import React, { Component } from 'react'
import classes from './signIn.module.css'
import { withRouter } from 'react-router-dom'

class SignIn extends Component{

    SignUp = () => {
        this.props.history.push('/signup')
    }

    render(){
        return ( 
            <div className={classes.Container}>
                <p className={classes.title}>Sign In</p>
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="enter your email"/>
                <label for="password">Password</label>
                <input type="text" name="password" placeholder="enter your password"/>
                <button className={classes.signInBtn}>Sign In</button>
                <p className={classes.signUpOption}>Don't have an account?</p>
                <button className={classes.signUpBtn} onClick={this.SignUp}>sign up</button>
            </div>
        )
    }
}

export default withRouter(SignIn)