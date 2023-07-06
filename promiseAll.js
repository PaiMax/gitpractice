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
        
            console.log(posts)
            resolve();
       
        

    })
}
const par=async ()=>{
    let post1=await createpost('post1');
    console.log(post1);
    let useractivityupdate1= await updateLastUserActivityTime();
    console.log(useractivityupdate1);
    let post2=await createpost('post2');
    console.log(post2);
    let useractivityupdate2= await updateLastUserActivityTime();
    console.log(useractivityupdate2);


    
    let delet=await deletepost();
    let print=await printpost();





   
}
par();



    
    
    
   
