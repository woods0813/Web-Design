import {useState, useContext } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { verify } from '../actions/auth';
import Footer from '../components/Footer';


function Activate({ verify }) {

    // const script_list = ["../static/js/jquery.1.8.3.min.js", "../static/js/wow.min.js", "../static/js/featherlight.min.js",
    // "../static/js/featherlight.gallery.min.js", "../static/js/jquery.enllax.min.js",  "../static/js/jquery.scrollUp.min.js",
    // "../static/js/jquery.easing.min.js", "../static/js/jquery.stickyNavbar.min.js", "../static/js/jquery.waypoints.min.js",
    // "../static/js/images-loaded.min.js", "../static/js/lightbox.min.js", "../static/js/pushy.min.js", 
    // "../static/js/site.js"]

    // useScripts(script_list)

    const { uid, token } = useParams()
    console.log(uid)
    console.log(token)
    const verify_account = e => {
        verify(uid, token);
    }

    // const resend_verify = e =>{
    //     resend_verify();
    // }

    return (
    <>
        {/* <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
            <div className="top-border wow fadeInDown animated"></div>
            <div className="right-border wow fadeInRight animated"></div>
            <div className="bottom-border wow fadeInUp animated"></div>
            <div className="left-border wow fadeInLeft animated"></div>
        </div> */}
    <div className="reg-navbar">
        <Link className="reg-back-link" to={'/'}><button className="reg-back-button"><i id="back-button-icon" className="fa fa-home fa-2x"></i></button></Link>
        <img src="/logo.png" className="reg-nav-logo"/>
    </div>

    <div className="verify-background-container">
        <div className="verify-container">
            <form className="verify-form" onSubmit={e => verify_account(e)}>
                <h1 className="verify-header">Verify</h1>
                <p className="verify-text">Press the button to verify your account or 
                resend the email</p>
                <button type="submit" className="verify-submit">Verify Account</button>
                <button className="re-verify">Resend Email</button>
            </form>
            </div>
        <div className="reset-confirm-footer">
            <Footer></Footer>
        </div>
        </div>
    </>)
}

export default connect(null, { verify })(Activate);