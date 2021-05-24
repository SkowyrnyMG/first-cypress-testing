import React from 'react';
import styled from 'styled-components';

import NavBar from '../nav-bar/nav-bar';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 960px 1fr;
  grid-template-rows: min-content 1fr;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #efefef;

 > * {
    grid-column: 2 / 3;
  }
`;

const Layout = ({ children }) => (
  <Wrapper>
    <NavBar/>
    <div>
      {children}
    </div>
  </Wrapper>
)
;

export default Layout;