//for of:use array
//for in:use object

const mobile={
    brand:'samsung',
    price:25000,
    color:'black',
    camera:'12mp'
}
// console.log(mobile);
// for(const phone in mobile){  //object e for in use hoi
//     console.log(phone);
//     console.log(mobile[phone])
// }


// another system 

const keys=Object.keys(mobile);
console.log(keys);
for(const key of keys){ //keys use korar jonno object ta array te convert hoye geche tai for of use kora hoyeche
        console.log(key);
        console.log(key, ':',mobile[key])//value gula show korar jonno
    }



