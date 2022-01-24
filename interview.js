
//! Difference between undefined and null
/*let a=20;
let b='jspiders';
let c=true;
let d=null;
let e;

console.log(`${a} : ${typeof a}`);
console.log(`${b} : ${typeof b}`);
console.log(`${c} : ${typeof c}`);
console.log(`${d} : ${typeof d}`);
console.log(`${e} : ${typeof e}`);*/

//! Difference between == and ===

/*let a=20;
let b="20";
let c=20;

console.log(`A:${a} ---> ${typeof a}`); 
console.log(`B:${b} ---> ${typeof b}`);
console.log(`C:${c} ---> ${typeof c}`);*/

/*if(a==b)
{
    console.log(true);
}
else
{
    console.log(false);
}*/

//! 20==="20"---(true)
//! number===string----(false)

/*if(a===b)
{
    console.log(true);
}
else
{
    console.log(false);
}

if(b==="20")
{
    console.log(true);
}
else
{
    console.log(false);
}*/

//! Hoisting is the process of moving variable declaration and function declaration to the top of its scope before execution of the program

//! var a;

/*console.log(a);
var a=20; //! Scope starts here
console.log(a);


m1()

function m1()
{
    console.log("hello I am m1 func()");
}



console.log(b);
let b="jsp";

console.log(b);*/

//! closure
//! A closure is a function having access to the parent scope, even after the parent function has closed

function valid()
{
    let a=2;

    return (b)=>
    {
        console.log(a+b);
    }
}

let res=valid();
console.log(res);
res(3)