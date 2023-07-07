const myform = document.getElementById('my-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.querySelector("#email");
    const phoneInput= document.querySelector('#phonenumber');
    const userList = document.querySelector("#users");
    
    myform.addEventListener("submit", onSubmit);
    
    function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === "" || emailInput.value === ""){
        alert('Please fill all details')
    } 
    else {

        const userDetails = {
            Name: nameInput.value,
            Email: emailInput.value,
            Number: phoneInput.value
        }
        var id;
        axios.post('https://crudcrud.com/api/2405a8a8a6214630ba0c3484866ada3a/userdata',userDetails)
        .then((response)=>{console.log(response)
        id=response.data._id
        console.log(id);
        console.log(typeof response.data._id);
    })
        .catch((err)=>console.log(err));
        //axios.get(`https://crudcrud.com/api/2405a8a8a6214630ba0c3484866ada3a/userdata/${id}`)
        //.then((response)=>{
            
            //let seri = JSON.stringify(response);
            //localStorage.setItem(userDetails.Email, seri);

        //})

        

        showUsersOnScreen(userDetails);
        nameInput.value="";
        emailInput.value=""; 
        phoneInput.value="";
    }
}
/*window.addEventListener("DOMContentLoaded", () => {
Object.keys(localStorage).forEach((key) => {
    const stringifiedDetails = localStorage.getItem(key);
    const details = JSON.parse(stringifiedDetails);
    showUsersOnScreen(details);
})
})*/

function showUsersOnScreen(user) {
    
const parentNode=document.getElementById("users");

const childHTML=  `<li id=${user.Email}> ${user.Name} : ${user.Email} : ${user.Number}
<button onclick=deleteUser("${user.Email}")> Delete User </button> 
<button onclick=editDetails("${user.Email}","${user.Name}", "${user.Number}")>Edit Details </button>
</li>`

parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editDetails(email,name,phonenumber) {
    document.getElementById('email').value = email;
    document.getElementById('name').value = name;
    document.getElementById('phonenumber').value= phonenumber;
    deleteUser(email);
}

function deleteUser(email){
    localStorage.removeItem(email);
    removeUserFromScreen(email);
}
function removeUserFromScreen(email) {
    const parentNode = document.getElementById('users');
    const deleteChild = document.getElementById(email);
        if (deleteChild) {
    parentNode.removeChild(deleteChild);
 }
}
