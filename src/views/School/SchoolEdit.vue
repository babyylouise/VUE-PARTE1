<template>
  <div class="school-details">
    <h2>Detalhes da Escola</h2>

    <div class="details">
      <div class="detail-item">
        <strong>Nome da Escola: </strong>
        <span>{{ school.schoolName }}</span>
      </div>
      <div class="detail-item">
        <strong>Nome do Diretor: </strong>
        <span>{{ school.principalName }}</span>
      </div>
      <div class="detail-item">
        <strong>Localização: </strong>
        <span>{{ school.location }}</span>
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

    const school = ref({
      id: null,
      schoolName: '',
      principalName: '',
      location: '',
    });

    // Ao montar o componente, buscar os dados da escola
    onMounted(() => {
      const schoolId = route.params.id;
      console.log(`Carregando detalhes da escola com ID: ${schoolId}`);

      // Requisição GET para obter os detalhes da escola
      axios.get(`http://localhost:8080/school/${schoolId}`)
        .then(response => {
          school.value = response.data;
        })
        .catch(error => {
          console.error('Erro ao carregar detalhes da escola:', error);
        });
    });

    const goBack = () => {
      router.push('/escolas'); // Redirecionar para a lista de escolas
    };

    return {
      school,
      goBack,
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Pacifico&display=swap');

.school-details {
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
  margin-bottom: 30px;
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
