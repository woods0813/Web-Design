import React, { useState } from 'react';
import {  useEffect } from 'react';
import Navbar, { createLinkWithIcon } from '../components/Navbar';
import { login } from '../actions/auth';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Login from './Login';
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import store from '../store';


function Land({ isAuthenticated, user, atHome, loginState}) {
  
  
  //   return (<> <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //             <script src= type="text/javascript"></script>
  //   </>)
  // }

  const script_list = ["./static/js/jquery.1.8.3.min.js", "./static/js/wow.min.js", "./static/js/featherlight.min.js",
                       "./static/js/featherlight.gallery.min.js", "./static/js/jquery.enllax.min.js",  "./static/js/jquery.scrollUp.min.js",
                       "./static/js/jquery.easing.min.js", "./static/js/jquery.stickyNavbar.min.js", "./static/js/jquery.waypoints.min.js",
                       "./static/js/images-loaded.min.js", "./static/js/lightbox.min.js", "./static/js/pushy.min.js", 
                       "./static/js/site.js"]

  //create account onclick function
  const regClick = () =>
    window.location.href='/register';

  // let [currentUser, setCurrentUser] = useState(user);
  let [currentLoginState, setCurrentLoginState] = useState(loginState);
  console.log(loginState)
  // onClick={() => setCurrentLoginState(true)}
  const initialButtons = () => {    
    return(<>
        <div>
        {/* <button className="reg-button" onClick={() => regClick()}>CREATE ACCOUNT</button> */}
        <Link to='/register' className='reg-button'>CREATE ACCOUNT</Link>
        </div>
        <div>
        <Link to='/login' className='login-button'>LOG IN</Link>               
        </div>
      </>)
  }
  //functions for creating company portion
  const companyElement = (image_url, link_text, index) => {
    let alt_index = index + 1;
    let img_string = image_url+alt_index+".png";
    return(<><a href="index.html" key={index} className="col-3"><img src={img_string} alt="Company"/><div className="client-overlay"><span></span>{link_text}</div></a></>)
  }

  const companySection = (image_url, link_test_list) => {
    return(link_test_list.map((link_test, index) => companyElement(image_url, link_test, index)))
  }

  let companyLinkText = ["Tree", "Fingerprint", "The Man", "Mustache", "Goat", "Justice", "Ball", "cold", "Cold"];
  let companyURL = "./static/images/company-images/company-logo";
  // console.log(navList)

  // useScripts(script_list)

  if (user != null){
    if (isAuthenticated) {
        return(<Navigate to='/' atHome={true}></Navigate>)
        // console.log('home')
    }
    else {
        return(<Navigate to='/activate/:uid/:token'></Navigate>)
        // console.log('verify')
    }
}

console.log(currentLoginState)
  return (
    <>
      <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
        <div className="top-border wow fadeInDown animated"></div>
        <div className="right-border wow fadeInRight animated"></div>
        <div className="bottom-border wow fadeInUp animated"></div>
        <div className="left-border wow fadeInLeft animated"></div>
      </div>
    
      <div id="wrapper">      
          
        <header id="banner" className="scrollto clearfix" data-enllax-ratio=".5">

          <Navbar></Navbar>
          
          <div id="banner-content" className="row clearfix">
          
            <div className="col-38">
            
              <div className="section-heading">
                <h1>PROVIDE SUPPORT EVERYDAY</h1>
                <h2>Blank is a Round Up App that allows you to provide meals for those in need, 
                through your every day purchases.</h2>
                    
                <div id="user">
                  {/* <a href="/index.html" className="button">CREATE ACCOUNT</a>
                  <a href="/index.html" className="login-button">Log in</a> */}
                  {atHome ? <Home></Home>: initialButtons()}
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="content">
        

        <section id="about" className="introduction scrollto">
        
        <div className="row clearfix">
        
          <div className="col-3">
            <div className="section-heading">
              <h3>SEE WHERE YOUR AID GOES</h3>
              <h2 className="section-title">Special Features of the App</h2>
              <p className="section-subtitle">The App includes features that allow the user to choose both when and where their 
              donations go, as well as to see detailed results of their donations and how they are supporting those in need
              </p>
            </div>
        
          </div>
        
          <div className="col-2-3">
        
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
              <div className="icon">
                <i className="fa fa-handshake-o fa-2x"></i>
              </div>
              <div className="icon-block-description">
                <h4>Choose Where Your Money Goes</h4>
                <p>Make donations with every purchase, or pick and choose purchases to donate from.
                Select the amount you want to donate, either using the round up option or adding a percent to donate. Of course, who you donate to
                is in your control as well, ranging from organizations, to shelters, to specific individuals through the
                Meal Buddy feature.
                </p>
              </div>
            </div>

            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
              <div className="icon">
                <i className="fa fa-bar-chart fa-2x"></i>
              </div>
              <div className="icon-block-description">
                <h4>Donation Results</h4>
                <p>See specific data involving the results of your donations. View the organization you've donated to and how much they've received from donors as well
                as yourself. See how these donation amounts translate to meals, or food production, and who are the recipients of these meals.
                </p>
              </div>
            </div>
          </div>
        
        </div>
        
        
        </section>
        <section id="clients" className="scrollto clearfix">
        <div className="row clearfix">
        
          <div className="col-3">
        
            <div className="section-heading">
              <h3>MAKING AN IMPACT</h3>
              <h2 className="section-title">Organizations who use our services</h2>
              <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
            </div>

          </div>

          <div className="col-2-3">

           {companySection(companyURL, companyLinkText)}
          </div>
          
          <div className="col-2-3"></div>
        </div>
        </section>

        <aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">
        
          <div className="row clearfix">
          
            <div className="section-heading">
                <h3>FEEDBACK</h3>
                <h2 className="section-title">What our customers are saying</h2>
            </div>

            <blockquote className="col-3 testimonial classic">
              <img src={"/static/images/user-images/user-1.jpg"} alt="User"/>
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
              et dolore magna aliqua</q>
              <footer>John Doe - Happy Customer</footer>
            </blockquote>

            <blockquote className="col-3 testimonial classic">
              <img src={"/static/images/user-images/user-2.jpg"} alt="User"/>
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
              et dolore magna aliqua</q>
              <footer>Roslyn Doe - Happy Customer</footer>
            </blockquote>

            <blockquote className="col-3 testimonial classic">
              <img src={"/static/images/user-images/user-3.jpg"} alt="User"/>
              <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore
              et dolore magna aliqua</q>
              <footer>Thomas Doe - Happy Customer</footer>
            </blockquote>
          
          </div>
        
        </aside>      
      </main>
      <Footer></Footer>
    </div>           
    </>)
}


const mapStateToProps = state => ({
  loginState: state.auth.loginState,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps)(Land);
