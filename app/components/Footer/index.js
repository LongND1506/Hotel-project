import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

function Footer() {
  return (
    <Wrapper>
        <BottomNavigation >
          <TabLink to="/">
            <BottomNavigationItem
              label="Recents"
              icon={recentsIcon}
            />
          </TabLink>
          <TabLink to="/rooms">
            <BottomNavigationItem
              label="Favorites"
              icon={favoritesIcon}
            />
          </TabLink>
          <TabLink to="/features">
            <BottomNavigationItem
              label="Nearby"
              icon={nearbyIcon}
            />
          </TabLink>
        </BottomNavigation>
    </Wrapper>
  );
}


const TabLink = styled(Link)`
  width: calc(100%/3);
  text-align: center;
`;


export default Footer;
