var test = require('tap').test;
var Matcher = require('../index.js')();

test("multiple routes", function (t) {
  var m = Matcher.New();

  m.add('/a', 'A');
  m.add('/b', 'B');

  var A = m.match('/a');
  t.equal(A.handle, 'A');

  var B = m.match('/b');
  t.equal(B.handle, 'B');

  t.end();
});

test("first defined route wins", function (t) {
  var m = Matcher.New();

  m.add('/:key', 'A');
  m.add('/:val', 'B');

  var A = m.match('/a');
  t.equal(A.handle, 'A');

  var B = m.match('/b');
  t.equal(B.handle, 'A');

  t.end();
});

test("nesting okay", function (t) {
  var m = Matcher.New();

  m.add('/:key', 'A');
  m.add('/b/:val', 'B');

  var A = m.match('/a');
  t.equal(A.handle, 'A');

  var B = m.match('/b/a');
  t.equal(B.handle, 'B');

  t.end();
});
