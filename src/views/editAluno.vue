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
  import { useRouter } from 'vue-router'; // Importar useRouter para navegação
  
  const router = useRouter(); // Criar instância do router
  
  const alunos = ref([
    { id: 1, nome: 'Aluno 1', escola: 'Escola A' },
    { id: 2, nome: 'Aluno 2', escola: 'Escola B' }
  ]);
  
  const newAluno = ref('');
  
  // Função para adicionar aluno
  const addAluno = () => {
    if (newAluno.value.trim() !== '') {
      alunos.value.push({
        id: alunos.value.length + 1,
        nome: newAluno.value,
        escola: 'Escola X'
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
  
  // Função para redirecionar para a página de detalhes do aluno
  const editAluno = (id) => {
    router.push({ name: 'AlunoDetail', params: { id } });
  };
  </script>
  
  <style scoped>
  /* Estilos omitidos por brevidade */
  </style>
  