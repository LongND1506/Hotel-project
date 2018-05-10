import React from 'react';
import styled from 'styled-components';
import { DatePicker,Select } from 'antd';
const {RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const Option = Select.Option
export default class BookOption extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={datecheckin:'',datecheckout:'',numofroom:0}
        this.handleDateChange=this.handleDateChange.bind(this)
        this.handleRoomChange=this.handleRoomChange.bind(this)
    }
    handleDateChange(date,dateString){
        this.setState({datecheckin:dateString[0],datecheckout:dateString[1]})
    }
    handleRoomChange(value){
        this.setState({numofroom:value})
        console.log(value)
    }
    render(){
        return(
            <OptionWrapper>
                <RangePickerWrapper>
                    <RangePicker
                    format={dateFormat}
                    placeholder={['Checkin','Checkout']}
                    onChange={this.handleDateChange}
                  
                    />
                </RangePickerWrapper>
                <div>
                    <Select defaultValue="Rooms" style={{'width':'80px'}} onChange={this.handleRoomChange}>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                    </Select>
                </div>
            </OptionWrapper>
        )
    }
}
const OptionWrapper=styled.div`
    padding:10px;
    background-color:#565656;
`
const RangePickerWrapper=styled.div`
    float:left;
    margin:0px 10px
`
