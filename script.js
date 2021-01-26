let allItems = document.querySelectorAll('.item');

allItems.forEach((item)=>{
    item.addEventListener('click', ()=> {
        removeActive();
        item.classList.add('active');
    })
})


function removeActive(){
allItems.forEach((item)=>{
     item.classList.remove('active');
 });
}


