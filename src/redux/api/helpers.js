import { chain, isObject, mapKeys, camelCase } from 'lodash';

export function buildQueryString(url, params = {}) {
  const queryString = chain(params)
    .keys()
    .filter(key => params[key])
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&')
    .value();

  if (queryString.length === 0) {
    return url;
  }

  return url + '?' + queryString;
}

const reviverFunction = (key, value) => {
  if (!isObject(value) || Array.isArray(value)) {
    return value;
  }

  return mapKeys(value, (originalValue, originalKey) => {
    return camelCase(originalKey);
  });
};

export async function parseResponseBody(response) {
  const textBody = await response.text();

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return textBody ? JSON.parse(textBody, reviverFunction) : {};
  } else {
    return textBody;
  }
}
