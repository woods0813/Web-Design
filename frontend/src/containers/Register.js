import {useState, useContext} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { register } from '../actions/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../store';


function Register({ register, user, isAuthenticated, loginState }) {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { first_name, last_name, email, password, password2 } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        console.log('submitted')
        e.preventDefault()
        register(first_name, last_name, email, password, password2)

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
    

    return (
    <>
        {/* <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
            <div className="top-border wow fadeInDown animated"></div>
            <div className="right-border wow fadeInRight animated"></div>
            <div className="bottom-border wow fadeInUp animated"></div>
            <div className="left-border wow fadeInLeft animated"></div>
        </div>
      */}
      <div className="reg-navbar">
        <Link className="reg-back-link" to={'/'}><button className="reg-back-button"><i id="back-button-icon" className="fa fa-long-arrow-left fa-2x"></i></button></Link>
        <img src="/logo.png" className="reg-nav-logo"/>
      </div>
      <div className="reg-background-container">
        <div className="reg-container">
            <form className="reg-form" onSubmit={e => handleSubmit(e)}>
                <h1 className="reg-header">Register</h1>
                <input type="input" className="reg-input-fn" name='first_name' value={first_name} placeholder="First Name" onChange={ e => handleChange(e) }></input>
                <input type="input" className="reg-input-ln" name='last_name' value={last_name} placeholder="Last Name" onChange={ e => handleChange(e) }></input>
                <input type="input" className="reg-input-mail" name='email' value={email} placeholder="Email" onChange={ e => handleChange(e) }></input>
                <input type="password" className="reg-input-p1" name='password' value={password} placeholder="Password" onChange={ e => handleChange(e) }></input>
                <input type="password" className="reg-input-p2" name='password2' value={password2} placeholder="Confirm Password" onChange={ e => handleChange(e) }></input>
                <button className="reg-submit" type="submit">Register Account</button>
                <div className="return-link-div"><p className="return-text">Have an account?</p>
                <Link className="return-link" to={"/login"}>
                    Log in</Link></div>
                <div className="button-bridge">
                <hr className="reg-bridge-line1"></hr>
                <p className="reg-bridge-text">or continue with</p>
                <hr className="reg-bridge-line2"></hr>
                </div>
                <Link className="reg-facebook-signup-link" to="/facebook" ><button type="button" className="reg-facebook-signup-button" id="facebook-signup"><i id="facebook-signup-icon" className="fa fa-facebook"></i> </button></Link>
                <Link className="reg-google-signup-link" to="/google" ><button type="button" className="reg-google-signup-button" id="google-signup"><i id="google-signup-icon" className="fa fa-google"></i></button></Link>
            </form>
        </div>
        <div className="reg-footer">
            <Footer></Footer>
        </div>
        </div>
    </>)
}

const mapStateToProps = state => ({
    loginState: state.auth.loginState,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
  });

export default connect(mapStateToProps, { register })(Register);