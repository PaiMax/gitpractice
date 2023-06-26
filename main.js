
document.addEventListener('submit', store);
 function store(e){
   
    
    let myobj= {
      name: document.getElementById('name').value ,
      email: document.getElementById('email').value

   }
   let myserial=JSON.stringify(myobj);
   localStorage.setItem('user',myserial);



   

 }