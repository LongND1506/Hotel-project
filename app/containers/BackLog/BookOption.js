import React from 'react';
import styled from 'styled-components';
import { DatePicker,Select } from 'antd';
const {RangePicker } = DatePicker;
const dateFormat = ',DD/MM/YYYY';
const Option = Select.Option
export default class BookOption extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={value: 1,}
    }
    render(){
        return(
            <OptionWrapper>
                <RangePickerWrapper>
                    <RangePicker
                    format={dateFormat}
                    />
                </RangePickerWrapper>
                <div>
                    <Select defaultValue="Rooms" style={{'width':'80px'}}>
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
