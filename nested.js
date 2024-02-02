const collage={
    name:'vnc',
    class:[11, 12],
    events:['science fair', 'bijoy dibosh', '21 feb'],
    unique:{
        color:'blue',
        result:{
            gpa:5,
            merit:'top'

        }
        

    }
}
console.log(collage);
console.log(collage.name);
const srani=collage.class
console.log('class:',srani);
//nested
console.log(collage.unique.color);
console.log(collage.unique.result.merit);
const dibosh=collage.events[1]='16 dec';//value change
console.log(dibosh);
console.log(collage.events);
const updateResult=collage.unique.result.merit='top top best';//value change
console.log(updateResult);
console.log(collage.unique.result);
console.log(collage);
//delete
delete collage.class
console.log(collage);





