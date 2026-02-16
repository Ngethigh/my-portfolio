/**
 * To-Do List Logic
 * Build for: Learning Dev + Tester Mindset
 */

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');

/**
 * DEV NOTE: Initial state management
 * In a real app, this might come from LocalStorage or an API.
 */
let tasks = [];

/**
 * FEATURE 1: Add Task
 * Mindset: What if input is empty? What if it's just spaces?
 */
function addTask() {
    const taskText = todoInput.value.trim();

    // TESTER CHECK: Input requirement
    if (taskText === "") {
        // Simple visual feedback for error
        todoInput.style.borderColor = "#ef4444";
        setTimeout(() => todoInput.style.borderColor = "#334155", 1000);
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();

    // REQUIREMENT: Clear input
    todoInput.value = "";
    todoInput.focus();
}

/**
 * FEATURE 2 & 3: Delete and Complete
 * Mindset: Use Event Delegation or handle via index/ID
 */
function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    // DEV NOTE: Using filter for clean immutable-like update
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

/**
 * DOM MANIPULATION: Render List
 * Mindset: Efficient rendering vs simple re-render
 */
function renderTasks() {
    todoList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `todo-item ${task.completed ? 'completed' : ''}`;

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} 
                   onchange="toggleTask(${task.id})"
                   aria-label="Mark task as complete">
            <span>${escapeHTML(task.text)}</span>
            <button class="delete-btn" onclick="deleteTask(${task.id})" title="Delete Task">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;

        todoList.appendChild(li);
    });

    // Update Stats (Tester wants visibility)
    updateStats();
}

/**
 * TESTER NOTE: Security (XSS Prevention)
 * Always sanitize user input before putting it into innerHTML
 */
function escapeHTML(str) {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
}

function updateStats() {
    const completed = tasks.filter(t => t.completed).length;
    totalCount.textContent = tasks.length;
    completedCount.textContent = completed;
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// DEV NOTE: Good UX - Support "Enter" key
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// INITIAL RENDER
renderTasks();
