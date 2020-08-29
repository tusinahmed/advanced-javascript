"use strict";

var students = [{
  id: 21,
  name: 'omar sunny'
}, {
  id: 31,
  name: 'mannaaa'
}, {
  id: 41,
  name: 'moyouri'
}, {
  id: 71,
  name: 'deepjol'
}];
var nmaes = students.map(function (x) {
  return x.name;
});
var id = students.map(function (s) {
  return s.id;
});
console.log(nmaes, id);
var bigger = students.filter(function (s) {
  return s.id > 40;
});
console.log(bigger);