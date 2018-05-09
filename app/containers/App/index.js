/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import HomePage from 'containers/HomePage/Loadable';
import FacebookAuth from 'containers/FacebookAuth/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HotelListPage from '../HotelListPage';
const AppWrapper = styled.div`
  max-width: 1218px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;
const BodyWrapper = styled.div`
  margin-top: 80px;
  height: calc(100% - 130px);
  overflow: hidden;
  padding-bottom : 20px;
`;


export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <BodyWrapper>
        <Switch>
          <Route exact path="/execute_facebook_auth" component={FacebookAuth} />
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/rooms" component={HotelListPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BodyWrapper>
      {/* <Footer /> */}
    </AppWrapper>
  );
}
