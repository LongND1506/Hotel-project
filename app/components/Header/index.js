import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import LocaleToggle from 'containers/LocaleToggle';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderContainer>
        <LocaleToggle />
      </HeaderContainer>


      // <div>
      //   <A href="https://twitter.com/mxstbr">
      //     <Img src={Banner} alt="react-boilerplate - Logo" />
      //   </A>
      //   <NavBar>
      //     <HeaderLink to="/">
      //       <FormattedMessage {...messages.home} />
      //     </HeaderLink>
      //     <HeaderLink to="/features">
      //       <FormattedMessage {...messages.features} />
      //     </HeaderLink>
      //   </NavBar>
      // </div>
    );
  }
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 80px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  position: fixed;
  left: 0px;
  z-index : 1000;
  background : white;
`;


export default Header;
