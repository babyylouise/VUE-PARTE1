<template>
  <div class="student-list">
    <!-- Cabeçalho -->
    <SchoolHeader 
      title="Lista de Alunos" 
      backRoute="/" 
    />

    <!-- Tabela de Alunos -->
    <CrudAluno 
      :students="students" 
      @edit-student="editAluno" 
      @delete-student="deleteStudent" 
    />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';  // Importando o useRouter para navegação
import axios from 'axios';  // Importando o axios para fazer as requisições HTTP
import CrudAluno from '../../components/CrudAluno.vue';  // Corrigindo o nome do componente
import SchoolHeader from '../../components/SchoolHeader.vue';  // Certificando-se de que o nome do componente está correto

export default {
  components: {
    CrudAluno,  // Usando o nome correto do componente
    SchoolHeader,  // Usando o nome correto do componente
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    // Método para buscar os alunos
    async fetchStudents() {
      try {
        const response = await axios.get('http://localhost:8081/student');
        this.students = response.data;
      } catch (error) {
        console.error("Erro ao buscar Alunos:", error);
      }
    },
    goBack() {
      console.log("Voltando à tela anterior...");
    },
    editAluno(studentId) {
      // Usando o Vue Router para navegar para a página de edição
      this.$router.push({ name: 'editAluno', params: { id: studentId } });
    },
    deleteStudent(studentId) {
      console.log('Apagar aluno ${studentId}');
    },
    createStudent() {
      this.$router.push({ name: 'studentCreate' });
    }
  },
  mounted() {
    // Chamando o método para buscar os alunos quando o componente for montado
    this.fetchStudents();
  },
};
</script>

<style scoped>
.student-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.create-student-button {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}

.create-student-button button {
  padding: 12px 25px;
  font-size: 1.2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.create-student-button button:hover {
  background-color: #45a049;
}
</style>