<template>
  <div class="todo-app">
    <h1>To-Do List</h1>
    <input v-model="newTodo"
           @keyup.enter="addTodo"
           placeholder="Add a new task">
    <ul>
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        @remove="removeTodo(index)"
      />
    </ul>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import TodoItem from './components/TodoItem.vue'
  
  const newTodo = ref('')
  const todos = ref([])
  
  function addTodo() {
    if (newTodo.value.trim()) {
      todos.value.push({ text: newTodo.value.trim(), completed: false })
      newTodo.value = ''
    }
  }
  
  function removeTodo(index) {
    todos.value.splice(index, 1)
  }
  </script>
  
  <style scoped>
  .todo-app {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  button {
    background: none;
    border: none;
    color: red;
    cursor: pointer;
  }
  </style>
  