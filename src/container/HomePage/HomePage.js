import React, { Component } from "react";
import classes from './HomePage.module.css'
import { connect } from 'react-redux'
import axios from 'axios'
import MovieTitleCard from '../../components/HomePage/MovieTitleCard'
import * as actionType from '../../store/action'

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

    storeToFavorites = (data) => {
        let datas = {
            name : data.title,
            img : data.poster_path
        }
        axios.post('https://sample-221133.firebaseio.com/fav.json',datas)
                .then(res => {
                    this.props.onGetFavorites(datas)
                    alert("successfully added to favorites")
                })
                .catch(err => console.log(err))
    }

    render(){
        let result = this.state.movieList.map(res => {
            console.log(res)
            return (
                <MovieTitleCard
                    clicked = {() => this.storeToFavorites(res)}
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
        onGetFavorites : favorites => dispatch({ type:actionType.ADD_TO_FAVORITES, favorites:favorites})
    }
}

export default connect(null,mapDispatchToProps)(HomePage)