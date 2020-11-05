import React,{ Component } from 'react';
// import classes from './App.module.css';
import  { connect } from 'react-redux'
import HomePage from './container/HomePage/HomePage'

class App extends Component{
  render(){
    return (
      <HomePage/>
    );
  }
}

const mapStateToProps = state => {
  return { 
    name : state.name
  }
}

export default connect(mapStateToProps)(App);
