import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Wrapper = styled.header`
  grid-column: 1 / -1 !important;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;
  background: #fff;
  box-shadow: 0 5px 15px #0000000f;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  .active{
    color: #141ee2
  }
`;

const StyledNavLink = styled(NavLink)`
  padding: 2rem;
  color: #149ee2;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
`;

const NavBar = () => (
  <Wrapper>
    <h2>Logo</h2>
    <nav>
      <NavList>
          <li>
            <StyledNavLink exact to='/' activeClassName="active">
              Home
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/history' activeClassName="active">
              History
            </StyledNavLink>
          </li>
      </NavList>
    </nav>
  </Wrapper>
)

export default NavBar;