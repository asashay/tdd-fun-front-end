import React from 'react';
import {
  render,
  cleanup,
} from 'react-testing-library'

import Translation from './index';

afterEach(cleanup);

let component;
beforeEach(() => {
  component = render(<Translation />)
})

describe('Translation component', () => {
  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  });

  it('has Let"s have some fun text', () => {
    expect(component.getByText("Let's have some fun")).toBeTruthy()
  })

  it('has "Input text to translate it to" text', () => {
    expect(component.getByText(/Input text to translate it to/i)).toBeTruthy()
  })

  it('has textarea to enter text', () => {
    expect(component.getByPlaceholderText("Enter text...")).toBeTruthy()
  })

  it('has translate button', () => {
    expect(component.getByText("Translate")).toBeTruthy()
  })

  it('has translated text area', () => {
    expect(component.getByPlaceholderText("Translated text...")).toBeTruthy()
  })
})
