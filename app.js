document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskName = document.getElementById('taskName').value;
    if (taskName === '') {
        alert('Por favor, ingrese el nombre de la tarea.');
        return;
    }

    const task = document.createElement('div');
    task.className = 'task';
    
    const taskText = document.createElement('span');
    taskText.textContent = taskName;
    task.appendChild(taskText);
    
    const select = document.createElement('select');
    select.innerHTML = `
        <option value="pending">Pendiente</option>
        <option value="inProgress">En Proceso</option>
        <option value="completed">Finalizada</option>
    `;
    select.addEventListener('change', function() {
        moveTask(task, this.value);
    });
    task.appendChild(select);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        task.classList.add('underlined');
        setTimeout(() => {
            task.remove();
        }, 1000);
    });
    task.appendChild(deleteButton);
    
    document.getElementById('pending').appendChild(task);
    document.getElementById('taskName').value = '';
};

function moveTask(task, status) {
    const columns = {
        'pending': document.getElementById('pending'),
        'inProgress': document.getElementById('inProgress'),
        'completed': document.getElementById('completed')
    };
    columns[status].appendChild(task);
};
