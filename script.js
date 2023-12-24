document.getElementById('todo-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        newElement();
    }
});

function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("todo-input").value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("todo-list").appendChild(li);
    }
    document.getElementById("todo-input").value = "";

    li.addEventListener('click', function() {
        this.classList.toggle('completed');
        this.parentNode.appendChild(this); // Move to bottom
    });

    let pressTimer;
    li.addEventListener('mousedown', function() {
        pressTimer = window.setTimeout(function() {
            if (confirm("Are you sure you want to delete this task?")) {
                li.remove();
            }
        }, 1000); // Long press time threshold (1 second)
    });

    li.addEventListener('mouseup', function() {
        clearTimeout(pressTimer); // Cancel the deletion on short press
    });

    li.addEventListener('mouseleave', function() {
        clearTimeout(pressTimer); // Cancel the deletion if the cursor leaves the element
    });
}
