import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">{props.title}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
