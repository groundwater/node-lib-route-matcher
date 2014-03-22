var test = require('tap').test;
var Matcher = require('../index.js')();

test("root route", function (t) {
  var m = Matcher.New();

  m.add('/', 'root');

  var match = m.match('/')
  t.deepEqual(match.params, {});
  t.deepEqual(match.query, {});
  t.equal(match.handle, 'root');
  t.end();
});

test("nonexistent route", function (t) {
  var m = Matcher.New();

  m.add('/', 'root');

  var match = m.match('/hi')
  t.equal(match, null);
  t.end();
});

test("do not over-capture route", function (t) {
  var m = Matcher.New();

  m.add('/:name', 'root');

  var match = m.match('/hi/bye')
  t.equal(match, null);
  t.end();
});

test("simple route match", function (t) {
  var m = Matcher.New();

  m.add('/users/:name', 'getUsers');

  var match = m.match('/users/bob?sort=desc')
  t.deepEqual(match.params, {name: 'bob'});
  t.deepEqual(match.query, {sort: 'desc'});
  t.equal(match.handle, 'getUsers');
  t.end();
});

test("two parameter match", function (t) {
  var m = Matcher.New();

  m.add('/users/:name/age/:age', 'getAge');

  var match = m.match('/users/tom/age/20?limit=100')
  t.deepEqual(match.params, {name: 'tom', age: '20'});
  t.deepEqual(match.query, {limit: '100'});
  t.equal(match.handle, 'getAge');
  t.end();
});

test("no query", function (t) {
  var m = Matcher.New();

  m.add('/:id', 'getAge');

  var match = m.match('/bob');

  t.deepEqual(match.query, {});
  t.end();
});
