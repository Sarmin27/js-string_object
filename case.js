const subject='chemistry';
const book='Chemistry';

//string er tulona
if(subject.toLowerCase==book.toLowerCase){
    console.log('i am reading the book');
}
else{
    console.log('i am not reading the book');
}  //same hobena cz uppercase lowercase fact
const school='X GIRLS School'//mixed case
console.log(school);
console.log(school.toLowerCase());//uppercase theke lowercase e convert
console.log(school.toUpperCase());//convert uppercase


//string er tulona
const drink='water'; //
const liquid='water  '; //space 
// trim=2side e sorate chaile ...trimEnd=sesh e...trimStart=start e
// trim use hoi string er aage ar pore space thakle 
if(drink.trim==liquid.trim){      
    console.log('panir opor nam jibon')
}
else{
    console.log('pani pan korini');
}

