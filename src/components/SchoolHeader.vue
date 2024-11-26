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
/* Fontes modernas */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Pacifico&display=swap');

.school-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background: linear-gradient(135deg, #6C63FF, #8490F7);
  color: white;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.school-header h1 {
  font-family: 'Pacifico', cursive;
  font-size: 2.2rem;
  font-weight: normal;
  color: white;
  margin: 0;
}

.btn.back {
  background: none;
  border: none;
  font-size: 1rem;
  color: white;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
}

.btn.back:hover {
  color: #f5f5f5;
  transform: scale(1.05);
}
</style>
