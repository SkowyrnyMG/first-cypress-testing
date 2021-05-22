import * as React from 'react';
import styled from 'styled-components';

import Task from './task';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: #efefef;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 964px;
  height: 500px;
  overflow-x: scroll;
`;

const MainHeading = styled.h1`
  font-size: 80px;
`

const StyledForm = styled.form`
  display: flex;
`;

const TaskInput = styled.input`
  width: 100%;
  margin-right: 1rem;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
`;

const TaskSubmitButton = styled.button`
  padding: 1.2rem 2rem;
  color: lightskyblue;
  font-weight: 900;
  border: 2px solid currentColor;
  background-color: #fff;
  transition: all .5s;
  cursor: pointer;

  :hover {
    background-color: lightskyblue;
    color: #fff;
  }
`;



function App() {
  const [tasks, setTasks] = React.useState([]);
  const [taskInput, setTaskInput] = React.useState('');

    const createUniqueID = () => {
      const baseID = Math.floor((Math.random() * 1000000) + 1)
      const dateModifier = Date.now();
      const uniqueID = `${baseID}-${dateModifier}`;
      return uniqueID
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    if(tasks.includes(taskInput)) {
      setTaskInput('');
      return;
    }
    if(taskInput) {
      setTasks(prevState => ([...prevState, {value: taskInput, id: createUniqueID()}]));
    }
    setTaskInput('');
  }

  const handleTypeInTaskInput = (e) => {
    setTaskInput(e.target.value);
  }

  const deleteSelectedTask = (e) => {
   console.log(e.target.parentNode.id);
   const selectedNodeByID = e.target.parentNode.id;
   setTasks(prevState => prevState.filter(task => task.id !== selectedNodeByID))
  }


  return (
    <Wrapper>
      <AppContainer>
        <MainHeading>todos</MainHeading>
        <StyledForm action="submit" onSubmit={handleSubmit}>
          <TaskInput type="text" onChange={handleTypeInTaskInput} value={taskInput}/>
          <TaskSubmitButton type='submit'>add</TaskSubmitButton>
        </StyledForm>
        <div>
          {
            tasks.map(task => <Task key={task.id} id={task.id} handleDeleteClick={deleteSelectedTask}>{task.value}</Task>)
          }
        </div>
      </AppContainer>
    </Wrapper>
  );
}

export default App;
