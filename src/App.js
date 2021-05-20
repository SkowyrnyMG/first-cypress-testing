import * as React from 'react';
import styled from 'styled-components';

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
    background-color: lightskyblue ;
    color: #fff;
  }
`;



function App() {
  const [tasks, setTasks] = React.useState([]);
  const [taskInput, setTaskInput] = React.useState('');

  // const handleClickAdd = (e) => {
  //   e.preventDefault();
  //   setTasks(prevState => ([...prevState, ]))
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tasks.includes(taskInput)) {
      setTaskInput('');
      return;
    }
    if(taskInput) {
      setTasks(prevState => ([...prevState, taskInput]));
    }
    setTaskInput('');
  }

  const handleTypeInTaskInput = (e) => {
    setTaskInput(e.target.value);
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
            tasks.map(task => <p key={task}>{task}</p>)
          }
        </div>
      </AppContainer>
    </Wrapper>
  );
}

export default App;
