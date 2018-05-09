import React from 'react';
import styled from 'styled-components';
// import {
//     Table,
//     TableBody,
//     TableHeader,
//     TableHeaderColumn,
//     TableRow,
//     TableRowColumn,
//     TableFooter,
//   } from 'material-ui/Table';
import Avatar from '../../components/Avatar'
import RoomImageSlider from './RoomImageSlider'
import {Table,Button} from 'antd'
// import RaisedButton from 'material-ui/RaisedButton';
const Rooms=[
{id:1,type:'Apartment, 1 Bedroom'
,image:'https://exp.cdn-hotels.com/hotels/12000000/11920000/11914800/11914704/11914704_18_b.jpg'
,detail:'Cable TV service,serviceCookware,Dishwasher,Flat-panel TV,Free WiFi,Full-sized refrigerator/freezerxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
,price:'50'
,listimg:[
    'https://s-ec.bstatic.com/images/hotel/max1024x768/120/120747026.jpg',
    'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
    'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
]
}
,{id:2,type:'AExecutive Apartment, 2 Bedrooms'
,image:'https://exp.cdn-hotels.com/hotels/12000000/11920000/11914800/11914704/0bb3a14f_b.jpg'
,detail:'Cable TV service,serviceCookware,Dishwasher,Flat-panel TV,Free WiFi,Full-sized refrigerator/freezer'
,price:'40'
,listimg:[
    'https://s-ec.bstatic.com/images/hotel/max1024x768/120/120747026.jpg',
    'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
    'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
]
}
,{id:2,type:'Junior Suite (Courtyard)'
,image:'https://exp.cdn-hotels.com/hotels/1000000/30000/23600/23515/be48d7cf_b.jpg'
,detail:'n-room childcare (surcharge),In-room climate control (air conditioning),In-room safeIron/ironing board (on request),MinibarPay movies,Phone'
,price:'100'
,listimg:[
    'https://s-ec.bstatic.com/images/hotel/max1024x768/120/120747026.jpg',
    'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
    'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
]
}
]
// const RoomList=Rooms.map((room)=>{
//     return(
//         <TableRow>
//                 <TableRowColumn>
//                     <div style={{'padding':'10px 0px'}}>
//                         <Avatar src ={room.image} title={room.type} key={room.id}/>   
//                     </div>
                    
//                 </TableRowColumn>
//                 <TableRowColumn style={{'wordWrapp':'break-word'}}>{room.detail}</TableRowColumn>
//                 <TableRowColumn>{room.price}$</TableRowColumn>
//                 <TableHeaderColumn><RaisedButton label="BOOK NOW" onClick={this.handleOpen} /></TableHeaderColumn>
//         </TableRow>
//     )
// })
const columns=[{
    title: 'Room Type',
    key: 'type',
    dataIndex:'listimg',
    render:(record)=>(
        <RoomImageSlider listimg={record} key={record}/>  
    
    )
  }, {
    title: 'Room Detail',
    dataIndex:'detail',
    key: 'detail',
    render:(text)=>(
        <div style={{'padding':'20px'}} key={text}>
            {text}
        </div>
    )
  }, {
    title: 'Price/Night',
    dataIndex: 'price',
    key: 'price',
  },
  {
    key:'',
    title: '',
    render:(i)=>(
        <Button type='primary'>BOOK</Button>
    )
}]
export default class Room extends React.Component{

    render(){
        return(
            <div>
                <Table dataSource={Rooms} columns={columns} bordered size='small' />
            </div>
        )
    }
} 

