let astute=document.querySelector('h5');
let addFriend=document.querySelector('#add')
let remove=document.querySelector('#remove');


addFriend.addEventListener('click',function(){
    astute.innerHTML="Friends"
    astute.style.color="green"
})
remove.addEventListener('click',function(){
    astute.innerHTML="Stranger"
    astute.style.color="red"
})