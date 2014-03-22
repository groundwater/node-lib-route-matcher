"use strict";

function Matcher (require) {
  this.require = require;
  this.engine = null;
}

Matcher.prototype.add = function (route, handle) {
  this.engine.addRoute(route, handle);
};

Matcher.prototype.match = function (route) {
  var url = this.require.Url.parse(route, true);
  var obj = this.engine.match(url.pathname);

  // no match exists
  if (!obj) return null;

  var out = {
    handle : obj.fn,
    params : obj.params,
    query  : url.query,
  };
  return out;
};

Matcher.NewEmpty = function () {
  return new Matcher(this);
};

Matcher.New = function () {
  var matcher = this.NewEmpty();

  matcher.engine = this.Engine();

  return matcher;
};

function inject(deps) {
  return Object.create(Matcher, deps);
}

function defaults() {
  var deps = {
    Engine: {
      value: require('routes')
    },
    Url: {
      value: require('url')
    }
  };
  return inject(deps);
}

module.exports = function INIT(deps) {
  if (typeof deps === 'object') return inject(deps);
  else if (deps === undefined)  return defaults();
  else                          throw new Error('injection error');
};
