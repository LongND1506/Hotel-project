/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';
import { stringify } from 'querystring';
import RoomFilter from './../RoomFilter'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FontIcon from 'material-ui/FontIcon';
const Rooms=[
{id:'0',hotelname:'New Dome',hotelclass:'1 sao'
,hotellocation:'Nha trang , 10km to Thap Tram Huong'
,hotelrating:'7.3',hotelprice:'$50'
,linkimage:'https://www.telegraph.co.uk/content/dam/business/2017/08/10/TELEMMGLPICT000136723018_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwYDpM1iOj7her_R_5PUySDU.jpeg?imwidth=450'
},
{id:'1',hotelname:'New Dome',hotelclass:'1 sao'
,hotellocation:'Nha trang , 10km to Thap Tram Huong'
,hotelrating:'7.3',hotelprice:'$40'
,linkimage:'http://www3.hilton.com/resources/media/hi/IADMRHF/en_US/img/shared/full_page_image_gallery/main/HH_hotelextdusk_2_675x359_FitToBoxSmallDimensionSmallDimension_Center.jpg'
},
{id:'2',hotelname:'New Aome',hotelclass:'2 sao'
,hotellocation:'Da Lat , 10km to Thap Tram Huong'
,hotelrating:'7.3',hotelprice:'$60'
,linkimage:'http://www.crystal-hotel.ch/media/titelbilder/hotel-sommer.jpg'
},
{id:'3',hotelname:'New Bome',hotelclass:'3 sao'
,hotellocation:'Phu Yen , 10km to Thap Tram Huong'
,hotelrating:'7.3',hotelprice:'$70'
,linkimage:'https://images.trvl-media.com/hotels/1000000/20000/19700/19665/19665_113_z.jpg'
},
{id:'4',hotelname:'New Come',hotelclass:'4 sao'
,hotellocation:'Da Nang , 10km to Thap Tram Huong'
,hotelrating:'7.3',hotelprice:'$80'
,linkimage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8o0efHQHocTtG23QmDMsXZ4RWAW4VhwOnULK9hSO6wB27iF2'
},
{id:'5',hotelname:'New Eome',hotelclass:'5 sao'
,hotellocation:'Quy Nhon , 10km to Thap Tram Huong'
,hotelrating:'7.3',hotelprice:'$90'
,linkimage:'https://t-ec.bstatic.com/images/hotel/max1024x768/791/79184202.jpg'}
]
export default class RoomListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <RoomListPageContainer>
        <RoomFilterBox>
          <RoomFilter/>
        </RoomFilterBox>
        <RoomList>
          {Rooms.map((room)=>
            { return(<Room 
              hotelname={room.hotelname}
              hotelclass={room.hotelclass}
              hotellocation={room.hotellocation}
              hotelrating={room.hotelrating}
              hotelprice={room.hotelprice}
              linkimage={room.linkimage}
              key={room.id}
              ></Room>)
              
            })}
        </RoomList>
      </RoomListPageContainer>
    );
  }
}

class Room extends React.Component {
  constructor(props){
    super(props)
    
  }
  render() {
    return (
      <RoomItemContainer>
        <RoomAvatar src={this.props.linkimage} hotelname={this.props.hotelname} hotelclass={this.props.hotelclass}/>
        <RoomDesc>
          <HotelName>{this.props.hotelname}</HotelName>
          <HotelDetail><FontIcon style={iconstyle}className="material-icons">grade</FontIcon><div>{this.props.hotelclass}</div></HotelDetail>
          <HotelDetail><FontIcon style={iconstyle} className="material-icons">room</FontIcon><div>{this.props.hotellocation}</div></HotelDetail>
          <HotelDetail><RatingTitle>Rating:</RatingTitle><RatingPoint><div>{this.props.hotelrating}</div></RatingPoint></HotelDetail>
        </RoomDesc>
        <RoomPrice>
          <RoomPriceNumber>{this.props.hotelprice} Per night</RoomPriceNumber>
          <BookButton type='submit'>Book Now</BookButton>
        </RoomPrice>
      </RoomItemContainer>
    );
  }
}


const HotelName = styled.div`
  white-space: nowrap;
  font-size: 20px;
  color: #37454d;
  font-weight: 700;
`;

const RoomName = styled.div`
    text-align: center;
    font-weight: 600;
    color: #403636;
    font-size: 20px;
    height: 20px;
    line-height: 20px;
    margin-top: 20px;
`;

const RoomPriceNumber = styled.div`
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    color: #F44336;
    font-weight: 800;
    padding: 10px;
    margin-bottom:40px;
`;

const BookButton = styled.button`
    text-align: center;
    font-weight: 600;
    color: #fff;
    font-size: 24px;
    line-height: 30px;
    padding: 10px 30px;
    background: #4267b2de;
    border-radius:5px;
    box-shadow: 4px 4px 15px #9E9E9E;
    transition-duration:0.5s;
    &:hover ${BookButton} {
      background-color:#325fb9;
      transform:scale(1.1,1.1);
  }
`;

const RoomListPageContainer = styled.div`
`;

const RoomFilterBox = styled.div`
  display: inline-block;
  width: 250px;
  vertical-align: top;
  margin-top: 15px;
  padding:5px;
  box-shadow: 0 1px 4px rgba(41,51,57,.5);
  margin-left: 2px;
`;


const RoomList = styled.div`
    padding-bottom: 50px;
    display: inline-block;
    width : calc(100% - 254px);
    padding-left : 15px;
    padding-right: 15px;
`;
const Avatar=styled.img`
  width:250px;
  height:180px;
  transition-duration:1s;
`
const AvatarWrapper=styled.div`
  width: fit-content;
  float: left;
  &:hover ${Avatar}{
    transform:scale(1.1,1.1)
  }
`
const RoomAvatar = (props)=>{
  return(
    <AvatarWrapper>
      <GridList cols ={1} style={{'width':'100%'}}>
      <GridTile
          title={props.hotelname}
          subtitle={<span><b>{props.hotelclass}</b></span>}
          actionIcon={<IconButton
              tooltip='add to your favorite'
              tooltipPosition='top-left'
              touch={true}
            >
            <StarBorder color="white" />
            </IconButton>}
            style={{'width':'100%'}}
          >
          <a href='#'><Avatar src={props.src}/></a>
        </GridTile>
      </GridList>
    </AvatarWrapper>
  ) 
}
const HotelDetail=styled.div`
  margin:15px 0px;
`

const RoomPrice = styled.div`
    position: absolute;
    width : 200px;
    height : fit-content;
    display : inline-block;
    margin-top: 40px;
    text-align: center;
    margin-left: 40px;
`;

const RoomDesc = styled.div`
    width: calc(100% - 515px);
    height: 100%;
    display: inline-block;
    vertical-align: top;
    padding-left: 10px;
`;

const RoomItemContainer = styled.div`
  height: 200px;
  box-shadow: 0 1px 4px rgba(41,51,57,.5);
  margin: 15px 0px 5px 2.5px;
  width: calc(100% - 5px);
  position : relative;
  padding : 10px;
`
const RatingPoint=styled.div`
    padding:10px;
    background-color:#e93a1eb5;
    color:#fff;
    width: fit-content;
    font-size: 13px;
    font-weight: 800;
    border-radius: 5px;
    float :left;
`
const RatingTitle=styled.div`
  float: left;
  margin: 10px;
  font-weight: 800;
`
const iconstyle={
  'float':'left'
}