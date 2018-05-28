import React from 'react';
import styled from 'styled-components';
import { RESTART_ON_REMOUNT } from 'utils/constants'
import Avatar from '../../components/Avatar'
import RoomImageSlider from './RoomImageSlider'
import {Button,Table,message} from 'antd'
import { makeSelectRoom, makeSelectBooked, makeSelectdateCI, makeSelectdateCO, makeSelectnumofroom, makeSelectroomprice, makeSelectLogin } from '../App/selectors';
import reducer from '../../containers/App/reducer';
import saga from './saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
// import { setFlagsFromString } from '';
// import RaisedButton from 'material-ui/RaisedButton';
// const Rooms=[
// {id:1,
//     introduction:'Apartment, 1 Bedroom'
//     ,images:[
//         'https://upload.wikimedia.org/wikipedia/commons/5/56/Hotel-room-renaissance-columbus-ohio.jpg',
//         'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
//         'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
//     ]
// ,description:'Cable TV service,serviceCookware,Dishwasher,Flat-panel TV,Free WiFi,Full-sized refrigerator/freezerxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
// ,price:'50'
// }
// ,{id:2,roomtype:{
//     text:'AExecutive Apartment, 2 Bedrooms'
//     ,listimg:[
//         'https://upload.wikimedia.org/wikipedia/commons/5/56/Hotel-room-renaissance-columbus-ohio.jpg',
//         'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
//         'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
//     ]
// }
// ,detail:'Cable TV service,serviceCookware,Dishwasher,Flat-panel TV,Free WiFi,Full-sized refrigerator/freezer'
// ,price:'40'
// }
// ,{id:3,roomtype:{
//     text:'Junior Suite (Courtyard)'
//     ,listimg:[
//         'https://upload.wikimedia.org/wikipedia/commons/5/56/Hotel-room-renaissance-columbus-ohio.jpg',
//         'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
//         'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
//     ]
// }
// ,detail:'n-room childcare (surcharge),In-room climate control (air conditioning),In-room safeIron/ironing board (on request),MinibarPay movies,Phone'
// ,price:'100'

// ]
// const RoomList=Rooms.map((room)=>{
//     return(
//         <TableRow>
//                 <TableRowColumn style={{'width':'300px'}}>
//                     <div style={{'padding':'10px 0px'}}>
//                         <RoomImageSlider roomtype={room.roomtype} />
//                     </div>
                    
//                 </TableRowColumn>
//                 <TableRowColumn style={{'wordWrapp':'break-word'}}>{room.detail}</TableRowColumn>
//                 <TableRowColumn>{room.price}$</TableRowColumn>
//                 <TableHeaderColumn><Button type='primary' onClick={()=>{console.log(this)}}>BOOK</Button></TableHeaderColumn>
//         </TableRow>
//     )
// })
class Room extends React.Component{
    constructor(props){
        super(props)
        this.state=this.props.state
    }
    componentWillReceiveProps(){
        // const hotelid=this.props.hotelid
        // this.props.listallroom(hotelid)
    }
        render(){
            // console.log(this.props) 
            let self = this;
            return(
            <div>
                <Table dataSource={this.props.listroom}
                columns={RowXXX(self)} 
                bordered size='small'
               
                rowKey="uid"
                onRow={(record)=>{
                    return{
                        onMouseEnter:()=>{
                           this.props.chooseroom(record.price)
                        }
                    }
                }}
                />
            </div>
        )}
} 
var RowXXX = function(rootDoom){
 return [{
    title: 'Room Type',
    key: 'roomtype',
    render:(record)=>(<RoomImageSlider roomtype={record} key={record}/> )
         
  }, {
    title: 'Room Detail',
    dataIndex:'description',
    key: 'description',
    render:(text)=>(
        <div style={{'padding':'10px','width':'250px'}} key={text}>
            {text}
        </div>
    )
  }, {
    title: 'Price/Night ( $ )',
    dataIndex: 'price',
    key: 'price',
  },
  {
    key:'id',
    title: '',
    dataIndex:'roomtype',
    onCell:()=>{},
    render:(record)=>{
        
        return (
        <Button type='primary' onClick={()=>{
            const bookedroom={
                datecheckin: rootDoom.props.datecheckin,
                datecheckout:rootDoom.props.datecheckout,
                numofroom:rootDoom.props.numofroom,
                roomprice:rootDoom.props.roomprice
            }
            if(rootDoom.props.isLogin)
                { 
                    if(bookedroom.datecheckin&&bookedroom.datecheckout&&bookedroom.numofroom)
                        {
                            // rootDoom.props.book(bookedroom)
                            console.log('xxx')
                        }
                    else
                    {
                        message.warning('Check date check in and date check out or number of room to book your room!') 
                    }
            }
            else{
                     message.warning('You must login to book your room !')
            }
    }} >BOOK</Button>
    )
}
}]
} 
export function mapDispatchToProps(dispatch) { 
    return {
      listallroom:(hotelid)=> dispatch({type:"LOAD_ROOM",hotelid}),
      chooseroom: (price) => dispatch({type:"CHOOSE_ROOM",price}),
      book: (bookedroom) => dispatch({type:"BOOK_ROOM",bookedroom})
    };
  }
  
  const mapStateToProps = createStructuredSelector({
        isLogin: makeSelectLogin(),
        listroom: makeSelectRoom(),
        datecheckin: makeSelectdateCI(),
        datecheckout: makeSelectdateCO(),
        numofroom: makeSelectnumofroom(),
        roomprice: makeSelectroomprice()
      
  });
  const withConnect = connect(mapStateToProps,mapDispatchToProps);
  
//   const withReducer = injectReducer({ key: 'listroom', reducer });
  const withSaga = injectSaga({ key: 'listroom', saga });
  
  export default compose(
    // withReducer,
    withSaga,
    withConnect,
  )(Room);

