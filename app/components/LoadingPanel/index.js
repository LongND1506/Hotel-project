import React from 'react';
import styled from 'styled-components';
import {Icon} from 'antd'
const LoadingPanel=()=>{
    return(
        <LoadingPanelWrapper>
            <IconWrapper>
                <Icon type="loading" style={{ fontSize: 40 }} spin />
            </IconWrapper>
        </LoadingPanelWrapper>
    )
}
const LoadingPanelWrapper=styled.div`
    width:100%;
    height:100vh;
    background:#000000c2;
    z-index:2000;
    position: fixed;
`
const IconWrapper=styled.div`
    width: fit-content;
    margin: 300px auto;
    color: #fff;
`

export default LoadingPanel