<template>
  <div class="detail-container">
    <h2>Detalhes do Aluno</h2>
    <div class="aluno-detail">
      <p><strong>ID:</strong> {{ aluno.id }}</p>
      <p><strong>Nome:</strong> {{ aluno.nome }}</p>
      <p><strong>Escola:</strong> {{ aluno.escola }}</p>
    </div>
    <button @click="goBack" class="btn go-back">Voltar</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); // Para acessar os parâmetros da URL
const router = useRouter(); // Para navegar de volta

// Dados do aluno
const aluno = ref({
  id: '',
  nome: '',
  escola: ''
});

onMounted(() => {
  // Recuperar o aluno com base no parâmetro 'id'
  const alunoId = route.params.id;
  // Simulação de buscar o aluno pela id
  const alunos = [
    { id: 1, nome: 'Aluno 1', escola: 'Escola A' },
    { id: 2, nome: 'Aluno 2', escola: 'Escola B' }
  ];
  aluno.value = alunos.find(a => a.id === parseInt(alunoId));
});

// Função para voltar à página anterior
const goBack = () => {
  router.push('/');
};
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f9f9f9, #e9ecef);
  min-height: 100vh;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

.aluno-detail {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  max-width: 400px;
}

.btn.go-back {
  background-color: #6C63FF;
  color: white;
  border-radius: 50px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}

.btn.go-back:hover {
  background-color: #5753FF;
}
</style>
