import React from "react";
import classes from './MovieTitleCard.module.css'

const movieCard = props => {
    return (
        <div className={classes.container}>
            <img className={classes.img} src={`https://image.tmdb.org/t/p/w200/${props.img}`} alt="img"/>
            <p className={classes.title}>{props.title}</p>
            <button className={classes.addToFavorites}>Add To Favorites</button>
        </div>
    )
}

export default movieCard