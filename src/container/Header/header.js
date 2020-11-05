import React,{ Component } from 'react';
import classes from './header.module.css';
import { Switch, Route , Link } from 'react-router-dom'
import App from '../HomePage/HomePage'
import Favorites from '../Favorites/favorites'
import SignIn from '../Auth/signIn/signIn'
import SignUp from '../Auth/signUp/signUp'

class Header extends Component{
  render(){
    return (
      <div>
        <div className={classes.header}>
            <p className={classes.headerTitle}>Add Movies To Your Favorites</p>
            <nav>
                <ul className={classes.navUl}>
                    <Link to="/" className={classes.navlinks}>Home</Link>
                    <Link to="/favorites" className={classes.navlinks}>Favorites</Link>
                    <Link to="/signin" className={classes.navlinks}>Authentication</Link>
                </ul>
                <Switch>
                    <Route path="/" exact component={App}/>
                    <Route exact path="/favorites"  component={Favorites} />
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                </Switch>
            </nav>
        </div>
      </div>
    );
  }
}

export default Header;
