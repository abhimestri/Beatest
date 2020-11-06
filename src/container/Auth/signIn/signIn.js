import React, { Component } from 'react'
import classes from './signIn.module.css'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/auth'

class SignIn extends Component{

    state = {
        email : "",
        password : "",
        isSignedIn : true,
        signedInStats : false
    }

    signOut = () => {
        localStorage.removeItem('idToken')
        localStorage.removeItem('expirationTime')
        window.location.reload(false)
    }

    SignUp = () => {
        this.props.history.push('/signup')
    }

    SignIn = () => {
        this.props.onSignIn(this.state.email , this.state.password, this.state.isSignedIn)
    }

    componentDidMount(){
        if(localStorage.getItem('idToken')){
            this.setState({signedInStats : true})
        }else{
            this.setState({signedInStats : false})
        }
    }

    render(){
        return ( 
            <div className={classes.Container}>
                {
                    this.state.signedInStats ? 
                    <div>
                        <p className={classes.signOut}>signed In</p>
                        <button className={classes.SignOutBtn} onClick={this.signOut}>Sign Out</button>
                    </div> :
                    <div>
                        <p className={classes.title}>Sign In</p>
                        <label for="email">Email</label>
                        <input type="text" onChange={(e) => this.setState({ email : e.target.value })} name="email" placeholder="enter your email"/>
                        <label for="password">Password</label>
                        <input type="text" onChange={(e) => this.setState({ password: e.target.value })} name="password" placeholder="enter your password"/>
                        <button className={classes.signInBtn} onClick={this.SignIn}>Sign In</button>
                        <p className={classes.signUpOption}>Don't have an account?</p>
                        <button className={classes.signUpBtn} onClick={this.SignUp}>sign up</button>
                    </div>
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        onSignIn : (email, password, signedIn) => dispatch(actionCreators.auth(email, password, signedIn))
    }
}

export default connect(null , mapDispatchToProps)(withRouter(SignIn))