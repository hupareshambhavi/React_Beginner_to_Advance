
//Task 1- Arrays
const foods=["Misal","Pavbhaji","Dosa"]
console.log(foods[0]);
console.log(foods[2]);

//Task 2-Objects
const myobject={
    name:"Shambhavi",
    age:24,
    university:"Hochschule Fulda",
    dream_job: "Full stack developer"

};
console.log(myobject.name);
console.log(myobject.age);
console.log(myobject.university);
console.log(myobject.dream_job);

console.log(myobject);

//Task 3-Array of Objects-map

const products=[
    {
    name: "Brocolli",
    colour: "Green"
    },

    {
    name: "Bag",
    colour: "Blue"
    },

    {
        name: "jacket",
        colour: "pink"
    }

];

products.map((pro)=>{
    console.log(pro)
});

//Challenge-filter

const marks = [45, 80, 32, 90, 60];

const pass= marks.filter((marks)=>marks>=50);
console.log(pass);