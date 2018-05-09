import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import styled from 'styled-components';
const Avatar = (props)=>{
    return(
      <AvatarWrapper>
        <GridList cols ={1} style={{'width':'100%'}}>
        <GridTile
            title={props.title}
            subtitle={<span><b>{props.subtitle}</b></span>}
            actionIcon={<IconButton
                tooltip='add to your favorite'
                tooltipPosition='top-left'
                touch={true}
              >
              <StarBorder color="white" />
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
export default Avatar