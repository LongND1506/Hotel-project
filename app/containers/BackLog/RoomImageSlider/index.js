import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'antd';
import './RIS.css'
const RoomImageSlider=(props)=>{
    let Img=[];
    Img=props.listimg;
    const ImgList=Img.map((img)=>(
        <div key={img}>
            <img src={img} style={{'width':'400px'}}/>
        </div>
    ))
    return(
        <div style={{'width':'400px','padding':'10px','position':'relative'}}>
            <Carousel autoplay ref={node => (this.slider = node)}>
                {ImgList}
            </Carousel>
            <PrevButton onClick={()=>{console.log(this.slider)}}/>    
            <NextButton onsClick={()=>{this.slider.slick.slickNext()}}/> 
        </div>
    )
}
export default RoomImageSlider
const PrevButton=styled.div`
    background: url('https://lapinchinois.tuziwo.info/content/images/2016/06/fa-chevron-left.png');
    background-size:cover;
    background-repeat:no-repeat;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    background-color:#fff;
    cursor:pointer;
`
const NextButton=styled.div`
    background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Chevron_right_font_awesome.svg/512px-Chevron_right_font_awesome.svg.png');
    background-size:cover;
    background-repeat:no-repeat;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 10px;
    top: 50%;
    background-color:#fff;
    cursor:pointer;
`