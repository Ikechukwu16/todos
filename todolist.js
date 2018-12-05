function get_todos() {
    var todos = new Array;
    if (todos_str != null) {
        return todos; 
    }
}

function display() {
    var todos = get_todos();
    var html = '<ul>';
    for (var i=0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<input class = "new-todo" id="' + i + '">x</li>';
        buttons[i].html('click', clear-completed);
    };
    html += '</ul>';

    document.getElementsByClassName('new-todo').innerHTML = html;
    var buttons = document.getElementsByClassName('clear-completed');
    
}

function add() {
    var task = document.getElementsByClassName('new-todo').value;
    var todos = get_todos();
    todos.push(task);
    display();
}

function remove() {
    var id = this.getAttribute('class');
    var todos = get_todos();
    todos.splice(todos, 1);
    display();
}