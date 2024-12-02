<template>
    <div class="student-edit">
      <h2>Editar Estudante</h2>
  
      <!-- Lista de alunos -->
      <form @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="address">Nome do Estudante</label>
        <input
          type="text"
          id="name"
          v-model="student.name"
          placeholder="Nome do estudante"
          required
        />
      </div>

      <div class="form-group">
        <label for="contact">Idade</label>
        <input
          type="number"
          id="age"
          v-model="student.age"
          placeholder="Idade"
          required
        />
      </div>

      <div class="form-group">
        <label for="contact">Sexo</label>
        <input
          type="number"
          id="gender"
          v-model="student.gender"
          placeholder="Idade"
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
  import axios from 'axios';  // Importando o Axios
  
  export default {
    setup() {
      const route = useRoute();
      const router = useRouter();
  
      const student = ref({
        id: null,
        name: '',
        gender: '',
        age: '',
      });
  
      // Quando o componente for montado, busque os dados da escola usando o id da URL
      onMounted(() => {
        const studentId = route.params.id;
        console.log(`Carregando dados para o estudante com id: ${studentId}`);
  
        // Requisição GET para buscar os dados da escola
        axios.get(`http://localhost:8080/student/${studentId}`)
          .then(response => {
            student.value = response.data;  // Preenche os dados da escola com a resposta
          })
          .catch(error => {
            console.error('Erro ao carregar dados do estudante:', error);
          });
      });
  
      const saveChanges = () => {
        console.log('Estudante editada com sucesso:', student.value);
        // Lógica para salvar a escola, como uma requisição para um backend
        router.push('/alunos');  // Redireciona para a lista de escolas
      };
  
      const cancelEdit = () => {
        router.push('/alunos');  // Redireciona para a lista de escolas
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
        student,
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
  
  .student-edit {
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
  
  