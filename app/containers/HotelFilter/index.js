import React from 'react';
import styled from 'styled-components';
import PricerFilter from './PricerFilter'
import HotelClassFilter from './HotelClassFilter'
import LocationFilter from './LocationFilter'
import {Button} from 'antd'
export default class HotelFilter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={price:100,location:0 ,distance:10,address:'',hotelname:'',hotelclass:[]};
        
    }
    
    render(){
        return(
            <div>
                <FilterOpt>
                    <Title>Price per Night</Title>
                   <PricerFilter/>
                </FilterOpt>
                <FilterOpt>
                    <Title>Hotel class</Title>
                    <HotelClassFilter/>
                </FilterOpt>
                <FilterOpt>
                    <Title>Hotel location</Title>
                    <LocationFilter/>
                </FilterOpt>
                <ButtonWrapper>
                    <Button type='primary' size='large' icon='search' onClick={this.HandleClick}>Search</Button>
                </ButtonWrapper>
            </div>
        )
    }
}
const FilterOpt=styled.div`
padding: 15px 15px;
background: #fff;
margin: 5px 0px;
`;
const ButtonWrapper=styled.div`
text-align: center;
margin: 20px;`
const Title=styled.div`
font-size: 15px;
font-weight: 800;
background: #37454d;
padding: 10px;
color: #fff;
text-align: center;
margin-bottom: 20px;
`