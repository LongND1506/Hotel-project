import React from 'react';
import styled from 'styled-components';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class PriceFilter extends React.Component {
    render() {
      return (
        <Row>
          <Col span={12}>
            <Slider min={10} max={100} onChange={this.props.onChange} value={this.props.price} />
          </Col>
          <Col span={4}>
            <InputNumber
              min={10}
              max={100}
              step={0.01}
              style={{ marginLeft: 16 }}
              value={this.props.price}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={value => value.replace(/\$\s?|(,*)/g, '')}
              onChange={this.props.onChange}
            />
          </Col>
        </Row>
      );
    }
  }