//var sprice=document.getElementById('price');
//var product=document.getElementById('Product');
//var category=document.getElementById('category');
var element=document.getElementById('add');

console.log(element);
element.addEventListener("click",addToScreen);
function addToScreen(){
    console.log('inside');
    var category=document.getElementById('category');   
    var sprice=document.getElementById('price');
    var product=document.getElementById('Product');
    console.log(category.value);
    //if(category.value=='Food'){
        //console.log("hi");
        postmethod(sprice,product,category);
    //}
    //else if(category.value==='Electronics'){
        //addToElectronicsItems(sprice,product,category);
        
    //}
    //else if(category.value==='Skincare'){
        //addToSkincare(sprice,product,category);
        
    //}
    

}
function addToFoodItems(sprice,product,category,id){
    var newItem=document.createElement('li');
    var del=document.createElement('button');
    del.textContent='Delete';
    
    del.id="delete";
    del.onclick=function(){
        deleteproducfood(newItem,del,id);
    };
    newItem.textContent=`${sprice.value}-${product.value}-${category.value}`

    var targetPlace=document.getElementById('food');
    targetPlace.append(newItem,del);
    

}
function addToElectronicsItems(sprice,product,category,id){
    var newItem=document.createElement('li');
    var del=document.createElement('button');
    del.textContent='Delete';
    del.id="delete";
    //del.onclick=function(){
        //deleteproduct(newItem,del,id);
    //};
    newItem.textContent=`${sprice.value}-${product.value}-${category.value}`
    var targetPlace=document.getElementById('electronics');
    del.onclick=function(){
        deleteproducelectronics(newItem,del,id);
    };
    targetPlace.append(newItem,del);
    //postmethod(sprice,product,category);
}
function addToSkincare(sprice,product,category,id){
    var newItem=document.createElement('li');
    var del=document.createElement('button');
    del.textContent='Delete';
    del.id="delete";
    del.onclick=function(){
        deleteproducskin(newItem,del,id);
    };
    newItem.textContent=`${sprice.value}-${product.value}-${category.value}`
    var targetPlace=document.getElementById('skincare');
    targetPlace.append(newItem,del);
    //postmethod(sprice,product,category);
}

function postmethod(sprice,product,category){
    axios.post('https://crudcrud.com/api/bf7f9760a8554ca4a0ef21d6ef33366d/sellerProducts',{Price:sprice.value,
    Name:product.value,Category:category.value

})
.then((response)=>{
    if(category.value=='Food'){
        console.log(response.data.Price);
        addToFoodItems(sprice,product,category,response.data._id);
    }
    else if(category.value==='Electronics'){
        addToElectronicsItems(sprice,product,category,response.data._id);
        
    }
    else if(category.value==='Skincare'){
        addToSkincare(sprice,product,category,response.data._id);
        
    }
})
.catch((Error)=>console.log(Error));

}

function deleteproducfood(newItem,del,id){
    console.log('hii delete');
    var parentNode=document.getElementById('food');
    if (newItem) {
        parentNode.remove(newItem,del);
      }
      deletefromserver(id);

}
function deleteproducelectronics(newItem,del,id){
    console.log('hii delete');
    var parentNode=document.getElementById('electronics');
    if (newItem) {
        parentNode.remove(newItem,del);
      }
      deletefromserver(id);

}
function deleteproducskin(newItem,del,id){
    console.log('hii delete');
    var parentNode=document.getElementById('skincare');
    if (newItem) {
        parentNode.remove(newItem,del);
      }
      deletefromserver(id);

}



function deletefromserver(id){
axios.delete(`https://crudcrud.com/api/bf7f9760a8554ca4a0ef21d6ef33366d/sellerProducts/${id}`)
.then((response)=>console.log("delete successful"));

}

