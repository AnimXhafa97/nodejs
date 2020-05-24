//normal function
// function sayHi() {
//   console.log('hi')
// }
//
// sayHi()

// function callFunction(fun) {
//   fun()
// }
//
// //function expression
//
// var sayBye = function() {
//   console.log('bye')
// }
//
// callFunction(sayBye)

// var stuff = require('./stuff')
//
// console.log(stuff.counter(['stuff', 'more stuff']));
// console.log(stuff.adder(2,3));
// console.log(stuff.adder(2,stuff.pi));

// var events = require('events')
// var myEmitter = new events.EventEmitter()
//
// myEmitter.on('someEvent', function(msg) {
//   console.log(msg);
// })
//
// myEmitter.emit('someEvent', 'the event was emitted successfully')

// var events = require('events')
// var util = require('util')
//
// var Person = function(name) {
//   this.name = name
// }
//
// util.inherits(Person, events.EventEmitter)
//
// var james = new Person('james')
// var mary = new Person('mary')
// var ryu = new Person('ryu')
//
// var people = [james, mary, ryu]
//
// people.forEach(function(person) {
//   person.on('speak', function(msg) {
//     console.log(person.name + ' said: ' + msg);
//   })
// })
//
// james.emit('speak', 'hey dudes')
// ryu.emit('speak', 'Sup dickcheese')

// var fs = require('fs') //set variable name equal to module name when requiring modules
//
// var read = fs.readFileSync('read.txt', 'utf8') //will fully read the file before continuing to execute code
// fs.writeFileSync('writeMe.txt', read)

var fs = require('fs') //set variable name equal to module name when requiring modules

//this is async, so log test is executed first
fs.readFile('read.txt', 'utf8', function(err, data) {
  console.log(data);
})

console.log('test');
