const sqr=(x)=>console.log(x*x);

sqr(3);


export const name="Shambhavi";


const processAge = (age,callback)=>{
      callback(age);
};

processAge(5,(userage)=>{
    console.log(userage);
});


const ifAdmin=true;

if(ifAdmin){
    console.log("Logged In");
}
else{
    console.log("Please Log-in");
}

const user=()=>({
    name:"Shambhavi Santosh Hupare",
    university: "Hochschule Fulda"
});

console.log(user());