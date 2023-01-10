const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const birthday = document.getElementById("birthday");

var name = {'fname, lname'};
localStorage.setItem('name', json.stringify(name));
var retrieveobject = json.parse (localStorage.getItem('name'))
console.log('retrieveobject', retrieveobject);