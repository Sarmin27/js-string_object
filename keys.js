//object keys:
const computer={
    brand:'lenovo',
    price: 40000,
    processor:'intel',
    monitor:'hp'
}
console.log(computer);//output: { brand: 'lenovo', price: 40000, processor: 'intel', monitor: 'hp' }
// all property show korar jonno[object er moddhe ki ki property ache..] 
// const keys=Object.keys(computer);
// console.log(keys); // output: [ 'brand', 'price', 'processor', 'monitor' ]
const keys=Object.keys(computer);//computer=object name
console.log(keys);// keys is a function 