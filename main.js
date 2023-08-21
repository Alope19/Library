function Book(title,author,pages,read){
    this.title = title,
    this.author = author
    this.pages = pages,
    this.read = read
}
let bookshelf =[]
const addBox =  document.querySelector('.addbox')
const form = document.getElementById("addform")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked

    bookshelf.push(new Book(title,author,pages,read))

    addBox.style.visibility = 'hidden'

    console.log(bookshelf)

})

//Makes it so clicking on add book opens the form to add a book
document.querySelector(".addbutton").addEventListener('click',()=>{
    addBox.style.visibility = 'visible'
})
document.querySelector(".addbox").addEventListener('click',()=>{
    addBox.style.visibility = 'hidden'
})
document.querySelector("form").addEventListener('click',(e)=>{
    e.stopPropagation()
})