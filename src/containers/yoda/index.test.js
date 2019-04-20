import React from 'react';
import {
  render,
  cleanup
} from 'react-testing-library'

import Yoda from './index';

afterEach(cleanup);

let component;
beforeEach(() => {
  component = render(<Yoda />)
})

describe('App', () => {
  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  });

  it('has Translation component rendered', () => {
    expect( component.getByTestId('translation-component') ).toBeTruthy()
  })

  it('has Translation component rendered with texte "master Yoda"', () => {
    expect( component.getByText(/master Yoda/i) ).toBeTruthy()
  })

})
