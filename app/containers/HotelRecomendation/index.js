import React from 'react';
import styled from 'styled-components';
import { List, Card } from 'antd';
import Avatar from '../../components/Avatar';
const data = [
  {
    id: '0',
    hotelname: 'New Dome',
    hotelclass: '1-star',
    hotellocation: 'Nha trang , 10km to Thap Tram Huong',
    hotelrating: 7.3,
    hotelprice: '$50',
    linkimage: 'https://www.telegraph.co.uk/content/dam/business/2017/08/10/TELEMMGLPICT000136723018_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwYDpM1iOj7her_R_5PUySDU.jpeg?imwidth=450',
  },
  { id: '1',
    hotelname: 'New Dome',
    hotelclass: '2-star',
    hotellocation: 'Nha trang , 10km to Thap Tram Huong',
    hotelrating: 6.3,
    hotelprice: '$40',
    linkimage: 'http://www3.hilton.com/resources/media/hi/IADMRHF/en_US/img/shared/full_page_image_gallery/main/HH_hotelextdusk_2_675x359_FitToBoxSmallDimensionSmallDimension_Center.jpg',
  },
  { id: '2',
    hotelname: 'New Aome',
    hotelclass: '3-star',
    hotellocation: 'Da Lat , 10km to Thap Tram Huong',
    hotelrating: 8.3,
    hotelprice: '$60',
    linkimage: 'http://www.crystal-hotel.ch/media/titelbilder/hotel-sommer.jpg',
  },
];

class HotelRecomend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <RecomendWrapper>
        <ReconmendTitle>Reconmend Hotel</ReconmendTitle>
        <List
          grid={{ gutter: 1, column: 3 }}
          dataSource={data}
          loading={false}
          renderItem={
              (item) => (
                <List.Item>
                  <Card title={item.hotelname}>
                    <Avatar title={item.hotelname} src={item.linkimage} rating={item.hotelrating} />
                  </Card>
                </List.Item>
              )
          }
        />
      </RecomendWrapper>
    );
  }
}
const RecomendWrapper = styled.div`
  margin:15px 0px;
`;
const ReconmendTitle = styled.div`
  padding: 10px;
  text-align:center;
  background: #37454d;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
export default HotelRecomend;
