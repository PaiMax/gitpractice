const posts =[];
function createpost(post){
    return new Promise((resolve,reject)=>{
        posts.push(post);
        resolve(post);



    })
}
function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        const now =new Date();
        resolve(now);
    })      
}
function deletepost(){
    return new Promise((resolve,reject)=>{
        posts.pop();
        resolve();

    })

}
function printpost(){
    return new Promise((resolve,reject)=>{
        setTimeout( function(){
            console.log(posts)
            resolve();
        },2000);
        

    })
}
    
    
    
    const promise1 = createpost('post1');
    const promise2=updateLastUserActivityTime();
    const promise3 = createpost('post2');
    const promise4=updateLastUserActivityTime();
    


Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values))
const promise5 =deletepost();
const promise6=printpost();
Promise.all([promise5,promise6]);
