import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import classes from './signUp.module.css'

class SignUp extends Component{

    SignIn = () => {
        this.props.history.push('/signin')
    }

    render(){
        return ( 
            <div className={classes.Container}>
                <p className={classes.title}>Sign Up</p>
                <label for="email">Email</label>
                <input type="text" name="email" placeholder="enter your email"/>
                <label for="password">Password</label>
                <input type="text" name="password" placeholder="enter your password"/>
                <button className={classes.signInBtn}>Sign Up</button>
                <p className={classes.signUpOption}>Already have an account?</p>
                <button  className={classes.signUpBtn} onClick={this.SignIn}>sign in</button>
            </div>
        )
    }
}

export default withRouter(SignUp)