import React from 'react';
import { createList } from './Navbar';
import { createLinkWithIcon } from './Navbar';

// import '../static/css/animate.css';
// import '../static/css/font-awesome.css';
// import '../static/css/font-awesome.min.css';
// import '../static/css/namari-color.css';


function Footer() {

    let footerList = [createLinkWithIcon("_blank", "Facebook", "https://www.facebook.com/username", "fa fa-facebook fa-1x"), createLinkWithIcon("_blank", "Twitter", "https://www.twitter.com/username", "fa fa-twitter fa-1x"), createLinkWithIcon("_blank", "Instagram", "https://www.instagram.com/username", "fa fa-instagram fa-1x")];

    return(
    <>
    <footer id="landing-footer" className="clearfix">
        <div className="row clearfix">
        
        <p id="copyright" className="col-2"><a href="https://www.shapingrain.com"></a></p>

        {createList(footerList, "col-2 social-icons")}
        </div>
      
    </footer>
    </>
    )
}

export default Footer;