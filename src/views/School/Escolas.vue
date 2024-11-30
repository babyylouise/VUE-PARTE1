<template>
  <div class="school-list">
    <!-- Cabeçalho -->
    <SchoolHeader 
      title="Lista de Escolas" 
      backRoute="/" 
    />

    <!-- Botão para Criar Nova Escola -->
    <div class="create-school-button">
      <button @click="createSchool">Criar Nova Escola</button>
    </div>

    <!-- Tabela de Escolas -->
    <SchoolTable 
      :schools="schools" 
      @create-student="createStudent" 
      @edit-school="editSchool" 
      @delete-school="deleteSchool" 
    />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';  // Importando o useRouter para navegação
import axios from 'axios';  // Importando o axios para fazer as requisições HTTP
import SchoolHeader from "@/components/SchoolHeader.vue";
import SchoolTable from "@/components/SchoolTable.vue";

export default {
  components: {
    SchoolHeader,
    SchoolTable,
  },
  data() {
    return {
      schools: [],
    };
  },
  methods: {
    // Método para buscar as escolas
    async fetchSchools() {
      try {
        const response = await axios.get('http://localhost:8080/school');
        this.schools = response.data;
      } catch (error) {
        console.error("Erro ao buscar escolas:", error);
      }
    },
    goBack() {
      console.log("Voltando à tela anterior...");
    },
    createStudent(schoolId) {
      console.log(`Criar novo aluno para a escola ${schoolId}`);
    },
    editSchool(schoolId) {
      // Usando o Vue Router para navegar para a página de edição
      this.$router.push({ name: 'SchoolEdit', params: { id: schoolId } });
    },
    deleteSchool(schoolId) {
      console.log(`Apagar escola ${schoolId}`);
    },
    createSchool() {
      this.$router.push({ name: 'SchoolCreate' });
    }
  },
  mounted() {
    // Chamando o método para buscar as escolas quando o componente for montado
    this.fetchSchools();
  },
};
</script>

<style scoped>
.school-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.create-school-button {
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* Centralizando o botão */
}

.create-school-button button {
  padding: 12px 25px;
  font-size: 1.2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
}

.create-school-button button:hover {
  background-color: #45a049;
}
</style>
