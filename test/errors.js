var test = require('tap').test;
var Matcher = require('../index.js')();

test("null handle is an error", function (t) {
  var m = Matcher.New();

  t.throws(function () {
    m.add('/', null);
  });

  t.end();
});

test("null route is an error", function (t) {
  var m = Matcher.New();

  m.add('/', 'A');
  t.throws(function () {
    m.match();
  });

  t.end();
});
