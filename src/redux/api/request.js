import { call } from 'redux-saga/effects';
import { API } from '../../constants';

import { getAccessToken } from '../sagas/authentication';

import { parseResponseBody } from './helpers';
import APIError from './api-error';

const METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const request = (path, { method, headers = {}, body }) => {
  if (!(body instanceof FormData)) {
    headers['Content-Type'] = 'application/json; charset=utf-8';
  }

  const url = `${API.BASE_URI}${path}`;

  return fetch(url, {
    method,
    headers,
    body:
      method === METHOD.GET
        ? null
        : body instanceof FormData
        ? body
        : JSON.stringify(body != null ? body : {}),
  }).then(
    async response => {
      var responseBody = await parseResponseBody(response);

      // a HTTP response >= 200 and < 400, is valid
      if (response.status >= 200 && response.status < 400) {
        return responseBody;
      }

      // otherwise, throw an error
      throw new APIError('Invalid HTTP Response status code.', {
        url: url,
        responseBody: responseBody,
        statusCode: response.status,
      });
    },
    error => {
      throw new APIError(error.message, {
        url: url,
      });
    }
  );
};

function* sendRequest(method, path, body, options = {}) {
  const headers = {};
  if (options.authenticate !== false) {
    const accessToken = yield call(getAccessToken);
    headers['x-access-token'] = `${accessToken}`;
  }

  return yield request(path, { method, body, headers, options });
}

export function* get(path, options = {}) {
  return yield sendRequest(METHOD.GET, path, null, options);
}

export function* post(path, body, options = {}) {
  return yield sendRequest(METHOD.POST, path, body, options);
}

export function* destroy(path, options = {}) {
  return yield sendRequest(METHOD.DELETE, path, null, options);
}

export function* update(path, body, options = {}) {
  return yield sendRequest(METHOD.PUT, path, body, options);
}
