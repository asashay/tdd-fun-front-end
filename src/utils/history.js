import { createBrowserHistory } from 'history';
import qs from 'query-string';

export const history = createBrowserHistory({});

export const pushLink = (link, keepQueryParams = false) => {
  const { pathname, search } = history.location;

  if (pathname === link) {
    return;
  }

  if (keepQueryParams) {
    const { url } = qs.parseUrl(link);
    const linkParts = link.split('#');
    const anchor = link.includes('#')
      ? `#${linkParts[linkParts.length - 1]}`
      : '';

    const currentQueryParams = qs.parse(search);
    const newQueryParams = {
      ...currentQueryParams,
      ...qs.parse(qs.extract(link)),
    };

    history.push(`${url}?${qs.stringify(newQueryParams)}${anchor}`);
  } else {
    history.push(link);
  }
};
