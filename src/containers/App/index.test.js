import React from 'react';
import {
  render,
  cleanup
} from 'react-testing-library'
import { Router } from 'react-router-dom';

import { history } from '../../utils'

import App from './index';

function renderWithRouter(
  ui,
  {
    route = '/',
    history,
  } = {}
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

afterEach(cleanup);

let component;
beforeEach(() => {
  component = renderWithRouter( <App><span>children</span></App>, { history } )
})

describe('App', () => {
  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  });

  it('has login text', () => {
    expect(component.getByText('Login for more')).toBeTruthy()
  })

  it('has "Talk like Yoda" text', () => {
    expect(component.getByText("Talk like Yoda")).toBeTruthy()
  })

  it('has "Talk like Pirate" text', () => {
    expect(component.getByText("Talk like Pirate")).toBeTruthy()
  })

  it('renders children', () => {
    expect( component.getByText('children') ).toBeTruthy()
  })
})
