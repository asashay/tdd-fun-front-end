import React from 'react';

const Translation = props => {
  const { styleType } = props;

  return <div 
    className="d-flex flex-column justify-content-center align-items-center"
    data-testid="translation-component"
    >
    <h1>Let's have some fun</h1>
    <p>
      {`Input text to translate it to ${styleType} style`}
    </p>
    <div className="input-group">
      <textarea className="form-control" aria-label="With textarea" placeholder="Enter text..."></textarea>
    </div>
    <div className="my-2">
      <button className="btn btn-primary">Translate</button>
    </div>
    <div className="input-group">
      <textarea className="form-control"
        aria-label="With textarea"
        placeholder="Translated text..."
        disabled></textarea>
    </div>
  </div>
};

export default Translation;
