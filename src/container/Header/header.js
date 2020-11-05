import React,{ Component } from 'react';
import classes from './header.module.css';

class App extends Component{
  render(){
    return (
      <div>
        <div className={classes.header}>
            <p className={classes.headerTitle}>Add Movies To Your Favorites</p>
            <nav>
                <ul className={classes.navUl}>
                    <li className={classes.navlinks}>Home</li>
                    <li className={classes.navlinks}>Favorites</li>
                    <li className={classes.navlinks}>Authentication</li>
                </ul>
            </nav>
        </div>
      </div>
    );
  }
}

export default App;
