//object er property name dekhabena just name gula dekhabe e khetre ...
//object.value
const computer={
    brand:'lenovo',
    price: 40000,
    processor:'intel',
    monitor:'hp'
}
console.log(computer);
const values=Object.values(computer);
console.log(values); //output: [ 'lenovo', 40000, 'intel', 'hp' ]