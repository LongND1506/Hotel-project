import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import  FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import styled from 'styled-components';
import {Rate} from 'antd'
const Avatar = (props)=>{
  console.log(props.rating)
    return(
      <AvatarWrapper>
        <GridList cols ={1} style={{'width':'100%'}}>
        <GridTile
            title={props.title}
            subtitle={<Rate defaultValue={props.rating/2}/>}
            actionIcon={<IconButton
                tooltip='add to your favorite'
                tooltipPosition='top-left'
                touch={true}
              >
              <FavoriteBorder color="white" />
              </IconButton>}
              style={{'width':'100%'}}
            >
            <a href='#'><Img src={props.src}/></a>
          </GridTile>
        </GridList>
      </AvatarWrapper>
    ) 
  }
  const AvatarWrapper=styled.div`
  width: fit-content;
  float: left;
`
const Img=styled.img`
  width:250px;
  height:180px;
  &:hover ${Img}{
    transform:scale(1.1,1.1)
  }
  transition-duration:1s;
`
const Rating=(props)=>(
  <Rate defaultValue={3}/>
)
export default Avatar