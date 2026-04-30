const head = document.getElementById("heading");
const button1=document.getElementById("but");
const text1=document.getElementById("text");
const val=text_2.value;
button1.addEventListener("click",()=>{
    console.log(text1.value);
});


const text_2=document.getElementById("text2");
const button2=document.getElementById("but2");
button2.addEventListener("click",()=>{
    const val=Number(text_2.value);
    if(val>18)
    {
        console.log("Adult");
    }
    else{
        console.log("Minor");
    }

});
