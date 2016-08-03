var myList = []

var input = document.getElementById('todo-input')
var submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', function() {
    myList.push(input.value)
    input.value = ''
    renderTodos()
})

var list = document.getElementById('todos')

function renderTodos() {
    list.innerHTML = ''
    for (var i = 0; i < myList.length; i++) {
        list.innerHTML += '<li>' + myList[i] + '</li>'
    }
  
}
