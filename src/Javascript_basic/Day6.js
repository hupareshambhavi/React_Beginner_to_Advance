
//Task 1- console log the data 
// fetch("https://jsonplaceholder.typicode.com/users").then((response)=>response.json()).then((data)=>{
//     data.map((users)=>{
//         console.log(users.name);

//     });
// });


//Task 2= Print the names
// const getUsers=async()=>{
//     const dataUsers=await fetch("https://jsonplaceholder.typicode.com/users");
//     const abc=await dataUsers.json();
//     abc.map((def)=>{
//         const li=document.createElement("li");
//         li.innerText=def.name;
//         console.log(document.getElementById("usernames"));
//         document.getElementById("usernames").appendChild(li);
//     });
// };

// document.addEventListener("DOMContentLoaded", () => {
//     getUsers();
// });


//Task 3-Load button should load the names
// const loadnames=async()=>{
//     const getjson= await fetch("https://jsonplaceholder.typicode.com/users");
//     const datajson=await getjson.json();
//     const pqr=document.getElementById("ldbt");
//     pqr.addEventListener("click",()=>{
//         const ul=document.getElementById("usernames");
//         ul.innerText="";
//         datajson.map((user)=>{
//             const li=document.createElement("li");
//             li.innerText=user.name;
//             document.getElementById("usernames").appendChild(li);


//         })

//     });

// }

// loadnames();


//Challenge - filter the name of person who lives in a particular city
const citynames=async()=>{
    const dataraw=await fetch("https://jsonplaceholder.typicode.com/users");
    const datajson=await dataraw.json();
    const loadbutton=document.getElementById("ldbt");
    loadbutton.addEventListener("click",()=>{
        const ul = document.getElementById("usernames");
        ul.innerHTML = ""; // clear old data
        const abc= datajson.filter((user)=>user.address.city==="South Christy");
    abc.map((user)=>{
    const li=document.createElement("li");
    li.innerText=user.name;
    ul.appendChild(li);

    });
    

    });

};

citynames();

