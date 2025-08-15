import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="uk-navbar-container uk-margin-small-left uk-margin-small-right uk-visible@m uk-margin-xlarge-left uk-margin-xlarge-right" style={{backgroundColor: 'black'}} uk-navbar uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <div className="uk-navbar-left">
          <a href="" className="uk-navbar-item uk-logo uk-light">Blake_Stewart</a>
          <img className="aco_logo uk-navbar-item uk-logo uk-light" src="/assets/images/Concept1.png" alt="Logo" />
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-light">
            <li><a className="uk-button-text uk-text-capitalize" href="#about" uk-scroll>About</a></li>
            <li><a className="uk-button-text uk-text-capitalize" href="#projects" uk-scroll>Projects</a></li>
            <li><a className="uk-button-text uk-text-capitalize" href="mailto:">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="uk-navbar-container uk-margin-small-left uk-margin-small-right uk-hidden@m uk-margin-xlarge-left uk-margin-xlarge-right" style={{backgroundColor: 'black'}} uk-navbar uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
        <div className="uk-navbar-left">
          <a href="" className="uk-navbar-item uk-logo uk-light">Blake_Stewart</a>
          <img className="aco_logo uk-navbar-item uk-logo uk-light" src="/assets/images/Concept1.png" alt="Logo" />
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav uk-light">
            <li><button uk-toggle="target: #offcanvas-nav" type="button" uk-navbar-toggle-icon></button></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation Offcanvas */}
      <div id="offcanvas-nav" uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li className="uk-active"><a href="#" uk-scroll>Home</a></li>
            <li className="uk-active"><a href="#about" uk-scroll>About</a></li>
            <li className="uk-active"><a href="#projects" uk-scroll>Projects</a></li>
            <li className="uk-active"><a href="mailto:lee.stewart909@gmail.com">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
