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

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import RoomListPage from '../RoomListPage';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
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
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/rooms" component={RoomListPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </BodyWrapper>
      <Footer />
    </AppWrapper>
  );
}
