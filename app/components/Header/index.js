import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
import messages from './messages';
import LocaleToggle from 'containers/LocaleToggle';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';
import LoginPage from '../../containers/Authentication/LoginPage';
import SignupPage from '../../containers/Authentication/SignupPage';
import { Button } from 'antd';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }
  render() {
    return (
      <HeaderContainer>
        {/* <LocaleToggle /> */}
        <HeaderBox>
          <Logo src={'http://fredericgonzalo.com/wp-content/uploads/2013/06/43504-hi-home_away.jpg'} />
          {
              this.state.isLogin ? (<AuthWrapper><Button type="primary">LOGOUT</Button></AuthWrapper>)
              :(<AuthWrapper><LoginButton /><SignupButton /></AuthWrapper>)
            }
        </HeaderBox>
      </HeaderContainer>
    );
  }
}

const HeaderBox = styled.div`
  max-width: 1185px;
  height : 100%;
  margin: auto;
`;
const HeaderContainer = styled.div`
  width: 100vw;
  height: 80px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  position: fixed;
  left: 0px;
  z-index : 1000;
  background : white;
`;

const Logo = styled.img`
height: 48px;
border-style: none;
margin-top: 16px;
cursor: pointer;
`;


const LoginButton = () => (

  // <RaisedButton
  //   onClick={function () {
  //     window.location.replace('http://localhost:5000/auth/facebook');
  //   }}
  //   backgroundColor="#4267b2"
  //   labelColor="white"
  //   style={
  //   {
  //     marginRight: '16px',
  //     marginTop: '22px',
  //     float: 'right',

  //   }
  //   }
  //   icon={<FontIcon className="muidocs-icon-custom-github" />}
  //   target="_blank"
  //   label="Login with Facebook"
  //   // secondary
  // />
  <LoginPage />
);
const SignupButton = () => (
  <SignupPage />
);
const AuthWrapper = styled.div`
  width: fit-content;
  float: right;
  margin-right: 2px;
`;
export default Header;
