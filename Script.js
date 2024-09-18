
// function to show error message if input field is empty 
function showMessage() {
    let text = document.querySelector('.inputField').value

    if (text.trim() == "") {
        document.querySelector('.btn').removeEventListener('click', addText)
        let errorMsg = document.createElement('p')
        errorMsg.classList.add("errorMessage")
        
        document.querySelector('.container').appendChild(errorMsg)
        errorMsg.textContent = "please enter task"

    }
    else
        document.querySelector('.btn').addEventListener('click', addText)
}


// function to show text and its due date
function addText() {

    let txt = document.querySelector('.inputField').value
    let datepicker = document.querySelector('.datepicker').value
    let checkBox = document.createElement('input')


    checkBox.type = 'checkbox'
    checkBox.classList.add("checkBox")


    let listItem = document.createElement('li')
    let taskTag = document.createElement('p')
    taskTag.textContent = txt
    taskTag.classList.add("tasks")

    let editBtn = document.createElement('button')
    editBtn.classList.add("editBtn")
    editBtn.textContent = "edit"

    let crossBtn = document.createElement('button')
    crossBtn.classList.add("crossBtn")
    crossBtn.textContent = "x"

    let dateTag = document.createElement('p')
    dateTag.textContent = datepicker
    dateTag.classList.add("date")





    document.querySelector('.ul-List').appendChild(listItem)

    listItem.appendChild(checkBox)
    listItem.appendChild(taskTag)
    listItem.appendChild(editBtn)
    listItem.appendChild(crossBtn)
    listItem.appendChild(dateTag)
    document.querySelector('.inputField').value = ''
    document.querySelector('.datepicker').value = ''


    if (dateTag.textContent == "") {
        dateTag.style.visibility = "hidden"
    }



    // function to remove task on clicking on delete button
    crossBtn.addEventListener('click', function () {
        taskTag.remove()
        crossBtn.remove()
        editBtn.remove()
        checkBox.remove()
        dateTag.remove()
        listItem.remove()
    })

    // function or editing task
    editBtn.addEventListener("click", function () {
        taskTag.remove()
        crossBtn.remove()
        editBtn.remove()
        checkBox.remove()
        dateTag.remove()
        listItem.remove()
        document.querySelector('.inputField').value = txt

    })
}



document.querySelector('.btn').addEventListener('click', showMessage)
document.querySelector('.btn').addEventListener('click', addText)



// function to show completed task
document.querySelector('.allTaskBtn').addEventListener('click', function () {

    document.querySelector('.Heading').textContent = "Completed Tasks"

    document.querySelector('.sectionCompletedTask').style.visibility = "visible"

    document.querySelector('.container').style.filter = "blur(3px)"

})



// function to show pending tasks
document.querySelector('.allTaskBtn1').addEventListener('click', function () {

    document.querySelector('.sectionCompletedTask').style.visibility = "visible"

    document.querySelector('.Heading').textContent = "Pending tasks"

    document.querySelector('.container').style.filter = "blur(3px)"


})


// function to remove completed or pending task section on clicking on "Escape" button
document.querySelector('body').addEventListener('keydown', function (e) {
    if (e.key === 'Escape')

        document.querySelector('.sectionCompletedTask').style.visibility = "hidden"

    document.querySelector('.container').style.filter = "none"

})

