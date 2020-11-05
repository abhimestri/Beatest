import React from "react";
import classes from './FavoritesCard.module.css'

const favoritesCard = props => {
    return (
        <div className={classes.container}>
            <img className={classes.img} src={`https://image.tmdb.org/t/p/w200/${props.img}`} alt="img"/>
            <p className={classes.title}>{props.title}</p>
            <button onClick={props.clicked} className={classes.removeFromFavorites}>Remove To Favorites</button>
        </div>
    )
}

export default favoritesCard