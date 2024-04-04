import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Land from './containers/Land'
import Register from './containers/Register'
import Activate from './containers/Activate'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordConfirm from './containers/ResetPasswordConfirm'
import Login from './containers/Login'
import Home from './components/Home'
import Facebook from './containers/Facebook';
import Google from './containers/Google';

import './static/css/style.css';
import './static/css/animate.css';
import './static/css/font-awesome.css';
import './static/css/font-awesome.min.css';
import './static/css/activate.css';
import './static/css/register.css';
import './static/css/login.css';
import './static/css/resetPassword.css';
import './static/css/resetPasswordConfirm.css';

function App() {
    
    console.log("App Run")
    
    return(<>
    <Provider store={store}>
        <Router>
            <Routes>
                <Route exact path='/' element={<Land/>} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/register' element={<Register />} />
                <Route exact path='/reset_password' element={<ResetPassword />} />
                <Route exact path='/reset_password_confirm/:uid/:token' element={<ResetPasswordConfirm />} />
                <Route exact path='/activate/:uid/:token' element={<Activate />} />
                <Route exact path='/facebook' element={<Facebook />} />
                <Route exact path='/google' element={<Google />} />
            </Routes>
        </Router>
    </Provider></>)
};

export default App
