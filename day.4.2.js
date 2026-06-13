//DOM (HTML Document Object Model)
//1. JS HTML DOM [HTML DOM is a programming interface for HTML]
document.getElementById("demo").innerHTML = "Welcome";


//2. DOM Intro  [ When browser reads HTML: ]


//3.DOM Methods [ Methods are functions used to find or manipulate elements. ]
//1. getElementById()

let element = document.getElementById("title");
element.innerHTML = "JavaScript"
element.style.color = "blue";
document.getElementById("title").innerHTML = "Welcome";
console.log(element);



//2. getElementsByClassName()
let items = document.getElementsByClassName("text");
items[0].innerHTML = "hai"
items[1].style.color ="yellow"
items[1].style.fontFamily = "Arial";
items[0].style.backgroundColor = "red";
items[2].style.backgroundColor = "red";
items[1].style.fontSize = "30px";
console.log(items);



//3.getElementsByTagName()
let contents = document.getElementsByTagName("p");
contents[0].style.color = "green"



//4.getElementsByName()
let type = document.getElementsByName("username");
type[0].value = "Mansoor";



//5.querySelector()
// Returns the first matching element.
document.querySelector("#demo");
var b = document.querySelector("#titl")
b.style.color = "gray";
b.style.fontFamily = "Arial"




//6.querySelectorAll()
document.querySelectorAll(".box");


function show(){
   alert("Button Clicked");
}



let button = document.getElementById("btn");
button.addEventListener("click", function() {
    alert("Button Clicked!");
});


/*Common Events:

onclick
ondblclick
onmouseover
onmouseout
onkeydown
onchange
onsubmit
*/