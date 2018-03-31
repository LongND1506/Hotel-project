/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';
import {Label,Glyphicon,Jumbotron,Image,Grid,Row,Col,ListGroup, ListGroupItem} from 'react-bootstrap/lib';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Done from 'material-ui/svg-icons/action/done';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';
import CircularProgress from 'material-ui/CircularProgress';
import { constants } from 'zlib';
import Button from 'react-bootstrap-button-loader';
export default class RoomListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <ListGroup>
          <ListGroupItem><Room/></ListGroupItem>
          <ListGroupItem><Room/></ListGroupItem>
          <ListGroupItem><Room/></ListGroupItem>
      </ListGroup>
       
      
    );
  }
};

class Room extends React.Component {
    render() {
        return (
            <Itemwrapper>
                <ItemImg/>
                <ItemDesc/>
                <ItemCheck>
                    <Checkbox
                        checkedIcon={<Done />}
                        uncheckedIcon={<div/>}
                        
                        label={<Addbutton/>}
                        onCheck={()=>{alert('123')}}
                    />
                </ItemCheck>
                <Button loading={this.state.loading}>Press me!</Button>
                <div style={{clear:'both'}}></div>
            </Itemwrapper>
            
        )
    }
}
//function
    
//Component
const Img=({className,children})=>{
    return(
        <div className={className}>
            <Image src='https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-h1-400x460-400x460.png' thumbnail></Image>
        </div>
    )
};
const Desc=({className,children})=>{
    return(
        <div className={className}>
            <a href='#'><p>IPHONE X 64GB</p></a> 
            <Detail/>
            <div style={{display:'flex',marginTop:'10px'}}>
                <Tag name='Phone'/>
                <Tag name='IPhone'/>
                <Tag name='IPhone X '/>   
             </div>
        </div>
        
    );
};
const Detail=({className,children})=>{
    return(
        <div className={className} style={{lineHeight: '25px',fontSize: '12px'}}>
            <div>
                <Label bsStyle='success'>
                    <Glyphicon glyph='glyphicon glyphicon-map-marker'/> Dia diem nhan hang :
                </Label>  {desc.addr.get}
            </div>
            <div>
                <Label bsStyle='success'>
                    <Glyphicon glyph='glyphicon glyphicon-map-marker'/> Dia diem giao hang :
                </Label>  {desc.addr.send}
            </div>
            <div>
                <Label bsStyle='warning'>
                    <Glyphicon glyph='glyphicon glyphicon-time'/> Thoi gian yeu cau :
                </Label>  {desc.time}
            </div>
        </div> 
    )
}
const Tag=(props)=>{
    return(
        <Chip className={props.className} style={Chipstyle} labelStyle={Chipstyle.font} onClick={()=>{alert('123');}}>{props.name}</Chip>
    )
};
const Addbutton=()=>{
    return(
            <RaisedButton style={{
                 minWidth: '61px',
                 marginLeft: '30px',
            }}>Add</RaisedButton>
    )
}
const Cir=()=>{
    return(
        <CircularProgress/>
    )
};
//Style
     const Chipstyle={ 
        marginRight:'5px',
        height: 'fit-content',
        font : {
            fontSize:'10px',
            lineHeight: '10px',
            padding: '6px 10px',
        }
    }  
     ;
    const Itemwrapper= styled.div`
        padding: 5px 10px;
        box-shadow: 2px 3px 10px #ccc;
        border-radius: 5px;
        border: 1px solid #ccc;
    
`;
    const ItemImg=styled(Img)`
        width:170px;
        float :left;
        padding:10px;
    `;
    const ItemDesc=styled(Desc)`
        float:left;
        width: 55%;
        word-wrap: break-word;
        padding: 10px 15px;
        text-align: left;
    `;
    const ItemCheck=styled.div`
        width:auto;
        float:left;
        margin-top: 40px;
        text-align:center;
    `;


    const desc= {addr :{get:'Lim Tower, 9-11 Đường Tôn Đức Thắng, Bến Nghé, Quận 1, Hồ Chí Minh'
    ,send:'1 Nơ Trang Long, Phường 7, Bình Thạnh, Hồ Chí Minh, Việt Nam'},
    time: '6h 30p',
        };