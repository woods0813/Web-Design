import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

<div id="banner-content" className="row clearfix">
      
<div className="col-38">

  <div className="section-heading">
    <h1>PROVIDE SUPPORT EVERYDAY</h1>
    <h2>Blank is a Round Up App that allows you to provide meals for those in need, 
    through your every day purchases.</h2>
        
    <div id="user"></div>
        <a href="index.html" className="button">CREATE ACCOUNT</a>
        <a href="index.html" className="login-button">Log in</a>

  </div>
</div>
</div>
</header>

<main id="content">

{/* <!--Introduction--> */}
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

            {/* <!--Icon Block--> */}
    <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
                {/* <!--Icon--> */}
      <div className="icon">
        <i className="fa fa-handshake-o fa-2x"></i>
      </div>
                {/* <!--Icon Block Description--> */}
      <div className="icon-block-description">
        <h4>Choose Where Your Money Goes</h4>
        <p>Make donations with every purchase, or pick and choose purchases to donate from.
        Select the amount you want to donate, either using the round up option or adding a percent to donate. Of course, who you donate to
        is in your control as well, ranging from organizations, to shelters, to specific individuals through the
        Meal Buddy feature.
        </p>
      </div>
    </div>
            {/* <!--End of Icon Block--> */}

            {/* <!--Icon Block--> */}
    <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
                {/* <!--Icon--> */}
      <div className="icon">
        <i className="fa fa-bar-chart fa-2x"></i>
      </div>
                {/* <!--Icon Block Description--> */}
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

  <div className="col-2-3">{companySection(companyURL, companyLinkText)}</div>
</div>
</section>
    {/* <!--End of Clients--> */}

{/* <!--Testimonials--> */}
<aside id="testimonials" className="scrollto text-center" data-enllax-ratio=".2">

<div className="row clearfix">

  <div className="section-heading">
      <h3>FEEDBACK</h3>
      <h2 className="section-title">What our customers are saying</h2>
  </div>

    {/* <!--User Testimonial--> */}
  <blockquote className="col-3 testimonial classic">
    <img src="images/user-images/user-1.jpg" alt="User"/>
    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore
    et dolore magna aliqua</q>
    <footer>John Doe - Happy Customer</footer>
  </blockquote>
    {/* <!-- End of Testimonial--> */}

    {/* <!--User Testimonial--> */}
  <blockquote className="col-3 testimonial classic">
    <img src="images/user-images/user-2.jpg" alt="User"/>
    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore
    et dolore magna aliqua</q>
    <footer>Roslyn Doe - Happy Customer</footer>
  </blockquote>
    {/* <!-- End of Testimonial--> */}

    {/* <!--User Testimonial--> */}
  <blockquote className="col-3 testimonial classic">
    <img src="images/user-images/user-3.jpg" alt="User"/>
    <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore
    et dolore magna aliqua</q>
    <footer>Thomas Doe - Happy Customer</footer>
  </blockquote>
    {/* <!-- End of Testimonial--> */}

</div>

</aside>
{/* <!--End of Testimonials--> */}


</main>
{/* <!--End Main Content Area--> */}


{/* <!--Footer--> */}
<footer id="landing-footer" className="clearfix">
<div className="row clearfix">

{/* <!--Social Icons in Footer--> */}
{createList(footerList)}
</div>

</footer>
{/* <!--End of Footer--> */}

</div>