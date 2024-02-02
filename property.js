//Access property value: 1.dot notation 2.bracket Notation

// const person={
//     Name:'Sarmin Sultana',
//     Age:23,
//     Profession:'Student',
//     Unmarried:true,
//     'fav places': ['Dhaka', 'Rajshahi', 'Naogaon']
// }
//console.log(person);
//.diye bar kora[kono ekta object er property dekhte chaile]
//console.log(person.Age); //dot notation >>dot symbol diye object er property er value access kora.

//bracket Notation
//third bracket diye  object er property er value access kora.
console.log(person['Name'])
// or store kore rakhar jonno
const nam=person['Name']
console.log(nam);

//sob jaigai dot notation use kora jaina ...
const person={
    Name:'Sarmin Sultana',
    Age:23,
    Profession:'Student',
    Unmarried:true,
    'fav places': ['Dhaka', 'Rajshahi', 'Naogaon']//ekhetre dot notation use kora jaina [space dile error asbe.]
}
// console.log(person.'fav places');//error


//sob jaigai bracket Notation use kora jai
 console.log(person['fav places']);//error solve //must use bracket Notation 



 