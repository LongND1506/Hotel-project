import React from 'react';
import styled from 'styled-components';
import Slider from 'material-ui/Slider';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const locations = ['TP .Hồ Chí Minh','Nha Trang','Đà Nẵng','Quy Nhơn','Hải Phòng'];
const items=locations.map((location)=>{
    return(
        <MenuItem value={location}
         key={location} 
         primaryText={`${location}`} 
          />
    )
})
const classofhotel=['1 sao','2 sao',
'3 sao','4 sao',
'5 sao',
]
// class CheckboxField extends React.PureComponent {

//     handleCheck = (event, isInputChecked) => {
//       this.props.onChange(event, isInputChecked, this.props.label);
//     };
  
//     render() {
//       return (
//             <Checkbox
//               label={this.props.label}
//               value={this.props.label}
//               onCheck={this.handleCheck}
//             />
//       )}
//   }
const CheckBox= classofhotel.map((item)=>{
           return(
            <Checkbox key={item} onChange={(event,isChecked,value)=>{console.log(value)}} label={item}/>
            ) 
})
export default class RoomFilter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={price:100,location:0 ,distance:10,address:'',hotelname:'',hotelclass:[]};
        this.HandlePriceChange=this.HandlePriceChange.bind(this)
        this.HandleDistanceChange=this.HandleDistanceChange.bind(this)
        this.HandleLocationChange=this.HandleLocationChange.bind(this)
        this.HandleChange=this.HandleChange.bind(this)
        this.HandleClick=this.HandleClick.bind(this)
    }
    
    HandlePriceChange(e,value){
        this.setState({price:value});
       
    }
    HandleLocationChange(e,index,value){
        this.setState({location:value})
    }
    HandleDistanceChange(e,value){
        this.setState({distance:value})
    }
    HandleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    HandleClick(){
        console.log(this.state)
        console.log(Checkbox)
    }
    render(){
        return(
            <div>
                <FilterOpt>
                    <H>Price/Night</H>
                    <div>
                        <div style={{'color':'#00bcd4','textAlign':'center'}}>Max {this.state.price}$</div>
                        <div>
                            <span>100$</span>
                            <span style={{'float':'right'}}>500$</span>
                        </div>
                        <div>
                            <Slider
                            name='price'
                            min={100}
                            max={500}
                            step={10}
                            value={this.state.price}
                            onChange={this.HandlePriceChange}
                            />
                        </div>
                    </div>
                </FilterOpt>
                <FilterOpt>
                    <H>Hotel Class</H>
                    <div>
                        {CheckBox}
                    </div>
                </FilterOpt>
                <FilterOpt>
                    <H>Distance From</H>
                    <div>
                        <div>
                            <SelectField
                            floatingLabelText="Location"
                            value={this.state.location}
                            onChange={this.HandleLocationChange}
                            autoWidth={false}
                            style={{'width':'210px'}}
                            >
                            {items}
                            </SelectField>
                        </div>
                        <div>
                            <div style={{'color':'#00bcd4','textAlign':'center'}}>
                                Max {this.state.distance} km
                            </div>
                            <div>
                            <span>0.1 km</span>
                            <span style={{'float':'right'}}>20 km</span>
                        </div>
                            <Slider
                                name=''
                                min={0.1}
                                max={20}
                                step={0.1}
                                value={this.state.distance}
                                onChange={this.HandleDistanceChange}
                                sliderStyle={{'marginBottom':'0px!important'}}
                                />
                            <div>
                            <TextField 
                            style={{'width':'210px'}} 
                            floatingLabelText="Address" 
                            name='address'
                            value={this.state.address}
                            onChange={this.HandleChange}
                            />
                            </div>
                        </div>
                    </div>
                </FilterOpt>
                <FilterOpt>
                    <H>Name Search</H>
                    <div>
                        <TextField 
                        style={{'width':'210px',}} 
                        floatingLabelText="Hotel Name" 
                        name='hotelname'
                        value={this.state.hotelname}
                        onChange={this.HandleChange}
                        />
                    </div>
                </FilterOpt>
                <ButtonWrapper>
                    <Button type='button' onClick={this.HandleClick}>Search</Button>
                </ButtonWrapper>
            </div>
        )
    }
}
const FilterOpt=styled.div`
padding: 15px;
background: #9e9e9e1a;
border-bottom: 1px dotted #0e0e0e;
`;
const H=styled.div`
font-weight: 800;
font-size: 20px;
margin-bottom: 20px;
`
const ButtonWrapper=styled.div`
text-align: center;
margin: 20px;`
const Button=styled.button`
padding: 10px 20px;
background: #2789b5de;
color: #fff;
border-radius: 5px;
`