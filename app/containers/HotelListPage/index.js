/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';
import { stringify } from 'querystring';
import HotelFilter from './../HotelFilter';
import FontIcon from 'material-ui/FontIcon';
import browserHistory from 'react-router-redux';
import BackLog from '../BackLog';
import Avatar from '../../components/Avatar';
import { Icon, Rate } from 'antd';
import {callAPI} from 'utils/callAPI'
import reducer from '../../containers/App/reducer';
import saga from './saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectHotel } from '../App/selectors';

// const Hotels = [
//   { id: '0',
//     hotelname: 'New Dome',
//     hotelclass: '1-star',
//     hotellocation: 'Nha trang , 10km to Thap Tram Huong',
//     hotelrating: 7.3,
//     hotelprice: '$50',
//     linkimage: 'https://www.telegraph.co.uk/content/dam/business/2017/08/10/TELEMMGLPICT000136723018_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwYDpM1iOj7her_R_5PUySDU.jpeg?imwidth=450',
//   },
//   { id: '1',
//     hotelname: 'New Dome',
//     hotelclass: '2-star',
//     hotellocation: 'Nha trang , 10km to Thap Tram Huong',
//     hotelrating: 6.3,
//     hotelprice: '$40',
//     linkimage: 'http://www3.hilton.com/resources/media/hi/IADMRHF/en_US/img/shared/full_page_image_gallery/main/HH_hotelextdusk_2_675x359_FitToBoxSmallDimensionSmallDimension_Center.jpg',
//   },
//   { id: '2',
//     hotelname: 'New Aome',
//     hotelclass: '3-star',
//     hotellocation: 'Da Lat , 10km to Thap Tram Huong',
//     hotelrating: 8.3,
//     hotelprice: '$60',
//     linkimage: 'http://www.crystal-hotel.ch/media/titelbilder/hotel-sommer.jpg',
//   },
//   { id: '3',
//     hotelname: 'New Bome',
//     hotelclass: '4-star',
//     hotellocation: 'Phu Yen , 10km to Thap Tram Huong',
//     hotelrating: 5.3,
//     hotelprice: '$70',
//     linkimage: 'https://images.trvl-media.com/hotels/1000000/20000/19700/19665/19665_113_z.jpg',
//   },
//   { id: '4',
//     hotelname: 'New Come',
//     hotelclass: '5-star',
//     hotellocation: 'Da Nang , 10km to Thap Tram Huong',
//     hotelrating: 6.3,
//     hotelprice: '$80',
//     linkimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8o0efHQHocTtG23QmDMsXZ4RWAW4VhwOnULK9hSO6wB27iF2',
//   },
//   { id: '5',
//     hotelname: 'New Eome',
//     hotelclass: '5-star',
//     hotellocation: 'Quy Nhon , 10km to Thap Tram Huong',
//     hotelrating: 8.3,
//     hotelprice: '$90',
//     linkimage: 'https://t-ec.bstatic.com/images/hotel/max1024x768/791/79184202.jpg' },
// ];
 class HotelListPage extends React.Component {

  // Since state and props are static,
  // there's no need to re-render this component
  componentWillMount( ){
    this.props.loadhotel()
  }
  render() {
    const Hotels=this.props.listhotel
    return (
      <HotelListPageContainer>
        <HotelFilterBox>
          <HotelFilter />
        </HotelFilterBox>
        <HotelList>
          {Hotels.map((hotel) =>
            (<Hotel
              hotelname={hotel.name}
              hotelclass={hotel.introduction}
              hotellocation={hotel.address}
              hotelrating={hotel.hotelrating}
              hotelprice={hotel.avgPrice}
              linkimage={hotel.coverImage}
              hotelid={hotel._id}
              rating={hotel.ratingSum}
              key={hotel._id}
            ></Hotel>))}
        </HotelList>
      </HotelListPageContainer>
    );
  }
}

class Hotel extends React.Component {
  constructor(props) {  
    super(props);
  }
  render() {
    return (
      <HotelItemContainer>
        <Avatar
          src={this.props.linkimage}
          title={this.props.hotelname}
          subtitle={this.props.hotelclass}
          rating={this.props.rating}
          hotelid={this.props.hotelid}
        />
        <HotelDesc>
          <HotelName>{this.props.hotelname}</HotelName>
          <HotelDetail>
            <Icon style={iconstyle}type="star" />
            <div>{this.props.hotelclass}</div>
          </HotelDetail>
          <HotelDetail>
            <Icon style={iconstyle} type="environment" />
            <div>{this.props.hotellocation}</div>
          </HotelDetail>
          <HotelDetail>
            <RatingTitle>Rating:</RatingTitle>
            <RatingPoint>
              <div>{this.props.rating}/5</div>
            </RatingPoint>
          </HotelDetail>
        </HotelDesc>
        <HotelPrice>
          <HotelPriceNumber>
            {this.props.hotelprice}$ /Night
          </HotelPriceNumber>
          <BackLog
            hotelname={this.props.hotelname}
            hotelid={this.props.hotelid}
          />
        </HotelPrice>
      </HotelItemContainer>
    );
  }
}


const HotelName = styled.div`
  white-space: nowrap;
  font-size: 20px;
  color: #37454d;
  font-weight: 700;
  font-family: Arial,Helvetica,Sans,Sans-Serif,Sans Serif;
`;

const HotelPriceNumber = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  color: #F44336;
  font-weight: 800;
  padding: 10px;
  font-family: Arial,Helvetica,Sans,Sans-Serif,Sans Serif;
`;
const HotelListPageContainer = styled.div`
`;

const HotelFilterBox = styled.div`
  display: inline-block;
  width: 275px;
  vertical-align: top;
  margin-top: 15px;
  padding:5px;
  box-shadow: 0 1px 4px rgba(41,51,57,.5);
  margin-left: 2px;
  background: white;
`;


const HotelList = styled.div`
  padding-bottom: 50px;
  display: inline-block;
  width : calc(100% - 300px);
  padding-left : 15px;
`;
const HotelDetail = styled.div`
  margin:15px 0px;
`;
const HotelPrice = styled.div`
  position: absolute;
  width : 200px;
  height : fit-content;
  display : inline-block;
  margin-top: 40px;
  text-align: center;
  
`;

const HotelDesc = styled.div`
  width: calc(100% - 460px);
  height: 100%;
  display: inline-block;
  vertical-align: top;
  padding-left: 40px;
 
`;

const HotelItemContainer = styled.div`
  height: 200px;
  box-shadow: 0 1px 4px rgba(41,51,57,.5);
  margin: 15px 0px 5px 2.5px;
  width: calc(100% - 5px);
  position : relative;
  padding : 10px;
`;
const RatingPoint = styled.div`
  padding:6px;
  background-color:#1890ff;
  color:#fff;
  width: fit-content;
  font-size: 13px;
  font-weight: 800;
  border-radius: 3px;
  float :left;
`;
const RatingTitle = styled.div`
  float: left;
  margin: 5px;
  margin-left:2px;
  font-weight: 800;
`;
const HotelListTitle = styled.div`
  padding: 10px;
  background: #37454d;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align:center;
`;
const iconstyle = {
  float: 'left',
  fontSize: '20px',
  marginRight: '10px',
  color:'rgb(24, 144, 255)'
};
export function mapDispatchToProps(dispatch) { 
  return {
    loadhotel:()=> dispatch({type:"LOAD_HOTEL"})
    
  };
}

const mapStateToProps = createStructuredSelector({
  listhotel:makeSelectHotel()
});
const withConnect = connect(mapStateToProps,mapDispatchToProps);

// const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'loadhotel', saga });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(HotelListPage);

