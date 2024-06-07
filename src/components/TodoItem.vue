<template>
    <li :class="{ completed: todo.completed }">
      <input type="checkbox" v-model="todo.completed">
      <span>{{ todo.text }}</span>
      <button @click="$emit('remove')">Remove</button>
    </li>
  </template>
  
  <script setup>
  defineProps({
    todo: Object
  })
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>
  