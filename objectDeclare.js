// rule-01 ...[an object literal]
const pen={brand:'econo', price:10,}
console.log(pen);

// rule-02...[new keyword]
//const pencil=new Object()
//console.log(pencil); //kono value na dile output:{}
const pencil=new Object({brand:'econo', price:10})
console.log(pencil);

// rule-03
// const rubber=Object.create({});
// console.log(rubber)
var orgObject={
    company:'ABC',
};
var rubber=Object.create(orgObject);
console.log(rubber);

