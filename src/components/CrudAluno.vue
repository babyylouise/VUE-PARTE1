<template>
  <div class="crud-container">
    <h2>CRUD de Alunos</h2>
    <div v-for="aluno in alunos" :key="aluno.id" class="crud-item">
      <p>{{ aluno.nome }}</p>
      <button @click="deleteAluno(aluno.id)">Deletar</button>
    </div>
    <input v-model="newAluno" placeholder="Adicionar novo aluno" />
    <button @click="addAluno">Adicionar Aluno</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const alunos = ref([
  { id: 1, nome: 'Aluno 1' },
  { id: 2, nome: 'Aluno 2' }
]);

const newAluno = ref('');

const addAluno = () => {
  if (newAluno.value.trim() !== '') {
    alunos.value.push({
      id: alunos.value.length + 1,
      nome: newAluno.value
    });
    newAluno.value = ''; // Limpa o campo
  }
};

const deleteAluno = (id) => {
  const index = alunos.value.findIndex(aluno => aluno.id === id);
  if (index !== -1) {
    alunos.value.splice(index, 1);
  }
};
</script>

<style scoped>
.crud-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crud-item {
  margin-bottom: 10px;
}

input {
  padding: 10px;
  margin-top: 10px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #1d3557;
  color: white;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #457b9d;
}
</style>
