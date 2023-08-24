function Book(title,author,pages,read,id){
    this.title = title,
    this.author = author
    this.pages = pages,
    this.read = read
    this.id = id
}
let bookshelf =[]

const addBox =  document.querySelector('.addbox')
const form = document.getElementById("addform")
let idcounter = 0

//Checks when user adds a book and updates thier bookshelf
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked

    bookshelf.push(new Book(title,author,pages,read,idcounter))
    ++idcounter

    addBox.style.visibility = 'hidden'

    updatePage()
    readChange()
    removeBook()
})

//function to update the page when book is added or removed
function updatePage(){

    const cards = document.querySelector('.cards')

    // Clears screen so divs can be added
    cards.innerHTML = ''

    bookshelf.forEach(book => {
        // creates new card for content and adds the class
        const card = document.createElement('div')
        card.className = 'card'
        
        //creates divs to add to card containter
        const titlediv = document.createElement('div')
        const authordiv = document.createElement('div')
        const pagesdiv = document.createElement('div')
        const readdiv =document.createElement('div')
        const removebutton = document.createElement('button')

        //Adds text to divs
        titlediv.textContent = book.title
        authordiv.textContent = book.author
        pagesdiv.textContent = book.pages
        readdiv.textContent = 'Read '
        removebutton.textContent = 'Remove'

        //adds checkbox to readdiv
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = book.read
        readdiv.appendChild(checkbox)

        //gives checkbox and remove buttons id to correspodning book in bookshelf
        checkbox.id = book.id
        removebutton.id = book.id

        // Adds divs to card box
        card.appendChild(titlediv)
        card.appendChild(authordiv)
        card.appendChild(pagesdiv)
        card.appendChild(readdiv)
        card.appendChild(removebutton)
        // adds new card to cards container
        cards.appendChild(card)
    });
}
//removes book from page and from bookshelf
function removeBook(){
    const cardButtons = document.querySelectorAll('.card>button')

    cardButtons.forEach((button)=>{
        button.addEventListener('click',()=>{
            for(let i = 0; i < bookshelf.length;i++){
                if(button.id == bookshelf[i].id){
                    bookshelf.splice(i,1)
                    break
                }
            }
            updatePage(bookshelf)
            readChange()
            removeBook()
        })

    })
}
// Changes read status when clicking on checkbox in bookshelf
function readChange(){
    const cardCheckbox = document.querySelectorAll(".card>div>input")
    
    cardCheckbox.forEach((checkbox)=>{
        checkbox.addEventListener('click',()=>{
            for(let i = 0;i < bookshelf.length ;i++){
                if(checkbox.id == bookshelf[i].id){
                    bookshelf[i].read = !bookshelf[i].read
                    break
                }
            }
        })
    })
}

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