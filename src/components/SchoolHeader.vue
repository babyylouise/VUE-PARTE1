<template>
    <header class="school-header">
        <router-link :to="'/'" class="btn back">← Voltar</router-link>
      <h1>{{ title }}</h1>
    </header>
  </template>
  
  <script>
 export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
  </script>
  
  <style scoped>
  .school-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .school-header h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
  }
  
  .btn.back {
    background: none;
    border: none;
    font-size: 1rem;
    color: #555;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .btn.back:hover {
    color: #000;
  }
  </style>
  