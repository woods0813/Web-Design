import {useState, useContext, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../store';


function ResetPassword({ reset_password, loginState }) {

    const [currentLoginState, setCurrentLoginState] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
    });

    const { email } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault()
        reset_password(email)
    }

    if (currentLoginState){
        loginState = true;
        return <Navigate to='/'></Navigate>
    }

    return (
    <>
    <div className="reg-navbar">
        <Link className="reg-back-link" to={'/'}><button className="reg-back-button"><i id="back-button-icon" className="fa fa-long-arrow-left fa-2x"></i></button></Link>
        <img src="/logo.png" className="reg-nav-logo"/>
    </div>

    <div className="reset-background-container">
        <div className="reset-container">
        <form className="reset-form" onSubmit={e => handleSubmit(e)}>
            <div className="container">
                <h1 className="reset-header">Reset Password</h1>
                <p className="reset-text">Enter your email below to be sent a new password link</p>
                <input type="input" className="reset-input" name='email' value={email} placeholder="Email" onChange={ e => handleChange(e) }></input>
                <button type="submit" className="reset-submit">Send Link</button>
                <Link to={'/login'}><button className="reset-return">Back to Login</button></Link>
            </div>
        </form>
        </div>
        <div className="reset-footer">
            <Footer></Footer>
        </div>
    </div>
    </>)
}

const mapStateToProps = state => ({
    loginState: state.auth.loginState,
  });


export default connect(mapStateToProps, { reset_password })(ResetPassword);
// export default connect(mapStateToProps)(ResetPassword);