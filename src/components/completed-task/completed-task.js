import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid #0000000f;
  }
`;

const StyledParagraph = styled.p`
  padding: 2rem 1rem;

`;

const CompletedTask = ({ children }) => (
  <Wrapper>
    <StyledParagraph>
      {children}
    </StyledParagraph>
  </Wrapper>
);

export default CompletedTask;