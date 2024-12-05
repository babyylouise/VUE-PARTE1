<template>
  <div class="school-details">
    <!-- Cabeçalho -->
    <SchoolHeader 
      title="Detalhes da Escola" 
      :backRoute="'/escolas'" 
    />

    <!-- Informações da Escola -->
    <div class="details-message">
      <h2>Bem-vindo à página da escola</h2>
      <p>Detalhes sobre a escola <strong>{{ school.name }}</strong>.</p>

      <div class="buttons">
        <button @click="goBack" class="btn back">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SchoolHeader from "@/components/SchoolHeader.vue";

export default {
  components: {
    SchoolHeader,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const school = ref({
      id: null,
      name: '',
    });

    // Quando o componente for montado, carregue os dados da escola
    onMounted(() => {
      const schoolId = route.params.id;
      console.log(`Carregando dados da escola com ID: ${schoolId}`);
      
      // Aqui você carregaria os dados da escola via API ou outra fonte
      school.value = {
        id: schoolId,
        name: 'Escola Exemplo',
      };
    });

    const goBack = () => {
      router.push('/escolas'); // Redireciona para a lista de escolas
    };

    return {
      school,
      goBack,
    };
  },
};
</script>

<style scoped>
.school-details {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.details-message h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.details-message p {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: center;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s;
}

.back {
  background-color: #4CAF50;
  color: white;
  border: none;
}

.back:hover {
  background-color: #45a049;
  transform: scale(1.05);
}
</style>
