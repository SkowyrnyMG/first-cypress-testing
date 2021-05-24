import React, { createContext, useState } from 'react';

export const HistoryContext = createContext({});
export const TasksContext = createContext([]);

export const DataProvider = ({children}) => {
  const [historyData, setHistoryData] = useState([]);
  const [tasks, setTasks] = useState([])

  return (
    <TasksContext.Provider value={{tasks, setTasks}}>
      <HistoryContext.Provider value={{historyData, setHistoryData}}>
        {children}
      </HistoryContext.Provider>
    </TasksContext.Provider>
  )
}

