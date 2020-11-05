import React,{ Component } from 'react';
import classes from './App.module.css';
import  { connect } from 'react-redux'
import HomePage from './container/HomePage/HomePage'
import Header from './container/Header/header'

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <HomePage/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    name : state.name
  }
}

export default connect(mapStateToProps)(App);
