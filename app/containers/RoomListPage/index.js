/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';
import { stringify } from 'querystring';


export default class RoomListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <RoomListPageContainer>
        <RoomFilterBox />
        <RoomList>
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
          <Room />
        </RoomList>
      </RoomListPageContainer>
    );
  }
}

class Room extends React.Component {
  render() {
    return (
      <RoomItemContainer>
        <RoomAvatar />
        <RoomDesc>
          <HotelName>Victoria Hotel</HotelName>
        </RoomDesc>
        <RoomPrice>
          <RoomName>RM210</RoomName>
          <RoomPriceNumber>$50 Per night</RoomPriceNumber>
          <BookButtom>Book Now</BookButtom>
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
    color: #403636;
    font-size: 14px;
    height: 20px;
    line-height: 20px;
    color: #677186;
`;

const BookButtom = styled.div`
    text-align: center;
    font-weight: 600;
    color: #403636;
    font-size: 24px;
    height: 30px;
    line-height: 30px;
`;

const RoomListPageContainer = styled.div`
`;

const RoomFilterBox = styled.div`
  display: inline-block;
  width: 250px;
  vertical-align: top;
  height : 768px;
  margin-top: 15px;
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

const RoomAvatar = styled.div`
   width : 315px;
   height : 100%;
   background-size : cover;
   display : inline-block;
   background-image : url("http://lenscratch.com/wp-content/uploads/2015/05/Hotel-Paris-Room-1134532.jpg");
`;

const RoomPrice = styled.div`
    position: absolute;
    cursor: pointer;
    width : 200px;
    height : 100%;
    display : inline-block;
    &:hover ${BookButtom} {
        color : rgb(33, 150, 243);
    }
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
`;

