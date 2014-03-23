# Routes.js

[![Build Status](https://travis-ci.org/groundwater/node-lib-route-matcher.svg?branch=master)](https://travis-ci.org/groundwater/node-lib-route-matcher)

## install

```bash
npm install --save lib-route-matcher
```

## usage

```javascript
var route = require('lib-route-matcher')().New();

route.add('/users/:name', HANDLE);
route.match('/users/bob?sort=desc');
// {
//   handle: HANDLE,
//   params: {
//     name: 'bob'
//   },
//   query: {
//     sort: 'desc'
//   }
// }
```

Where `HANDLE` can be a function, a token, or anything you like.

## see also

- [lib-route-generator](https://github.com/groundwater/node-lib-route-generator)
  
