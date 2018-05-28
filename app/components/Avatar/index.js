import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import  FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import styled from 'styled-components';
import {Rate,message} from 'antd'
import reducer from '../../containers/App/reducer';
import saga from './saga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLogin } from '../../containers/App/selectors';
class Avatar extends React.Component{
  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(value){
    if(this.props.isLogin)
     {this.props.rate({ratingpoint:value,hotelid:this.props.hotelid})}
    else
    {
      message.warning('You must login to rating !')
    }
  }
  
  render(){
    return(
      <AvatarWrapper>
        <GridList cols ={1} style={{'width':'100%'}}>
        <GridTile
            title={this.props.title}
            subtitle={<Rate defaultValue={this.props.rating}
             onChange={this.handleChange}
         
             />}
            // actionIcon={<IconButton
            //     tooltip='add to your favorite'
            //     tooltipPosition='top-left'
            //     touch={true}
            //   >
            //   <FavoriteBorder color="white" />
            //   </IconButton>}
              style={{'width':'100%'}}
            >
            <a href='#'><Img src={this.props.src}/></a>
          </GridTile>
        </GridList>
      </AvatarWrapper>
    ) 
  }
   
  }

  const AvatarWrapper=styled.div`
  width: fit-content;
  float: left;
`
const Img=styled.img`
  width:250px;
  height:190px;
  &:hover ${Img}{
    transform:scale(1.1,1.1)
  }
  transition-duration:1s;
`
export function mapDispatchToProps(dispatch) { 
  return {
    rate:(data)=> dispatch({type:"RATING",data})
    
  };
}

const mapStateToProps = createStructuredSelector({
  isLogin:makeSelectLogin()
   
});
const withConnect = connect(mapStateToProps,mapDispatchToProps);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'Avatar', saga});

 export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Avatar);
