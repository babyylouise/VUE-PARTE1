<template>
  <div class="school-edit">
    <h2>Editar Escola</h2>

    <!-- Formulário de edição -->
    <form @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="name">Nome da Escola</label>
        <input
          type="text"
          id="name"
          v-model="school.name"
          placeholder="Nome da escola"
          required
        />
      </div>

      <div class="form-group">
        <label for="address">Endereço</label>
        <input
          type="text"
          id="address"
          v-model="school.address"
          placeholder="Endereço da escola"
          required
        />
      </div>

      <div class="form-group">
        <label for="contact">Contato</label>
        <input
          type="text"
          id="contact"
          v-model="school.contact"
          placeholder="Contato da escola"
          required
        />
      </div>

      <div class="form-buttons">
        <button type="submit" class="btn save" @mouseover="hoverSave" @mouseleave="resetButton">Salvar</button>
        <button type="button" @click="cancelEdit" class="btn cancel" @mouseover="hoverCancel" @mouseleave="resetButton">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const school = ref({
      id: null,
      name: '',
      address: '',
      contact: '',
    });

    // Quando o componente for montado, busque os dados da escola usando o id da URL
    onMounted(() => {
      const schoolId = route.params.id;
      console.log(`Carregando dados para a escola com id: ${schoolId}`);

      // Simulação de dados carregados da API
      school.value = {
        id: schoolId,
        name: 'Escola Exemplo',
        address: 'Rua Exemplo, 123',
        contact: '(11) 1111-1111',
      };
    });

    const saveChanges = () => {
      console.log('Escola editada com sucesso:', school.value);
      // Lógica para salvar a escola, como uma requisição para um backend
      router.push('/escolas');  // Redireciona para a lista de escolas
    };

    const cancelEdit = () => {
      router.push('/escolas');  // Redireciona para a lista de escolas
    };

    // Funções para animação dos botões
    const hoverSave = (event) => {
      event.target.style.backgroundColor = '#45a049'; // Mudança de cor ao passar o mouse
    };

    const hoverCancel = (event) => {
      event.target.style.backgroundColor = '#e53935'; // Mudança de cor ao passar o mouse
    };

    const resetButton = (event) => {
      // Resetando a cor para a inicial quando o mouse sai
      if (event.target.classList.contains('save')) {
        event.target.style.backgroundColor = '#4CAF50';
      } else if (event.target.classList.contains('cancel')) {
        event.target.style.backgroundColor = '#f44336';
      }
    };

    return {
      school,
      saveChanges,
      cancelEdit,
      hoverSave,
      hoverCancel,
      resetButton,
    };
  },
};
</script>

<style scoped>
.school-edit {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  font-size: 1rem;
  color: #333;
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

.form-group input:focus {
  border-color: #4CAF50;
  outline: none;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  width: 48%;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
}

.save {
  background-color: #4CAF50;
  color: white;
  border: none;
}

.save:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

.cancel {
  background-color: #f44336;
  color: white;
  border: none;
}

.cancel:hover {
  background-color: #e53935;
  transform: scale(1.05);
}
</style>
