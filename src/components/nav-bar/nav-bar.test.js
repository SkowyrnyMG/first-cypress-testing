import React from 'react';
import {RenderWithRouter} from '../../utils/testing-helpers';
import NavBar from './nav-bar';

describe('NavBar unit tests', () => {
  it('Should render NavBar compoenent', () => {
    RenderWithRouter(<NavBar/>)
  })
})
