import * as React from 'react';
// import styled from 'styled-components';

import { HistoryContext } from '../context/dataContext';

import Layout from '../components/utils/layout';
import CompletedTask from '../components/completed-task/completed-task';

const HistoryPage = () => {
  const { historyData } = React.useContext(HistoryContext);
  return (
      <Layout>
        <h2 data-testid='title'>History of tasks</h2>
        {
          historyData?.map(pos => <CompletedTask key={pos?.id}>{pos?.value}</CompletedTask>)
        }
      </Layout>
)}

export default HistoryPage;
