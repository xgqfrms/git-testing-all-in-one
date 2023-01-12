"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2023-01-12
 * @modified
 *
 * @description merge URL objects
 * @difficulty Easy
 * @time_complexity O(n)
 * @space_complexity O(n)
 * @augments
 * @example
 * @link https://www.cnblogs.com/xgqfrms/p/17046451.html
 * @link https://twitter.com/wesbos/status/1613223775796924417
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

const uo = new URL(`http://user:pass@example.com:8080/pathname?=query=xgqfrms&limit=10#hash`);
const ug = new URL(`https://google.com`);

function mergeURLs(uo, ug) {
  const {
    hash,
    password,
    pathname,
    port,
    search,
    username,
  } = uo;
  const {
    hostname,
    origin,
    protocol,
  } = ug;
  return {
    hostname,
    host: `${hostname}:${port}`,
    origin: `${origin}:${port}`,
    protocol,
    hash,
    href: `${origin}:${port}${pathname}${search}`,
    password,
    pathname,
    port,
    search,
    username,
  };
}

const test = mergeURLs(uo, ug);
console.log(`test =`, test);

// export default mergeURLs;
// export {
//   mergeURLs,
// };

/*
$  node merge-urls.js
test = {
  hostname: 'google.com',
  host: 'google.com:8080',
  origin: 'https://google.com:8080',
  protocol: 'https:',
  hash: '#hash',
  href: 'https://google.com:8080/pathname?=query=xgqfrms&limit=10',
  password: 'pass',
  pathname: '/pathname',
  port: '8080',
  search: '?=query=xgqfrms&limit=10',
  username: 'user'
}

*/
