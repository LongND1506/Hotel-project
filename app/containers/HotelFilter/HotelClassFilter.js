import React from 'react';
import styled from 'styled-components';
import { Checkbox,Row,Col} from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['1-star', '2-star', '3-star','4-star','5-star'];
export default class HotelClassFilter extends React.Component {
    state = {
      checkedList: [],
      indeterminate: true,
      checkAll: false,
    };
    render() {
      return (
        <div>
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              Check all
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
        </div>
      );
    }
    onChange = (checkedList) => {
      this.setState({
        checkedList,
        indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
        checkAll: checkedList.length === plainOptions.length,
      });
      console.log(this.state.checkedList)
    }
    onCheckAllChange = (e) => {
        console.log(this.state.checkedList)
      this.setState({
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    }
  }
  