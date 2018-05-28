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
import {DAEMON} from 'utils/constants'
import { Button } from 'antd';
// import reducer from './reducer';
import saga from './saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLogin } from '../../containers/App/selectors';
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderContainer>
        {/* <LocaleToggle /> */}
        <HeaderBox>
          <Logo src={'http://fredericgonzalo.com/wp-content/uploads/2013/06/43504-hi-home_away.jpg'} />
          {
              this.props.isLogin ? (<AuthWrapper><Button
                  style={{'marginTop': '20px'}}
                  icon='logout'
                  size='large'
                 onClick={()=>{this.props.logout()}}
                 type="primary">LOGOUT</Button></AuthWrapper>)
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
const mapStateToProps = createStructuredSelector({
  isLogin: makeSelectLogin()
});
export function mapDispatchToProps(dispatch) {
  return {
    logout:()=> dispatch({type:"LOGOUT"})
  };
}
const withConnect = connect(mapStateToProps,mapDispatchToProps);

// const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'logout', saga});

export default compose(
  withSaga,
  withConnect,
)(Header);
