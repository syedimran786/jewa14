// function togglePassword()
// {
//     let pass=document.getElementById("inppass");
//     let check=document.getElementById("inpcheck");
//     let eye=document.getElementById("icon")

//     // console.log(pass)
//     // console.log(check)
//     // console.log(pass.type)
//     // console.log(pass.placeholder)
//     // console.log(check.type)
//     // console.log(check.checked)

//     //! toogle password logic
    
//     if(pass.type=="password")
//     {
//         pass.type="text";
//         eye.className="fas fa-eye-slash"
//     }
//     else
//     {
//         pass.type="password";
//         eye.className="fas fa-eye";
//     }

// }

//!onmouseove and onmouseout code

let pass=document.getElementById("inppass");
let check=document.getElementById("inpcheck");
let eye=document.getElementById("icon")

function showPassword()
{
    pass.type="text";
    eye.className="fas fa-eye-slash"
}

function hidePassword()
{
    pass.type="password";
    eye.className="fas fa-eye"
}