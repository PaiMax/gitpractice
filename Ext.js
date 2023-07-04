document.getElementById('Add').addEventListener('click',add);
document.getElementById('list').addEventListener('click',remove);


 function add(e){
    
    e.preventDefault();
    console.log("hi");
    var list=document.querySelector('#list');
    let amount=document.querySelector('#amount').value;
    let description=document.querySelector('#des').value;
    let cat=document.querySelector('#category').value;
    var li =document.createElement('li');
    let obj={
        amount1:document.querySelector('#amount').value,
        dis:document.querySelector('#des').value,
        category:document.querySelector('#category').value
    }
    let myserial=JSON.stringify(obj);
    localStorage.setItem(amount,myserial);
    li.className='listofExpense';
    li.textContent=`${amount}-${description}-${cat}`;
    
    
    var delbtn=document.createElement('button');
    delbtn.className='Delete';
    delbtn.appendChild(document.createTextNode('Delete expense'));
    li.appendChild(delbtn);
    var editbtn=document.createElement('button');
    editbtn.appendChild(document.createTextNode('Edit Expense'));
    editbtn.className='edit';
    li.appendChild(editbtn);
    list.appendChild(li);
}
function remove(e){
    console.log("delete");
    if(e.target.classList.contains('Delete')){
        if(confirm('Are you sure?')){
            var lo=e.target.parentElement;
            list.removeChild(lo);
        }
    }

}
