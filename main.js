
document.addEventListener('submit', store);
 function store(e){
    var name =document.getElementById('name').value;
    var email=document.getElementById('email').value;
    localStorage.setItem('name',`${name}`);
    localStorage.setItem('email',`${email}`);

 }