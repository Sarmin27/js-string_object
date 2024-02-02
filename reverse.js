// যদি কোন একটা অ্যারেক রিভার্স করতে চান তাহলে জাভাস্ক্রিপ্টের একটা বিল্ডিং ফাংশন আছে রিভার্স এটা ব্যবহার করতে পারেন
// let myArray = [1, 2, 3, 4, 5];
// let reversedArray = myArray.reverse();
// এবং আপনি যদি string রিভার্স করতে চান তাহলে সেটা এভাবে করতে পারেন
// let myString = "Hello";
// let reversedString = myString.split('').reverse().join('');



const sentence='i am learning Web Dev.';
//reverse result: '.veD beW gninrael ma i'
// array k loop korar jonno for of use kora jai .....
// donal
//d
// od
//nod
//anod
//lanod

//present +aager osob
//letter + reverse

//niyom-01
let reverse ='';
for(const letter of sentence){
    reverse=letter + reverse;
}
console.log(reverse);

//niyom-02
let rev=''
for(let i=0; i<sentence.length;i++){
    console.log(sentence[i]);
    const letter=sentence[i];
    rev=letter+rev;
}
console.log(rev);

//niyom-03

const reversed = sentence.split('').reverse().join('');
console.log(reversed);






