//------------------------------value --------------------
const person={
    Name:'Sarmin Sultana',
    Age:23,
    Profession:'Student',
    Unmarried:true,
    'fav places': ['Dhaka', 'Rajshahi', 'Naogaon']
}
//value update modify er khetre
console.log(person);
//person.Age=24;
//console.log(person) ;
person['Age']=24;
console.log(person);
