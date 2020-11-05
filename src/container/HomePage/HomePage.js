import React, { Component } from "react";
import classes from './HomePage.module.css'
import { connect } from 'react-redux'
import axios from 'axios'
import MovieTitleCard from '../../components/HomePage/MovieTitleCard'

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
        let result = this.state.movieList.map(res => {
            console.log(res)
            return (
                <MovieTitleCard
                    title = {res.title}
                    img = {res.poster_path}
            />
            )
        })
        return(
            <div>
                <div className={classes.gridContainer}>{result}</div>
            </div>  
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetName : name => dispatch({ type:"ABHI",name:name })
    }
}

export default connect(null,mapDispatchToProps)(HomePage)