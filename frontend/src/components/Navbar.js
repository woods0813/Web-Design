import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// import '../static/css/style.css';
// import '../static/css/animate.css';
// import '../static/css/font-awesome.css';
// import '../static/css/font-awesome.min.css';
// import '../static/css/namari-color.css';
// import '../static/js/jquery.stickyNavbar.min.js';

export const createList = (list, name) => {
    
    const items = list.map((elem, idx) => {
      return <li key={idx}>{elem}</li>;
      });
    
    return(<><ul className={name}>
      {items}
    </ul></>)
  }

export const createLinkWithIcon = (Target, Title, Href, Icon) => {
    return(
    <><a target={Target} title={Title} href={Href}>
      <i className={Icon}></i><span>{Title}</span>
    </a></>
    )
  }

  //creating other links
export const createLink = (Href, Title, Class) => {
    if (Class)
      return(
      <a href={Href} className={Class}>{Title}</a>
      )
    else
      return(
      <a href={Href}>{Title}</a>
      )
  }


function Navbar() {

  // Sticky Navbar on scroll //
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
};


  useEffect(() => {
  
    window.addEventListener('scroll', handleScroll, { passive: true });
    let banner = document.getElementById("banner");
    let header = document.getElementById("header");

    if (scrollPosition >= header.scrollHeight && scrollPosition <= banner.scrollHeight){
      header.className = "nav-hide fadeIn animated";
    }
    if (scrollPosition >= banner.scrollHeight) {
      header.className = "nav-solid fadeIn animated"      
      
    }
    else{
      header.className = "nav-collapse fadeIn animated"
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition])
  //------------------------------//

  let socialList = ["Download the App", createLinkWithIcon("_blank", "App Store", "http://www.behance.net", "fa fa-apple fa-1x"), createLinkWithIcon("_blank", "Google Play Store", "http://www.behance.net", "fa fa-android fa-1x")];
  let navList = [createLink("#banner", "Home", ""), createLink("#about", "About", ""), createLink("#clients", "Organizations", ""), createLink("#testimonials", "Testimonials", "")];

  return(
  <>
    <div id="header" className="nav-solid">
        <div className="row clearfix">
            <div className="col-1">

            <div id="logo">

                <img src="/logo.png" id="banner-logo" alt="Landing Page"/>
                <img src="/logo-2.png" id="navigation-logo" alt="Landing Page"/>

            </div>

            <aside> {createList(socialList, "social-icons")}
            </aside>
            <nav id="nav-main">{createList(navList, "nav-main")}</nav>

            {/* <div id="nav-trigger"><span></span></div>
            <nav id="nav-mobile"></nav> */}

            </div>
        </div>
    </div>
  </>)
}

export default Navbar;