import React from 'react'
import { 
    Switch,
    Route
  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'; 
import Faqs from './pages/Faqs';
import Post from './pages/Post';

function Routes() {
    return (
        <>
            <Switch>
            <Route exact path="/reactjs">
                <Home />
            </Route>
            <Route exact path="/about-us">
                <About />
            </Route> 
            <Route exact path="/faqs">
                <Faqs />
            </Route> 
            <Route path="/blog/:id">
                <Post />
            </Route>
            </Switch>
        </>
    )
}

export default Routes
