import styled from 'styled-components';
import React from 'react';
import {Glyphicon} from 'react-bootstrap/lib';
const NavBar =()=>{
  return(
    <div>
      <ul className='menu'>
        <li><a href='#'><Glyphicon glyph='glyphicon glyphicon-home'/> Trang Chu</a></li>
        <li><a href='#'><Glyphicon glyph='glyphicon glyphicon-flag'/> Diem nhan hang</a></li>
        <li><a href='#'><Glyphicon glyph='glyphicon glyphicon-user'/> Dich vu</a>
            <ul>
              <li><a href='#'>Yeu cau giao nhan</a></li>
              <li><a href='#'>Quan li thu ho</a></li>
              <li><a href='#'>Quan li don hang</a></li>
              <li><a href='#'>Lien he</a></li>              
            </ul>
        </li>
        <li><a href='#'> <Glyphicon glyph='glyphicon glyphicon-phone'/> Lien he</a></li>        
      </ul>
      <div style={{clear:'both'}}></div>
    </div>
  )
};

export default NavBar;