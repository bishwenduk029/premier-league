import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ThemeBar = styled.div`
  background-color: ${props => props.color};
  padding-left: 4%;
  padding-right: 4%;
`;

const Header = props => (
  <div className="navbar-fixed">
    <nav>
      <ThemeBar className="nav-wrapper" color={props.color}>
        <a href="/" className="brand-logo">{props.title}</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </ul>
      </ThemeBar>
    </nav>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Header;
