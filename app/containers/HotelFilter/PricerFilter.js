import React from 'react';
import styled from 'styled-components';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class PriceFilter extends React.Component {
    state = {
      price: 0,
    }
    onChange = (value) => {
      this.setState({
        price: value,
      });
    }
    render() {
      return (
        <Row>
          <Col span={12}>
            <Slider min={10} max={100} onChange={this.onChange} value={this.state.inputValue} />
          </Col>
          <Col span={4}>
            <InputNumber
              min={10}
              max={100}
              step={0.01}
              style={{ marginLeft: 16 }}
              value={this.state.inputValue}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      );
    }
  }