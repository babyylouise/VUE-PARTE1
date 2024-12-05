<template>
  <div class="student-edit">
    <h2>Criar Novo Estudante</h2>

    <!-- Formulário de criação de aluno -->
    <form @submit.prevent="saveChanges">
      <div class="form-group">
        <label for="name">Nome do Estudante</label>
        <input
          type="text"
          id="name"
          v-model="student.name"
          placeholder="Nome do estudante"
          required
        />
      </div>

      <div class="form-group">
        <label for="age">Idade</label>
        <input
          type="number"
          id="age"
          v-model="student.age"
          placeholder="Idade"
          required
        />
      </div>

      <div class="form-group">
        <label for="gender">Sexo</label>
        <input
          type="text"
          id="gender"
          v-model="student.gender"
          placeholder="Gênero"
          required
        />
      </div>

      <div class="form-group">
        <label for="school">Escola</label>
        <select v-model="student.schoolId" id="school" required>
          <option value="" disabled>Selecione uma escola</option>
          <option v-for="school in schools" :key="school.id" :value="school.id">
            {{ school.name }}
          </option>
        </select>
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
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();

    const student = ref({
      name: '',
      age: '',
      gender: '',
      schoolId: '', // ID da escola associada
    });

    const schools = ref([]);

    const fetchSchools = async () => {
      try {
        const response = await axios.get('http://localhost:8081/schools');
        schools.value = response.data;
      } catch (error) {
        console.error('Erro ao buscar escolas:', error);
      }
    };

    const saveChanges = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8081/student',
          {
            name: student.value.name,
            age: student.value.age,
            gender: student.value.gender,
            schoolId: student.value.schoolId,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        console.log('Estudante criado com sucesso:', response.data);
        router.push('/alunos');
      } catch (error) {
        console.error('Erro ao criar estudante:', error);
      }
    };

    const cancelEdit = () => {
      router.push('/alunos');
    };

    const hoverSave = (event) => {
      event.target.style.backgroundColor = '#45a049';
    };

    const hoverCancel = (event) => {
      event.target.style.backgroundColor = '#e53935';
    };

    const resetButton = (event) => {
      if (event.target.classList.contains('save')) {
        event.target.style.backgroundColor = '#4CAF50';
      } else if (event.target.classList.contains('cancel')) {
        event.target.style.backgroundColor = '#f44336';
      }
    };

    onMounted(() => {
      fetchSchools();
    });

    return {
      student,
      schools,
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

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
}

.form-group input:focus,
.form-group select:focus {
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
</style>
