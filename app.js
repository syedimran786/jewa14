//! Named Function/Regular Function

/*function add(a,b)
{
    // console.log(a+b)
    return a+b;
}
 console.log(add(2, 3))

let res=add(5, 6);
console.log(res);

console.log(add);*/


//! Anonynous Function

/*let m1=function()
{
    console.log("Hello I am Anonynous function")
}
console.log(m1);
m1()*/

//! Function Expression

/*let m2=function add(a,b)
{
    console.log(a+b)
}
console.log(m2)
m2(2,3)

let m3=function(a,b)
{
    console.log(a+b)
}
console.log(m3)
m3(3,4)*/

//! Arrow Functions/Lamda Functions/Fat Arrow Function

/*let m3=function()
{
   return "Hello Jspiders";
}
console.log(m3)
console.log(m3())

let m3=()=>"Hello Jspiders";
console.log(m3)
console.log(m3())*/

//!-----------------------------------

/*let m3=function(a)
{
   return "Hello"+a;
}

console.log(m3(" Jspiders"));

let m3=a=>"Hello"+a;
console.log(m3(" Jspiders"))*/

//!------------------------------

/*let m3=function(a)
{
    console.log("Jspiders Java Training Center")
    return "Hello"+a;
}

console.log(m3(" Jspiders"));

let m3=a=>
{
    console.log("Jspiders Java Training Center");
    return "Hello"+a;
}

console.log(m3(" Jspiders"))*/


//! callback Function
/*function add(a,b)
{
    // console.log(a)
    // console.log(a())
    console.log(a(4)+b)
}

// add(2, 3);
// add(4, 7)
add(function(a)
{
    return a;
}, 3)*/

//! IIFE(Immediatly invoked function expression)/elf invoking function

(function()
{
    let a="jsp";
    console.log(a)
})()
