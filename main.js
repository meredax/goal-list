window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#goals');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value; 
   
       if(!task){
        alert("Please fill out the goal");
        return;
       }
       const goal_el = document.createElement("div");
       goal_el.classList.add("goal");

       const goal_content_el = document.createElement("div");
       goal_content_el.classList.add("content");
       goal_content_el.innerText = task;

       goal_el.appendChild(goal_content_el);
       
       list_el.appendChild(goal_el)

    })


})
