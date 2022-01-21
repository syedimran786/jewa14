//!HTML document as a tree structure wherein each node is an object representing 
//!a part of the document.


// let s="H";

// console.log(s)
// s+="E";//!s=s+E-->HE
// console.log(s)
// s+="L";//?s=s+L--->HE+L--->HEL
// console.log(s)

// s="E";
// s="L"
// console.log(s)

// let s="qspiders";
// console.log(s);

// let h1=document.getElementById("txt");
// console.log(h1)

// let m=document.getElementById("txt1")

// h1.innerHTML=s

// m.innerHTML=s

let students=
[
    {
        name:"dinga",
        age:25,
        marks:620,
        imgurl:"https://m.media-amazon.com/images/I/41P4Al+S3zL._AC_SY200_.jpg"
    },
    {
        name:"Sheela",
        age:18,
        marks:320,
        imgurl:"https://m.media-amazon.com/images/I/51NFeSAwNrL._AC_SY200_.jpg"
    },
    {name:"Ramu",age:27,marks:520,imgurl:"https://m.media-amazon.com/images/I/51kinNsVtTL._AC_SY200_.jpg"},
    {name:"raja",age:22,marks:320,imgurl:"https://m.media-amazon.com/images/I/51huVCoeBNL._AC_SY200_.jpg"},
    {name:"Rani",age:17,marks:120,imgurl:"https://m.media-amazon.com/images/I/31MFQIpYG+L._AC_SY200_.jpg"}

]

console.log(students)
// console.log(students[0])
// console.log(students[0].name)


let studentDiv=document.getElementById("stud");

for(let student of students)
{
    // console.log(student)
    // console.log(student.name)

    studentDiv.innerHTML+=
    `
        <div>
                <h1>Name: ${student.name}</h1>
                <img src=${student.imgurl} height=100 width=100>
                <p>Marks:${student.marks} <br/> Age:${student.age}</p>

        </div>
    `

}

