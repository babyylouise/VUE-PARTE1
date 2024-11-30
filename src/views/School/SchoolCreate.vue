<template>
    <div class="school-create">
      <h2>Criar Nova Escola</h2>
  
      <!-- Formulário de criação -->
      <form @submit.prevent="createSchool">
        <div class="form-group">
          <label for="name">Nome da Escola</label>
          <input
            type="text"
            id="name"
            v-model="school.schoolName"
            placeholder="Nome da escola"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="address">Nome do Diretor</label>
          <input
            type="text"
            id="address"
            v-model="school.principalName"
            placeholder="Nome do diretor"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="contact">Localização</label>
          <input
            type="text"
            id="contact"
            v-model="school.location"
            placeholder="Localização da escola"
            required
          />
        </div>
  
        <div class="form-buttons">
          <!-- Botão de criação com animação ao passar o mouse -->
          <button 
            type="submit" 
            class="btn save" 
            @mouseover="hoverSave" 
            @mouseleave="resetButton"
          >
            Criar
          </button>
          <!-- Botão de cancelamento -->
          <button 
            type="button" 
            @click="cancelCreate" 
            class="btn cancel" 
            @mouseover="hoverCancel" 
            @mouseleave="resetButton"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  
  export default {
    setup() {
      const router = useRouter();
  
      // Estado da escola para o formulário
      const school = ref({
        schoolName: '',
        principalName: '',
        location: '',
      });
  
      // Função para enviar os dados da escola para o backend
      const createSchool = async () => {
        try {
          const response = await axios.post('http://localhost:8082/school', {
            schoolName: school.value.schoolName,
            principalName: school.value.principalName,
            location: school.value.location,
        }, {
  headers: {
    'Content-Type': 'application/json'
  }
});
  
          // Log para confirmar que a escola foi criada
          console.log('Escola criada com sucesso:', response.data);
  
          // Redireciona para a página de lista de escolas
          router.push('/escolas');
        } catch (error) {
          console.error('Erro ao criar escola:', error);
        }
      };
  
      // Função para cancelar a criação e voltar à lista de escolas
      const cancelCreate = () => {
        router.push('/escolas');
      };
  
      // Funções para animação nos botões
      const hoverSave = (event) => {
        event.target.style.backgroundColor = '#45a049'; // Cor ao passar o mouse
      };
  
      const hoverCancel = (event) => {
        event.target.style.backgroundColor = '#e53935'; // Cor ao passar o mouse
      };
  
      const resetButton = (event) => {
        if (event.target.classList.contains('save')) {
          event.target.style.backgroundColor = '#4CAF50';
        } else if (event.target.classList.contains('cancel')) {
          event.target.style.backgroundColor = '#f44336';
        }
      };
  
      return {
        school,
        createSchool,
        cancelCreate,
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
  
  .school-create {
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
  