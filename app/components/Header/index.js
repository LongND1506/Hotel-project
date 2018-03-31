import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.js';
import NavBar from './NavBar.js'
import './Css/Nav.css';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderContainer>
          <NavBar/>
      </HeaderContainer>
    );
  }
}
//component

//style

const HeaderContainer = styled.div`
  width: 100vw;
  height: 90px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  position: fixed;
  left: 0px;
  z-index : 1000;
  background : white;
`;

export default Header;
