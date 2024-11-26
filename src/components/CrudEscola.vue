<template>
  <div class="delete-confirmation">
    <!-- Cabeçalho -->
    <SchoolHeader 
      title="Excluir Escola" 
      :backRoute="'/escolas'" 
    />

    <!-- Mensagem de Confirmação -->
    <div class="confirmation-message">
      <h2>Tem certeza que deseja excluir esta escola?</h2>
      <p>Você está prestes a excluir a escola <strong>{{ school.name }}</strong>. Essa ação não pode ser desfeita.</p>

      <div class="buttons">
        <button @click="confirmDelete" class="btn confirm">Confirmar</button>
        <button @click="cancelDelete" class="btn cancel">Cancelar</button>
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

    const confirmDelete = () => {
      console.log(`Escola com ID ${school.value.id} excluída.`);
      // Adicione aqui a lógica para excluir a escola, como uma requisição para o backend
      router.push('/escolas'); // Redireciona para a lista de escolas
    };

    const cancelDelete = () => {
      router.push('/escolas'); // Redireciona para a lista de escolas sem excluir
    };

    return {
      school,
      confirmDelete,
      cancelDelete,
    };
  },
};
</script>

<style scoped>
.delete-confirmation {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.confirmation-message h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
}

.confirmation-message p {
  font-size: 1rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.3s;
}

.confirm {
  background-color: #f44336;
  color: white;
  border: none;
}

.confirm:hover {
  background-color: #e53935;
  transform: scale(1.05);
}

.cancel {
  background-color: #4CAF50;
  color: white;
  border: none;
}

.cancel:hover {
  background-color: #45a049;
  transform: scale(1.05);
}
</style>
