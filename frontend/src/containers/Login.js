import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { login } from '../actions/auth';




function Login({ login, isAuthenticated, user }) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
   
    const { email, password } = formData;
   
    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const checkAuthenticated = () => {
        console.log(user)
        if (user != null){
            if (isAuthenticated) {
                <Navigate to='/' atHome={true}></Navigate>
                console.log('home')
            }
            else {
                // <Navigate to='/verify/'></Navigate>
                <Navigate to='/' atHome={false}></Navigate>
                console.log('verify')
            }
        }
    }

    const handleSubmit = e => {
        console.log('logged in');
        e.preventDefault();
        login(email, password);
    }

   
    return(
        <>
        {/* <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
            <div className="top-border wow fadeInDown animated"></div>
            <div className="right-border wow fadeInRight animated"></div>
            <div className="bottom-border wow fadeInUp animated"></div>
            <div className="left-border wow fadeInLeft animated"></div>
        </div> */}

        <div className="login-main-container"></div>
        <div className="login-inner-container">
        <div className="login-background-container">
        <div className="login-background-image-container">
        </div>
        </div>
        <div className="login-form-container"></div>
        <Link to='/'><img src="/logo.png" className="login-logo"></img></Link>
            <form className="login-form" onSubmit={e => handleSubmit(e)}>
                <div><h1 className="login-header">Log In</h1></div>
                    <input className="login-input-mail" type="input" name='email' value={email} placeholder="Email" onChange={ e => handleChange(e) }></input>
                    <input className="login-input-pw" type="password" name='password' value={password} placeholder="Password" onChange={ e => handleChange(e) }></input>
                    <button className="login-submit" type="submit">Log In</button>
                    <Link className="login-reset" to="/reset_password">Forgot Password?</Link>
                    <hr className="login-bridge-line"></hr>
                    <p className="login-signup-text"> Don't have an account?</p>
                    <Link to="/register" className="login-signup-button" >Sign Up</Link>
                    
                    <p className="login-bridge-text">or sign up with</p>

                    <Link to="/facebook" className="login-facebook-signup-link"  ><button type="button" className="login-facebook-signup-button" id="facebook-signup"><i id="facebook-signup-icon" className="fa fa-facebook"></i></button></Link>
                    <Link to="/google" className="login-google-signup-link" ><button type="button" className="login-google-signup-button" id="google-signup"><i id="google-signup-icon" className="fa fa-google"></i></button></Link>
        
            </form>
        </div>
        
        
        </>
    )

}

const mapStateToProps = state => ({
    // loginState: state.auth.loginState,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });

export default connect(mapStateToProps, { login })(Login);