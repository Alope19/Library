function Book(title,author,pages,read){
    this.title = title,
    this.author = author
    this.pages = pages,
    this.read = read
}
let bookshelf =[]
const addBox =  document.querySelector('.addbox')
const form = document.getElementById("addform")

//Checks when user adds a book and updates thier bookshelf
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').checked

    bookshelf.push(new Book(title,author,pages,read))

    addBox.style.visibility = 'hidden'

    console.log(bookshelf)
    updatePage(bookshelf)
})

//function to update the page when book is added or removed
function updatePage(bookshelf){

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
        const removebt = document.createElement('button')

        //Adds text to divs
        titlediv.textContent = book.title
        authordiv.textContent = book.author
        pagesdiv.textContent = book.pages
        readdiv.textContent = 'Read'
        removebt.textContent = 'Remove'

        //adds checkbox to readdiv
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = book.read
        readdiv.appendChild(checkbox)

        // Adds divs to card box
        card.appendChild(titlediv)
        card.appendChild(authordiv)
        card.appendChild(pagesdiv)
        card.appendChild(readdiv)
        card.appendChild(removebt)

        cards.appendChild(card)
    });
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