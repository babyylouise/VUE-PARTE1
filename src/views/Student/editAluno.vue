<template>
  <div class="student-details">
    <h2>Detalhes do Estudante</h2>

    <div class="details">
      <div class="detail-item">
        <strong>Nome:</strong>
        <span>{{ student.name }}</span>
      </div>
      <div class="detail-item">
        <strong>Idade:</strong>
        <span>{{ student.age }}</span>
      </div>
      <div class="detail-item">
        <strong>Sexo:</strong>
        <span>{{ student.gender }}</span>
      </div>
      <div class="detail-item">
        <strong>ID:</strong>
        <span>{{ student.id }}</span>
      </div>
    </div>

    <div class="view-buttons">
      <button @click="goBack" class="btn back">Voltar</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const student = ref({
      id: null,
      name: '',
      age: '',
      gender: '',
    });

    // Buscar dados do estudante pelo ID
    onMounted(() => {
      const studentId = route.params.id;
      console.log(`Carregando detalhes do estudante com ID: ${studentId}`);

      axios.get(`http://localhost:8080/student/${studentId}`)
        .then(response => {
          student.value = response.data;
        })
        .catch(error => {
          console.error('Erro ao carregar detalhes do estudante:', error);
        });
    });

    const goBack = () => {
      router.push('/alunos'); // Redireciona para a lista de estudantes
    };

    return {
      student,
      goBack,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Pacifico&display=swap');

.student-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

h2 {
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.details {
  margin-bottom: 30px;
}

.detail-item {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.detail-item strong {
  color: #333;
  font-weight: bold;
}

.view-buttons {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 12px 25px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  background: linear-gradient(135deg, #6C63FF, #857FFF);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}
</style>
