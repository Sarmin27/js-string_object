//-------------------------------string[sequence of charecture]---------------------
// string declare 
const country='Bangladesh';
const division="Rajshahi"
const district=`Naogaon`; //string
const thana=new String('Niamatpur');
console.log(typeof thana);//object
console.log(thana);
//---------------------------array te jemon length hisab korte pari string e o korte pari.
// array:
const num=[10, 20, 30, 40, 50];
console.log(num.length);
console.log(num[0]);//index
//string
const capital='dhaka'; //length=5
console.log(capital);
console.log(capital.length);//ekhetre lenght bolte sudu letter count kore ta nah latter er majhe jodi kono space thake tahole seta o count kore.
const capi='dha ka';//length=6
console.log(capi.length);

// array te index diye oi index er element nite  pari string e o kora jai 
console.log(capital[0]);//d
console.log(capital[1]);//h



// kichuta same array ar string but puropuri same na 
// array te index er man change kora jai for example.. 
const numbers=[10, 20, 30, 40, 50, 60, 70];
console.log(numbers);
numbers[2]=15;
console.log(numbers);


// string er khetre emn hoi na 
capital[0]='R';
console.log(capital);

//string is immutable(not changeable)
//array is mutable(you can change the array element)

    