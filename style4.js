var form =document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
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
function filterItems(e){
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';

        }
        else{
            item.style.display='none';

        }



    });
}

