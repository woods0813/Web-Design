import { useState, useContext, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../store';


function ResetPasswordConfirm({ reset_password_confirm, loginState }) {
    
    const navigate = useNavigate();
    const [isReset, setIsReset] = useState(false)
    const [currentLoginState, setCurrentLoginState] = useState(false)

    const [formData, setFormData] = useState({
        new_password: '',
        new_password2: ''
    });

    const { new_password, new_password2 } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const { uid, token } = useParams();

    const confirmReset = e => {
        e.preventDefault();
        reset_password_confirm(uid, token, new_password, new_password2);
        console.log(loginState);
        // console.log("ran confirm reset");
    }

    if (currentLoginState){
        return <Navigate to='/' loginState={true}></Navigate>
    }
    
    if (isReset){
        return <Navigate to='/'></Navigate>
    }

    return (
    <>
    <div className="reg-navbar">
        <Link className="reg-back-link" to={'/'}><button className="reg-back-button"><i id="back-button-icon" className="fa fa-home fa-2x"></i></button></Link>
        <img src="/logo.png" className="reg-nav-logo"/>
    </div>

    <div className="reset-confirm-background-container">
        <div className="reset-confirm-container">
            <form className="reset-confirm-form" onSubmit={e => confirmReset(e)}>
                <h1 className="reset-confirm-header">Create New Password</h1>
                <input type="password" className="reset-confirm-pw1" name='new_password' value={new_password} placeholder="New Password" onChange={ e => handleChange(e) }></input>
                <input type="password" className="reset-confirm-pw2" name='new_password2' value={new_password2} placeholder="Confirm New Password" onChange={ e => handleChange(e) }></input>
                <button type="submit" className="reset-confirm-submit">Create Password</button>
                {/* <Link to='/' className="reset-confirm-button">Back to Login</Link> */}
            </form>
            </div>
        <div className="reset-confirm-footer">
            <Footer></Footer>
        </div>
        </div>
    </>)
}

const mapStateToProps = state => ({
    loginState: state.auth.loginState,
  });


export default connect(mapStateToProps, { reset_password_confirm })(ResetPasswordConfirm);
// export default connect(mapStateToProps)(ResetPassword);