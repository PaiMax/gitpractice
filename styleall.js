var a=document.querySelectorAll('li');
a[1].style.backgroundColor='green';
var b=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<b.length;i++){
    b[i].style.backgroundColor='green';
}