
document.addEventListener('submit', store);

function store(e){
   e.preventDefault(); 
   
    
    let myobj= {
      name: document.getElementById('name').value ,
      email: document.getElementById('email').value

   }
   let butn=document.createElement('input');
   butn.type='Button';
   butn.value='Delete';
   let myserial=JSON.stringify(myobj);
   localStorage.setItem(document.getElementById('email').value,myserial);
   let list=document.createElement('li');
   let name=document.createTextNode(document.getElementById('name').value+'-');
   let email=document.createTextNode(document.getElementById('email').value);
   list.append(name,email);
   list.append(butn);
   let li=document.getElementById('users');
   li.appendChild(list);
   butn.onclick=deleteuser;
   function deleteuser(){
    list.remove();
   }
   






   

 }