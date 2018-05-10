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
{id:1,roomtype:{
    text:'Apartment, 1 Bedroom'
    ,listimg:[
        'https://upload.wikimedia.org/wikipedia/commons/5/56/Hotel-room-renaissance-columbus-ohio.jpg',
        'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
        'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
    ]
}
,detail:'Cable TV service,serviceCookware,Dishwasher,Flat-panel TV,Free WiFi,Full-sized refrigerator/freezerxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
,price:'50'
}
,{id:2,roomtype:{
    text:'AExecutive Apartment, 2 Bedrooms'
    ,listimg:[
        'https://upload.wikimedia.org/wikipedia/commons/5/56/Hotel-room-renaissance-columbus-ohio.jpg',
        'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
        'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
    ]
}
,detail:'Cable TV service,serviceCookware,Dishwasher,Flat-panel TV,Free WiFi,Full-sized refrigerator/freezer'
,price:'40'

}
,{id:3,roomtype:{
    text:'Junior Suite (Courtyard)'
    ,listimg:[
        'https://upload.wikimedia.org/wikipedia/commons/5/56/Hotel-room-renaissance-columbus-ohio.jpg',
        'http://www.cheaprooms.com/images/traveling/hotels/1000000/50000/40800/40797/40797_89_b.jpg',
        'https://www.usnews.com/dims4/USNEWS/ccab0b3/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F51%2F81%2F7bcf8a914549b6658716e4d2ae1c%2F160829-luxuryhotel-stock.jpg'
    ]
}
,detail:'n-room childcare (surcharge),In-room climate control (air conditioning),In-room safeIron/ironing board (on request),MinibarPay movies,Phone'
,price:'100'
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
    key: 'roomtype',
    dataIndex:'roomtype',
    render:(record)=>(
        <RoomImageSlider roomtype={record} key={record}/>  
    
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
    key:'id',
    title: '',
    dataIndex:'roomtype',
    render:(record)=>(
        <BookButton roomtype={record.text}></BookButton>
    )
}]
export default class Room extends React.Component{
    constructor(props){
        super(props)
        this.state={ }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        alert('123')
    }
    render(){
        return(
            <div>
                <Table dataSource={Rooms} columns={columns} bordered size='small' />
            </div>
        )
    }
} 
class BookButton extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={roomtype:''}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this.props.roomtype)
        this.setState({roomtype:this.props.roomtype})
    }
    render(){
        return(
            <Button type='primary' onClick={this.handleClick} >BOOK</Button>
        )
    }
}

