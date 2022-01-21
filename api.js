// async function gitusers()
// {
//     let myusers=await fetch("https://api.github.com/users");

//     let users=await myusers.json();
//     console.log(myusers);
//     console.log(users);

//     let count=0;
//     let table=document.getElementById("user")
   
   
//         for (let user of users) 
//         {
//             console.log(user.login);
    
//            if(count<=4)
//            {
//             table.innerHTML+=
//             `
//             <tr>
//                 <td>${user.id}</td>
//                 <td>${user.login}</td>
//                 <td>
//                     <img src=${user.avatar_url} height=200 width=200>
//                 </td>
                
//             </tr>
//             `
//            }

//            count++;
        
//     }
// }


// gitusers()

//! only perticular user data

async function gituser()
{
    let loginName=document.getElementById("loginName").value;
    let myuser=await fetch(`https://api.github.com/users/${loginName}`);

    let user=await myuser.json();
    console.log(myuser);
    console.log(user);

  
    let table=document.getElementById("user")
    
    let {login,id,avatar_url}=user;
   
        
            table.innerHTML+=
            `
            <tr>
                <td>${id}</td>
                <td>${login}</td>
                <td>
                    <img src=${avatar_url} height=200 width=200>
                </td>
                
            </tr>
            `
           
        
}


