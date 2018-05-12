import React from 'react';
import styled from 'styled-components';
import { Select,Slider,Input } from 'antd';
const Option = Select.Option;
const Search=Input.Search;
const location=[
    {
      name: "Hà Nội",
      country: "VN"
    },
    {
      name: "Hà Giang",
      country: "VN"
    },
    {
      name: "Cao Bằng",
      country: "VN"
    },
    {
      name: "Bắc Kạn",
      country: "VN"
    },
    {
      name: "Tuyên Quang",
      country: "VN"
    },
    {
      name: "Lào Cai",
      country: "VN"
    },
    {
      name: "Điện Biên",
      country: "VN"
    },
    {
      name: "Lai Châu",
      country: "VN"
    },
    {
      name: "Sơn La",
      country: "VN"
    },
    {
      name: "Yên Bái",
      country: "VN"
    },
    {
      name: "Hòa Bình",
      country: "VN"
    },
    {
      name: "Thái Nguyên",
      country: "VN"
    },
    {
      name: "Lạng Sơn",
      country: "VN"
    },
    {
      name: "Quảng Ninh",
      country: "VN"
    },
    {
      name: "Bắc Giang",
      country: "VN"
    },
    {
      name: "Phú Thọ",
      country: "VN"
    },
    {
      name: "Vĩnh Phúc",
      country: "VN"
    },
    {
      name: "Bắc Ninh",
      country: "VN"
    },
    {
      name: "Hải Dương",
      country: "VN"
    },
    {
      name: "Hải Phòng",
      country: "VN"
    },
    {
      name: "Hưng Yên",
      country: "VN"
    },
    {
      name: "Thái Bình",
      country: "VN"
    },
    {
      name: "Hà Nam",
      country: "VN"
    },
    {
      name: "Nam Định",
      country: "VN"
    },
    {
      name: "Ninh Bình",
      country: "VN"
    },
    {
      name: "Thanh Hóa",
      country: "VN"
    },
    {
      name: "Nghệ An",
      country: "VN"
    },
    {
      name: "Hà Tĩnh",
      country: "VN"
    },
    {
      name: "Quảng Bình",
      country: "VN"
    },
    {
      name: "Quảng Trị",
      country: "VN"
    },
    {
      name: "Thừa Thiên–Huế",
      country: "VN"
    },
    {
      name: "Đà Nẵng",
      country: "VN"
    },
    {
      name: "Quảng Nam",
      country: "VN"
    },
    {
      name: "Quảng Ngãi",
      country: "VN"
    },
    {
      name: "Bình Định",
      country: "VN"
    },
    {
      name: "Phú Yên",
      country: "VN"
    },
    {
      name: "Khánh Hòa",
      country: "VN"
    },
    {
      name: "Ninh Thuận",
      country: "VN"
    },
    {
      name: "Bình Thuận",
      country: "VN"
    },
    {
      name: "Kon Tum",
      country: "VN"
    },
    {
      name: "Gia Lai",
      country: "VN"
    },
    {
      name: "Đắk Lắk",
      country: "VN"
    },
    {
      name: "Đắk Nông",
      country: "VN"
    },
    {
      name: "Lâm Đồng",
      country: "VN"
    },
    {
      name: "Bình Phước",
      country: "VN"
    },
    {
      name: "Tây Ninh",
      country: "VN"
    },
    {
      name: "Bình Dương",
      country: "VN"
    },
    {
      name: "Đồng Nai",
      country: "VN"
    },
    {
      name: "Bà Rịa–Vũng Tàu",
      country: "VN"
    },
    {
      name: "Thành phố Hồ Chí Minh",
      country: "VN"
    },
    {
      name: "Long An",
      country: "VN"
    },
    {
      name: "Tiền Giang",
      country: "VN"
    },
    {
      name: "Bến Tre",
      country: "VN"
    },
    {
      name: "Trà Vinh",
      country: "VN"
    },
    {
      name: "Vĩnh Long",
      country: "VN"
    },
    {
      name: "Đồng Tháp",
      country: "VN"
    },
    {
      name: "An Giang",
      country: "VN"
    },
    {
      name: "Kiên Giang",
      country: "VN"
    },
    {
      name: "Cần Thơ",
      country: "VN"
    },
    {
      name: "Hậu Giang",
      country: "VN"
    },
    {
      name: "Sóc Trăng",
      country: "VN"
    },
    {
      name: "Bạc Liêu",
      country: "VN"
    },
    {
      name: "Cà Mau",
      country: "VN"
    }
  ]
export default class LocationFilter extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={city:'',distance:0,address:'',hotelname:''}
        this.CityChange=this.CityChange.bind(this)
        this.InputChange=this.InputChange.bind(this)
        this.DistanceChange=this.DistanceChange.bind(this)

    }
    CityChange(value){
        console.log(this.state)
        this.setState({city:value})
    }
    InputChange(e){
        console.log(this.state)
        this.setState({[e.target.name]:e.target.v})
    }
    DistanceChange(value)
    {
        console.log(this.state)
        this.setState({distance:value})
    }
    render(){
        return(
            <div>
               <Wrapper>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select City"
                        optionFilterProp="children"
                        name='city'
                        onChange={this.CityChange}
                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                         {location.map((item)=>(
                            <Option value={item.name} key={item.name}>{item.name}</Option>
                        ))} 
                    </Select>   
                </Wrapper> 
                <Wrapper>
                    <Slider 
                    marks={{0.5:'0.5 km',20:'20 km'}} 
                    step={0.1}
                    min={0.5}
                    max={20} 
                    onChange={this.DistanceChange}/>
                </Wrapper>
                <Wrapper>
                    <Search
                        placeholder="Address"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                        name='address'
                        onChange={this.InputChange}
                    />
                </Wrapper>
                <Wrapper>
                    <Search
                        placeholder="Hotel Name"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                        name='hotelname'
                        onChange={this.InputChange}
                    />
                </Wrapper>
            </div>
      
        )
    }
}
const Wrapper=styled.div`
    text-align:center;
    padding: 10px 10px;
`