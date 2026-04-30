//Task 1-forEach

const cities=["Pune","Mumbai","Banglore"];
cities.forEach((city)=>{
    console.log(city);
});

//Task 2-find()
const abc=[
    {
        name: "Shambhavi",
        id: 2,
        city: "Pune"
    },

    {
        name: "samarth",
        id: 2,
        city: "Fulda"

    },

    {
        name: "Sarthak",
        id: 3,
        city: "Amravati"

    }
];

const search= abc.find((pqr)=>pqr.id===2);
console.log(search);

//Task 3-some-checks if atleast one condition is true

const prices=[100,50,200,70];

const lowerRate=prices.some((value)=>value>100);

console.log(lowerRate);

//includes

const vegetables=["bhopla","vanga","kanda"];
console.log(vegetables.includes("vanga"));

//Challenge

const products=[
    {
        name:"milk",
        available: true
    },

    {
        name: "paper",
        available: false
    }
];

const availablity=products.find((bot)=>bot.available===false);
console.log(availablity.name);
