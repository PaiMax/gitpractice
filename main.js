
document.addEventListener('submit', store);

function store(e){
   e.preventDefault(); 
   
    
    let myobj= {
      name: document.getElementById('name').value ,
      email: document.getElementById('email').value

   }
   let myserial=JSON.stringify(myobj);
   localStorage.setItem(document.getElementById('email').value,myserial);
   let list=document.createElement('li');
   let name=document.createTextNode(document.getElementById('name').value+'-');
   let email=document.createTextNode(document.getElementById('email').value);
   console.log(name);
   console.log(email);
   
   
   
   
   list.append(name,email);
   let li=document.getElementById('users');
   li.appendChild(list);




   

 }