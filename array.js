/*let a=20;
let b=40;
let c=30;
let d=10;

let arr=[20,40,30,10];

let a=["jsp","Qsp",22,66,true,null,undefined,"Raju","Shaam"];//9-1=8
let b=[22,33,44]
console.log(a);
console.log(a[0]);
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
console.log(a[8])

for(let element of a)//! Stores Elements
{
    console.log(element);
}
console.log("------------------------------")

for(let index in a)//! Stores Index values
{
    console.log(index);
}*/


/*let colors=["red","pink","orange","yellow"];
console.log(colors);
console.log(colors.length)

colors[4]="green";
console.log(colors)
console.log(colors.length);

colors[7]="blue";
console.log(colors);

console.log(colors[5])
console.log(colors[6])*/


let a=['jsp','qsp','psp','jsp','raju','jsp','qsp'];

console.log(a)
console.log(a.length);

//!push
// let res=a.push("red","pink","orange");
// console.log(a);
// console.log(res)

//!unshift
// let res1=a.unshift('yellow','orange');
// console.log(a);
// console.log(res1)

//!pop
// let res2=a.pop();
// console.log(a)
// console.log(res2)

//!shift
// let res3=a.shift()
// console.log(a)
// console.log(res3)

//! splice

// let res4=a.splice(2,2,'yellow','orange','pink');
// console.log(a)
// console.log(res4)
// let res5=a.splice(1,3,'dinga');
// console.log(a);
// console.log(res5)
// let res6=a.splice(3,0,"dinga");
// console.log(a);
// console.log(res6)
// let res7=a.splice(4,3);
// console.log(a)
// console.log(res7)

//! slice
// console.log(a.slice(2,5))
// console.log(a.slice(1,4))
// console.log(a.slice(2))
// console.log(a.slice(4))
// console.log(a)
// console.log(a.slice(2,-3))

//! includes
// console.log(a.includes('qsp'))
// console.log(a.includes('psp'))
// console.log(a.includes('dinga'))
// console.log(a.includes('ramu'))
// console.log(a.includes('jsp'))



//!         0      1    2      3    4       5     6
// let a=['jsp','qsp','psp','jsp','raju','jsp','qsp'];
//!         -7    -6    -5    -4    -3     -2     -1

//! indexOf

// console.log(a.indexOf('raju'))
// console.log(a.indexOf('ramu'))
// console.log(a.indexOf('jsp'))
// console.log(a.indexOf('qsp'))
// console.log(a.indexOf('jsp',4))

// for(let i in a)
// {
//     if(a[i]=="jsp")
//     {
//         console.log(a.indexOf(a[i],i))
//     }
// }


//!lastIndexof

// console.log(a.lastIndexOf('jsp'))
// console.log(a.lastIndexOf('qsp'))
// console.log(a.lastIndexOf('dinga'))
// let newArray=Array.from(new Set(a));
// console.log(newArray)

// console.log(Array.isArray(a))
// console.log(Array.isArray(newArray))

console.log(a.reverse())
console.log(a)