
//! Code to validate empty field
/*function formValidator()
{
    let user=document.getElementById("user");
    let errorMessage=document.getElementById("errorMessage");

    if(user.value.trim()=="")
    {
        // alert("Username is mandatory");
        errorMessage.style.visibility="visible"
        return false;
    }
    else
    {
        alert("Username Accepted");
        return true;
    }
}*/

//! Code to validate Alphabets

//! [A-Z],[a-z],[0-9],[%&*#@],[A-Za-z],[a-z0-9],[A-Z0-9],[A-Za-z0-9]

/*function formValidator()
{
    let user=document.getElementById("user");
    let reg=/^[A-Za-z]+$/g;
    let res=reg.test(user.value)
    // console.log(res);
    let errorMessage=document.getElementById("errorMessage");

    if(res==true)
    {
        alert("username Accepted")
        return true;
    }
    else
    {
        errorMessage.style.visibility="visible"
       return false; 
    }


}*/

//! Code to Validate Indian Mobiloe Number 
//! 9751771294
function formValidator()
{
    let user=document.getElementById("user");
    let reg=/^[6-9][0-9]{9}$/g;
    let res=reg.test(user.value)
    // console.log(res);
    let errorMessage=document.getElementById("errorMessage");

    if(res==true)
    {
        alert("Mobile Accepted")
        return true;
    }
    else
    {
        errorMessage.style.visibility="visible"
       return false; 
    }


}


