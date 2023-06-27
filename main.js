
document.addEventListener('submit', store);

function store(e){
   e.preventDefault(); 
   
    
    let myobj= {
      name: document.getElementById('name').value ,
      email: document.getElementById('email').value

   }
   let butn=document.createElement('input');
   let edit=document.createElement('input');
   butn.type='Button';
   butn.value='Delete';
   edit.value='edit';
   edit.type='Button';
   let myserial=JSON.stringify(myobj);
   localStorage.setItem(document.getElementById('email').value,myserial);
   let list=document.createElement('li');
   let name=document.createTextNode(document.getElementById('name').value+'-');
   let email=document.createTextNode(document.getElementById('email').value);
   list.append(name,email);
   list.append(butn);
   list.append(edit);``
   let li=document.getElementById('users');
   li.appendChild(list);
   butn.onclick=deleteuser;
   edit.onclick=edituser;
   function deleteuser(){
    list.remove();
    localStorage.removeItem(document.getElementById('email').value);
   }
   function edituser(){
    localStorage.removeItem(document.getElementById('email').value);
    list.remove();
    document.getElementById('name').value=myobj.name;
    document.getElementById('email').value=myobj.email;


   }
   






   

 }