var form =document.getElementById('addForm');
var itemList=document.getElementById('items');
form.addEventListener('submit',additem);
itemList.addEventListener('click',removeItem);
function additem(e){
    e.preventDefault();
    var value=document.getElementById('item').value;
    var li =document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(value));
    
    
    var deletebtn=document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild( document.createTextNode('X'));
    li.appendChild(deletebtn);
    var editbtn=document.createElement('button');
    editbtn.className='btn btn-danger btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('edit'));
    li .appendChild(editbtn);
    itemList.appendChild(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
