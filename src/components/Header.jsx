import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ({isLogged}) => {

    const styleNav=({isActive}) => ({color: isActive ? 'black' : 'white' })

  return (
    <MainHeader>
      <h2>LOGO</h2>
      {isLogged && <nav>
        <NavList>
          <li>
            <NavLink to='/products' style={styleNav}  > Products </NavLink>
          </li>
          <li>
          <NavLink to='/myCart'  style={styleNav} > My Cart </NavLink>
          </li>
          <li>
            <NavLink to='/myOrders'  style={styleNav}  > My Orders </NavLink>
          </li>
        </NavList>
      </nav> }
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.header`
  background-color: #1c85db;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  color: white;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: white;
  gap: 40px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;
