<template>
  <div class="crud-container">
    <h2>Gerenciamento de Alunos</h2>

    <!-- Lista de alunos -->
    <div v-for="aluno in alunos" :key="aluno.id" class="crud-item">
      <span>{{ aluno.nome }}</span>
      <!-- Botões de Ações -->
      <div class="crud-actions">
        <!-- Botão Editar -->
        <button class="btn edit" @click="editAluno(aluno.id)">Editar</button>
        <!-- Botão Deletar -->
        <button class="btn delete" @click="deleteAluno(aluno.id)">Deletar</button>
      </div>
    </div>

    <!-- Campo para adicionar novo aluno -->
    <div class="add-aluno">
      <input v-model="newAluno" placeholder="Adicionar novo aluno" class="input-field"/>
      <button @click="addAluno" class="btn add">Adicionar Aluno</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const alunos = ref([
  { id: 1, nome: 'Aluno 1' },
  { id: 2, nome: 'Aluno 2' }
]);

const newAluno = ref('');

// Função para adicionar aluno
const addAluno = () => {
  if (newAluno.value.trim() !== '') {
    alunos.value.push({
      id: alunos.value.length + 1,
      nome: newAluno.value
    });
    newAluno.value = ''; // Limpa o campo
  }
};

// Função para deletar aluno
const deleteAluno = (id) => {
  const index = alunos.value.findIndex(aluno => aluno.id === id);
  if (index !== -1) {
    alunos.value.splice(index, 1);
  }
};

// Função para editar aluno
const editAluno = (id) => {
  const aluno = alunos.value.find(a => a.id === id);
  if (aluno) {
    const newName = prompt("Editar nome do aluno:", aluno.nome);
    if (newName) {
      aluno.nome = newName;
    }
  }
};
</script>

<style scoped>
.crud-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f9f9f9, #e9ecef);
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

h2 {
  font-size: 2rem;
  font-family: 'Pacifico', cursive;
  color: #333;
  margin-bottom: 20px;
}

.crud-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

.crud-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 15px;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
}

.btn.edit {
  background-color: #FFC107;
  color: white;
}

.btn.edit:hover {
  background-color: #FFCA28;
}

.btn.delete {
  background-color: #F44336;
  color: white;
}

.btn.delete:hover {
  background-color: #D32F2F;
}

.add-aluno {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
}

.input-field {
  padding: 10px;
  border-radius: 50px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 250px;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: #6C63FF;
}

.btn.add {
  padding: 10px 20px;
  background: linear-gradient(135deg, #6C63FF, #8490F7);
  color: white;
  border-radius: 50px;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
}

.btn.add:hover {
  background: linear-gradient(135deg, #5753FF, #737EFA);
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
