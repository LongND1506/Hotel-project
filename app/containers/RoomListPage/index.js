/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';
import i18n from './i18n';
import { stringify } from 'querystring';



export default class RoomListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    var output = {}
    var dd = Object.keys(i18n);
    dd.forEach((key,index)=>{
        let current = i18n[key]
        let cuu = {}
        let keys = Object.keys(current.en)
        keys.forEach((keyy,index)=>{
            cuu[keyy] = {
                en : current.en[keyy],
                vi :  current.vi[keyy],
            }
        })
        output[key] = cuu
    })
    var dddd =JSON.stringify(output)
    return (
      <RoomList>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <textarea>{dddd}</textarea>
      </RoomList>
    );
  }
}

class Room extends React.Component {
    render() {
        return (
            <RoomItemContainer>
                <RoomAvatar/>
                <RoomDesc/>
                <RoomPrice>
                    <RoomName>RM210</RoomName>
                    <RoomPriceNumber>$50 Per night</RoomPriceNumber>
                    <BookButtom>Book Now</BookButtom>
                </RoomPrice>
            </RoomItemContainer>
        )
    }
}


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



const RoomList = styled.div`
    padding-bottom: 50px;
`;

const RoomAvatar = styled.div`
   width : 200px;
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
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 0px, rgba(0, 0, 0, 0.12) 0px 0px 1px;
    &:hover  {
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 2px 2px;
    }
    &:hover ${BookButtom} {
        color : rgb(33, 150, 243);
    }
`;

const RoomDesc = styled.div`
   width : calc(100% - 400px);
   height : 100%;
   display : inline-block;
`;

const RoomItemContainer = styled.div`
  height: 120px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 2px 2px;
  margin: 15px 0px 5px 2.5px;
  width: calc(100% - 5px);
  position : relative;
`;

