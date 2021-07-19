import React from 'react';
import classes from './Home.module.css';
import startree from './img/startree.jpg'

const Home = () => {
    return(
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, world.</h1>
                <h1>Welcome To My Portfolio</h1>
                </div>
                <img className={classes.StarTree} src={startree} alt="tree"></img> 
        </div>
    )
}

export default Home;