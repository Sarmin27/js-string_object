//2 ta string k jora korte chaile...
// another way 
const first='Sarmin';
const last='Sultana';
//const fullname=first+last;//SarminSultana
//const fullname=first +''+ last;//SarminSultana
const fullname=first +' '+ last;//space  [Sarmin Sultana]
console.log(fullname);

const fullName2=first.concat(' ').concat(last);//Sarmin Sultana
console.log(fullName2);


//---------------------includes------------------
console.log(last.includes('n'));//true

