const myform = document.getElementById('my-form');
const nameInput = document.getElementById('name');
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector('#phonenumber');
const userList = document.querySelector("#users");
var id;
var flag = 0;
const userIncrocs = {};
var userId;

myform.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    alert('Please fill all details');
  } else {
    const userDetails = {
      Name: nameInput.value,
      Email: emailInput.value,
      Number: phoneInput.value
    };

    if (flag === 1) {
        flag = 0;
      putRequest(userDetails,userId);
      
    } else {
      axios.post('https://crudcrud.com/api/1418909fd0fe4a2bb6c1936041f395a0/userdata', userDetails)
        .then((response) => {
          console.log(response);
          showUsersOnScreen(response.data);
        })
        .catch((err) => console.log(err));
    }

    //showUsersOnScreen(userDetails);
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
  }
}

function showUsersOnScreen(user) {
  const parentNode = document.getElementById("users");

  const childHTML = `
    <li id=${user.Email}> ${user.Name} : ${user.Email} : ${user.Number}
      <button onclick=deleteUser("${user.Email}")> Delete User </button> 
      <button onclick=editDetails("${user.Email}","${user.Name}","${user.Number}","${user._id}")>Edit Details </button>
    </li>`;

  console.log(user.Number);
  parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

function editDetails(email,name,phonenumber,id) {
  console.log('hiiiii');
  document.getElementById('email').value = email;
  document.getElementById('name').value = name;
  document.getElementById('phonenumber').value = phonenumber;
  userId=id;
  flag = 1;
  
}

function deleteUser(email) {
  const idofuser = userIncrocs[email];
  axios.delete(`https://crudcrud.com/api/1418909fd0fe4a2bb6c1936041f395a0/userdata/${idofuser}`)
    .then((response) => console.log("user deleted"))
    .catch((error) => console.log(error));

  removeUserFromScreen(email);
}

function removeUserFromScreen(email) {
  const parentNode = document.getElementById('users');
  const deleteChild = document.getElementById(email);
  if (deleteChild) {
    parentNode.removeChild(deleteChild);
  }
}

function putRequest(user) {
  
  axios.put(`https://crudcrud.com/api/1418909fd0fe4a2bb6c1936041f395a0/userdata/${userId}`,user)
  .then((response) => console.log("edit successful"))
  .catch((err) => console.log(err));
}

window.addEventListener('DOMContentLoaded', () => {
  axios.get('https://crudcrud.com/api/1418909fd0fe4a2bb6c1936041f395a0/userdata')
    .then((response) => {
      console.log(response);

      for (var i = 0; i < response.data.length; i++) {
        userIncrocs[response.data[i].Email] = response.data[i]._id;
        showUsersOnScreen(response.data[i]);
      }
    })
    .catch((err) => console.log(err));
});
