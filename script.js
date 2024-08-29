const form = document.querySelector('#todoForm');
console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault();
    const task = document.getElementById('task').value;
    const category = document.getElementById('category').value;
    const todoList = document.getElementById('todoList');
    // if(task == '' || category == ''){
    //     alert(`give task and category both`);
    //     return;
    // }
    const newrow = document.createElement('Li');
    const textSpan = document.createElement('span')
    textSpan.textContent = `Task : ${task} | Category : ${category}`;
    const newbutton = document.createElement('span');
    newbutton.textContent = '❌'; 
    newbutton.style.cursor = 'pointer';
    newbutton.style.marginLeft = '10px';
    newbutton.addEventListener('click',function(){
        newrow.remove();
    })
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change',function(){
          if(checkbox.checked){
            textSpan.style.textDecoration = 'line-through'
          }
          else{
             textSpan.style.textDecoration = 'none';
          }
    })  
    newrow.prepend(checkbox);
    newrow.appendChild(textSpan);
    newrow.appendChild(newbutton);
    todoList.appendChild(newrow);
    document.getElementById('task').value = '';
    document.getElementById('category').value = '';
})