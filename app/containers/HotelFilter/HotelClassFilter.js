import React from 'react';
import styled from 'styled-components';
import { Checkbox,Row,Col} from 'antd';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['1-star', '2-star', '3-star','4-star','5-star'];
export default class HotelClassFilter extends React.Component {
    render() {
      return (
        <div>
          <div style={{ borderBottom: '1px solid #E9E9E9' }}>
            <Checkbox
              indeterminate={this.props.indeterminate}
              onChange={this.props.onCheckAllChange}
              checked={this.props.checkAll}
            >
              Check all
            </Checkbox>
          </div>
          <br />
          <CheckboxGroup options={plainOptions} value={this.props.checkedList} onChange={this.props.onChange} />
        </div>
      );
    }
  }
  