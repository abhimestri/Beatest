import React,{ Component } from 'react';
import classes from './App.module.css';
import  { connect } from 'react-redux'
import Header from './container/Header/header'

class App extends Component{
  render(){
    return (
      <div>
        <Header/>
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
