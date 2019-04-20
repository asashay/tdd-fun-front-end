import React from 'react';
import {
  render,
  cleanup
} from 'react-testing-library'

import Pirate from './index';

afterEach(cleanup);

let component;
beforeEach(() => {
  component = render(<Pirate />)
})

describe('App', () => {
  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  });

  it('has Translation component rendered', () => {
    expect( component.getByTestId('translation-component') ).toBeTruthy()
  })

  it('has Translation component rendered with text "Pirate"', () => {
    expect( component.getByText(/Pirate/i) ).toBeTruthy()
  })

})
