const address='Rajshahi'
const part=address.slice(2,4);//2=start,4=before end. //js
console.log(part);

// split: choto choto vage vag kora
const sentence='i am a good and hardworking person.'
console.log(sentence.split()); //[ 'i am a good and hardworking person' ]
console.log(sentence.split(''))/*[
    'i', ' ', 'a', 'm', ' ', 'a', ' ',
    'g', 'o', 'o', 'd', ' ', 'a', 'n',
    'd', ' ', 'h', 'a', 'r', 'd', 'w',
    'o', 'r', 'k', 'i', 'n', 'g', ' ',
    'p', 'e', 'r', 's', 'o', 'n'
  ]*/
console.log(sentence.split(' '))//gap deyar pore
/* [ 'i', 'am', 'a', 'good', 'and', 'hardworking', 'person' ]  */
console.log(sentence.split('a'))//jkhane jkhane a pabe sekhane vag korbe.
/* [ 'i ', 'm ', ' good ', 'nd h', 'rdworking person' ] */
 
const friends='Rahim,karim,kamal,kader,kisob';
// alada alada upadan hisebe array te convert korte chaile..
const frnd=friends.split(',');//
console.log(frnd);//[ 'Rahim', 'karim', 'kamal', 'kader', 'kisob' ]
const realFriend= [ 'Rahim', 'karim', 'kamal', 'kader', 'kisob' ];
console.log(realFriend.join()); //Rahim,karim,kamal,kader,kisob   //array.join
console.log(realFriend.join('|'));//Rahim|karim|kamal|kader|kisob

const fnd='i am a good student'
console.log(fnd.split());[ 'i am a good student' ]
console.log(fnd.split(''));
/*
[
  'i', ' ', 'a', 'm', ' ',
  'a', ' ', 'g', 'o', 'o',
  'd', ' ', 's', 't', 'u',
  'd', 'e', 'n', 't', '.'
]
*/
console.log(fnd.split(' '));//space //[ 'i', 'am', 'a', 'good', 'student.' ]
console.log(fnd.split(','));// [ 'i am a good student.' ]     