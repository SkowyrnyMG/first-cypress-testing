import React from 'react';
import { mount } from '@cypress/react';

import { BrowserRouter as Router} from 'react-router-dom';

export const RenderWithRouter = (component) => (
  mount(
    <Router>
      {component}
    </Router>
  )
)