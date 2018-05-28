import React from 'react';
import styled from 'styled-components';
import { DatePicker,Select } from 'antd';
import reducer from '../../containers/App/reducer';
import saga from './saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
const {RangePicker } = DatePicker;
const dateFormat = 'DD/MM/YYYY';
const Option = Select.Option
 class BookOption extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={datecheckin:'',datecheckout:'',numofroom:0}
        this.handleDateChange=this.handleDateChange.bind(this)
        this.handleRoomChange=this.handleRoomChange.bind(this)
    }
    handleDateChange(date, dateString) {
        this.props.datechange({ datecheckin: dateString[0], datecheckout: dateString[1] });
    }
    handleRoomChange(value) {
        this.props.roomnumberchange(value);
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
                    <Select defaultValue="Rooms" style={{'width':'90px'}} onChange={this.handleRoomChange}>
                        <Option value="1">1 </Option>
                        <Option value="2">2 </Option>
                        <Option value="3">3 </Option>
                        <Option value="4">4 </Option>
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
export function mapDispatchToProps(dispatch) { 
    return {
      datechange:(date)=> dispatch({type:"CHOOSE_DATE",date}),
      roomnumberchange: (num) => dispatch({type:"ROOM_NUM_CHANGE",num})
    };
  }
  
  const mapStateToProps = createStructuredSelector({

  });
  const withConnect = connect(mapStateToProps,mapDispatchToProps);
  
//   const withReducer = injectReducer({ key: 'listroom', reducer });
//   const withSaga = injectSaga({ key: 'listroom', saga });
  
  export default compose(
    // withReducer,
    // withSaga,
    withConnect,
  )(BookOption);
