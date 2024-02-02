//js-object-tasks
/*Task-1
Access the golden rod color value in output.

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
*/

const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
console.log(colors);
console.log(colors["golden rod"]);

/*
Task-2
For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
*/
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
console.log(car);
// car.passengercapacity=5;

// console.log(car);

car['passenger capacity'] = 5; //add
console.log(car)

/*
Task-3
Display the physics marks as output.

const student = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
*/
const students = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log(students.physics.marks);

/*
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
*/
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// const keys=Object.keys(student);
// console.log(keys);
// const len=Object.keys(student).length;
// console.log('The number of properties:',len)

/*
Task-5 (Hard)
Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:


key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean
*/
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
const keys=Object.keys(myObject);
console.log( keys);
for(const my of keys){
    console.log('key:',my,'| type:',typeof(myObject[my]));
}
