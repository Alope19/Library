const addBox =  document.querySelector('.addbox')

document.querySelector(".addbutton").addEventListener('click',()=>{
    addBox.style.visibility = 'visible'
})
document.querySelector(".addbox").addEventListener('click',()=>{
    addBox.style.visibility = 'hidden'
})
document.querySelector("form").addEventListener('click',(e)=>{
    e.stopPropagation()
})