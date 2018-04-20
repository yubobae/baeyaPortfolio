let a = 10;
var zz= () =>20;
console.log(a);
var x = {a:1};
var xx = {b:2}
var slider = {x,xx};

var str = `bobae`;
var Question = `I'm ${str}`;

var bobae = require(`./bobae`);

// console.log(bobae);

define(['./bobae2', './bobae'], function(a,b){
    "use strict";

    console.log(a,b);
})