import React from 'react';
import {
  render,
  cleanup,
} from 'react-testing-library'

import App from './index';

afterEach(cleanup);

let app;
beforeEach(() => {
  app = render(<App />)
})

describe('App', () => {
  it('matches snapshot', () => {
    expect(app).toMatchSnapshot()
  });

  it('has login text', () => {
    expect(app.getByText('Login')).toBeTruthy()
  })

  it('has Let"s have some fun text', () => {
    expect(app.getByText("Let's have some fun")).toBeTruthy()
  })

  it('has "Input text to translate it to master Yoda style" text', () => {
    expect(app.getByText("Input text to translate it to master Yoda style")).toBeTruthy()
  })

  it('should have textarea to enter text', () => {
    expect(app.getByPlaceholderText("Enter text...")).toBeTruthy()
  })

  it('has translate button', () => {
    expect(app.getByText("Translate")).toBeTruthy()
  })

  it('has translated text area', () => {
    expect(app.getByPlaceholderText("Translated text...")).toBeTruthy()
  })
})
