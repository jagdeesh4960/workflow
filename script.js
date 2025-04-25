
var menu=document.querySelector('.menu')
var sidebar=document.querySelector('.sidebar')



menu.addEventListener('click',()=>{
    if(sidebar.style.display==='none'){
        sidebar.style.display="flex"

    }
    else{
        sidebar.style.display='none'
    }
})