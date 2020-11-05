import React, { Component } from "react";
import classes from './HomePage.module.css'
import { connect } from 'react-redux'
import axios from 'axios'

class HomePage extends Component{

    state = { 
        movieList : []
    }

    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/discover/movie/?api_key=9c9aa42501b71ea49028b2bcf50d05e6&language=en-US&page=1`)
            .then(res => {
                this.setState({ movieList : [...res.data.results] })
            })
            .catch(err => console.log(err))
    }
    render(){
        return(
            <div>{ 
                this.state.movieList.map(res => res.title)    
            }</div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetName : name => dispatch({ type:"ABHI",name:name })
    }
}

export default connect(null,mapDispatchToProps)(HomePage)