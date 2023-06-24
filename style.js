var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor='green';
items[1].textContent='item 2';
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';

}
