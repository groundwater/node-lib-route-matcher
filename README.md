# Routes.js

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
