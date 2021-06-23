import React from 'react';
import styled from 'styled-components';
import {Dropdown} from 'react-bootstrap'
const Ul = styled.ul`
  list-style: none;
  display: flex;
  position: relative;
  right: 425px;
  margin-top: -49px;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 700px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    li a {
      color:white;
    }
  }
  @media (max-width: 540px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    
  }
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#" className="nav_li">home</a></li>
      <li><a href="#Solution" className="nav_li">about us</a></li>
      <li><a href="#Services" className="nav_li">services</a></li>
      <li>
        <Dropdown  id='dropdown'>
  <Dropdown.Toggle   className='drop_nav_li' variant="success" id="dropdown-basic">
    Features
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </li>
      <li> <a href="#Team" className="nav_li">team</a></li>
      <li> <a href="#Blog" className="nav_li">blog</a></li>
      <li> <a href="#Contact" className="nav_li">contact</a></li>
    </Ul>
  )                  
}

export default RightNav