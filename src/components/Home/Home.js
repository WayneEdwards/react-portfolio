import React from 'react';
import classes from './Home.module.css';
import starTree from '../../assets/images/startree.jpg';

const Home = () => {
    return(
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello</h1>
                <h1>Welcome To My Portfolio</h1>
                </div>
                <img className={classes.StarTree} src={starTree} alt="tree"></img> 
        </div>
    )
}

export default Home;