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
/* Fontes modernas */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Pacifico&display=swap');

.school-edit {
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

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #333;
  display: block;
  margin-bottom: 10px;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

.form-group input:focus {
  border-color: #6C63FF;
  outline: none;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.btn {
  padding: 12px 25px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.save {
  background: linear-gradient(135deg, #4CAF50, #66BB6A);
}

.cancel {
  background: linear-gradient(135deg, #F44336, #E53935);
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

i {
  font-size: 1.2rem;
}
</style>
