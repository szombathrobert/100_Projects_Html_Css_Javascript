const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const bookList = document.getElementById('book-list')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function(e) {
    e.preventDefault()

    if (title.value == "" && author.value == "" && year.value == "") {
        alert("Please fill the form!")
    } else {
        const newRow = document.createElement("section")

        //Creating new title
        const newTitle = document.createElement("div")
        newTitle.innerHTML = title.value
        newRow.appendChild(newTitle)

        //Creating new author
        const newaAuthor = document.createElement("div")
        newaAuthor.innerHTML = author.value
        newRow.appendChild(newaAuthor)

        //Creating new year
        const newYear = document.createElement("div")
        newYear.innerHTML = year.value
        newRow.appendChild(newYear)

        bookList.appendChild(newRow)
    }
})