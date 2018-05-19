import React from 'react';
import styled from 'styled-components';
import PricerFilter from './PricerFilter';
import HotelClassFilter from './HotelClassFilter';
import LocationFilter from './LocationFilter';
import { Button } from 'antd';
const plainOptions = ['1-star', '2-star', '3-star', '4-star', '5-star'];
export default class HotelFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { price: 0,
      city: '',
      distance: 10,
      address: '',
      hotelname: '',
      checkedList: [],
      indeterminate: true,
      checkAll: false,
    };

    this.HandleClick = this.HandleClick.bind(this);
    this.PriceChange = this.PriceChange.bind(this);
    this.ClassCheck = this.ClassCheck.bind(this);
    this.AllClassCheck = this.AllClassCheck.bind(this);
    this.CityChange = this.CityChange.bind(this);
    this.InputChange = this.InputChange.bind(this);
    this.DistanceChange = this.DistanceChange.bind(this);
  }

  HandleClick() {
    console.log(this.state);
  }

  PriceChange(value) {
    this.setState({
      price: value,
    });
  }

  ClassCheck(checkedList) {
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }

  AllClassCheck(e) {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  CityChange(value) {
    console.log(this.state);
    this.setState({ city: value });
  }

  InputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  DistanceChange(value) {
    this.setState({ distance: value });
  }

  render() {
    return (
      <div>
        <FilterOpt>
          <Title>PRICE</Title>
          <PricerFilter
            onChange={this.PriceChange}
            price={this.state.price}
          />
        </FilterOpt>
        <FilterOpt>
          <Title>CLASS</Title>
          <HotelClassFilter
            onChange={this.ClassCheck}
            onCheckAllChange={this.AllClassCheck}
            checkAll={this.state.checkAll}
            checkedList={this.state.checkedList}
            indeterminate={this.state.indeterminate}
          />
        </FilterOpt>
        <FilterOpt>
          <Title>LOCATION</Title>
          <LocationFilter
            CityChange={this.CityChange}
            InputChange={this.InputChange}
            DistanceChange={this.DistanceChange}
          />
        </FilterOpt>
        <ButtonWrapper>
          <Button
            type="primary"
            size="large"
            icon="search"
            onClick={this.HandleClick}
          >
            Search
          </Button>
        </ButtonWrapper>
      </div>
    );
  }
}

const FilterOpt = styled.div`
  padding: 15px 15px;
  background: #fff;
  margin: 5px 0px;
  border-bottom: solid 1.5px rgba(204, 206, 207, 0.4);

`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: 800;
  padding: 10px;
  color: #1890ff;
  text-align: center;
  margin-bottom: 0px;
`;
