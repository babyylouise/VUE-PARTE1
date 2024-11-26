<template>
  <div class="home">
    <h1>Bem-vindo ao Sistema de Gestão Escolar</h1>
    <p>Gerencie e conecte alunos às suas escolas de forma prática e eficiente.</p>
    <div class="btn-container">
      <router-link to="/escolas" class="btn">Gerenciar Escolas</router-link>
      <router-link to="/alunos" class="btn">Gerenciar Alunos</router-link>
    </div>
  </div>
</template>

<script setup>
// Qualquer lógica adicional para a página inicial
</script>

<style scoped>
/* Importando uma fonte moderna do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Pacifico&display=swap');

.home {
  text-align: center;
  background: linear-gradient(135deg, #f9f9f9, #e9ecef);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 2.8rem;
  font-family: 'Pacifico', cursive; /* Fonte especial para dar destaque */
  color: #333;
  margin-bottom: 15px;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;
}

.btn-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 15px 30px;
  background: linear-gradient(135deg, #6C63FF, #8490F7);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  letter-spacing: 0.05rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  background: linear-gradient(135deg, #5753FF, #737EFA);
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
