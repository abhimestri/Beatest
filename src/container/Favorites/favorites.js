import React, { Component } from 'react'
import classes from './favorites.module.css'
import FavoritesCard from '../../components/Favorites/FavoritesCard'
import Axios from 'axios'

class Favorites extends Component{
    state = {
        listOfFavoriteMovies : []
    }
    componentDidMount(){
        Axios.get('https://sample-221133.firebaseio.com/fav.json')
            .then(res => Object.entries(res.data).map(el => {
                this.setState({listOfFavoriteMovies : this.state.listOfFavoriteMovies.concat(el[1])})
            }))
            .catch(err => console.log(err))
    }
    render(){
        let res = this.state.listOfFavoriteMovies.map(el =>  {
            return (<FavoritesCard
                img = {el.img}
                title = {el.name}
            />)
        })
        return ( 
            <div className={classes.Container}>{res}</div>
        )
    }
}

export default Favorites