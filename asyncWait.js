console.log('person1: shows ticket');
console.log('person2: shows ticket');
 
const premovie = async () =>{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000);
    });
    const getpopcorn=new Promise((resolve,reject)=> resolve( 'popcorn'));
    const getbutter=new Promise((resolve,reject)=> resolve('butter' ));
    const getColdDrinks=new Promise((resolve,reject)=> resolve('cold drinks' ));

    let ticket= await promiseWifeBringingTicks;
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    let popcorn=await getpopcorn;
    console.log('husband: we got popcorn');
    console.log('husband: we should go in');
    console.log('wife: no i need butter');
    let butter=await getbutter;
    console.log(` i got some ${butter}`);
    let drink=await getColdDrinks;
    console.log(`we got ${drink}`);

    return ticket;

     



}
premovie().then((m)=> console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');