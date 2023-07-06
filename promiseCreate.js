console.log('person1 : shows ticket');
console.log('person2 : shows ticket');
const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve('ticket');
    },3000)
});
 
const getpopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`)); 

});
getbutter=getpopcorn.then((t)=>{ 
    console.log('husband: we should go in');
    console.log('wife: no i need butter');
    return new Promise((resolve,reject)=>resolve(`${t} butter`)); 


})
getbutter.then((t)=>console.log(t));
console.log('person4: shows ticket');
console.log('person5: shows ticket');

