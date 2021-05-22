import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: .5rem 0;
  padding: 1rem .5rem;
  width: 100%;

  :not(:last-child) {
    border-bottom: 1px solid #0000000f;
  }
`;

const DeleteButton = styled.button`
  padding: .5rem 1rem;
  background: #fff;
  color: #FE2400;
  border: 2px solid #FE2400;
  border-radius: 5px;
  transition: all .5s;
  cursor: pointer;

  :hover {
    background: #FE2400;
    color: #fff;
  }
`

const Task = ({children, handleDeleteClick, id}) => {
  return(
    <Wrapper id={id}>
      <p>
        {children}
      </p>
      <DeleteButton onClick={handleDeleteClick}>
        Delete
      </DeleteButton>
    </Wrapper>
  )
}

export default Task;
