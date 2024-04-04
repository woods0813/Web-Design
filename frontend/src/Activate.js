import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Land from './containers/Land'
import Register from './containers/Register'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import Login from './components/Login'
import Home from './components/Home'
// import Layout from './hocs/Layout'

import './static/css/style.css';
import './static/css/animate.css';
import './static/css/font-awesome.css';
import './static/css/font-awesome.min.css';
import './static/css/register.css';
import './static/css/resetPassword.css';
// import "./static/js/jquery.1.8.3.min.js";
// import "./static/js/wow.min.js";
// import "./static/js/featherlight.min.js";
// import "./static/js/featherlight.gallery.min.js";
// import "./static/js/jquery.enllax.min.js";
// import "./static/js/jquery.scrollUp.min.js";
// import "./static/js/jquery.easing.min.js";
// import "./static/js/jquery.stickyNavbar.min.js";
// import "./static/js/jquery.waypoints.min.js";
// import "./static/js/images-loaded.min.js";
// import "./static/js/lightbox.min.js";
// import "./static/js/pushy.min.js";
// import "./static/js/site.js";

function Activate() {
    
    console.log("App Run")
    const { uid, token } = useParams()
    return(<>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route exact path="/activate/:uid/:token" element={<Activate />} />
            </Routes>
        </Router>
    </Provider></>)
};

export default Activate
