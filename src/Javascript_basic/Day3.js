//Task 1-Destructing
const laptop = {
    model: "hp",
    price: 1000,
    color: "silver"
};

const {model,price,color}=laptop;

console.log(model);
console.log(price);
console.log(color);

//Task 2- Spread Operator
const colour = ["blue","green"];
const newcolour=[...colour,"red"];

console.log(newcolour);


//Task 3-Ternary Operator
const marks= 100;
const result = marks>=75 ? "pass" : "fail";
console.log(result);


//Challenge-Ternary Operator 

const user={
    name:"Shambhavi",
    isLoggedIn: true
};

const userStatus=user.isLoggedIn?`Welcome ${user.name}`: "Please Log In";

console.log(userStatus);
