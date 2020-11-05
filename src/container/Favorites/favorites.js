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
                let data = {
                    id : el[0],
                    name : el[1].name,
                    img : el[1].img
                }
                this.setState({listOfFavoriteMovies : this.state.listOfFavoriteMovies.concat(data)})
            }))
            .catch(err => console.log(err))
    }
    deleteFavorite = (id) => {
        Axios.delete(`https://sample-221133.firebaseio.com/fav/${id}.json`)
                .then(res => {
                    window.location.reload(false)
                })
                .catch(err => console.log(err))
    }
    render(){
        let res = this.state.listOfFavoriteMovies.map(el =>  {
            return (<FavoritesCard
                img = {el.img}
                title = {el.name}
                clicked = {() => this.deleteFavorite(el.id) }
            />)
        })
        return ( 
            <div className={classes.Container}>{res}</div>
        )
    }
}

export default Favorites