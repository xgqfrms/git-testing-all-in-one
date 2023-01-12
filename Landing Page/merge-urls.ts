const uo = new URL(`http://user:pass@example.com:8080/pathname?=query=xgqfrms&limit=10#hash`);

const ug = new URL(`https://google.com`);

function mergeURL(uo, ug) {
  const {
    hash,
    href,
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



// https://twitter.com/wesbos/status/1613223775796924417