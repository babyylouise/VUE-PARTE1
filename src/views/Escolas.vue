<template>
  <div class="school-list">
    <!-- Cabeçalho -->
    <SchoolHeader 
      title="Lista de Escolas" 
      backRoute="/" 
    />

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
import { useRouter } from 'vue-router'  // Importando o useRouter para navegação
import SchoolHeader from "@/components/SchoolHeader.vue";
import SchoolTable from "@/components/SchoolTable.vue";

export default {
  components: {
    SchoolHeader,
    SchoolTable,
  },
  data() {
    return {
      schools: [
        { id: 1, name: "Escola A", location: "Cidade X" },
        { id: 2, name: "Escola B", location: "Cidade Y" },
        { id: 3, name: "Escola C", location: "Cidade Z" },
      ],
    };
  },
  methods: {
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
  },
};
</script>

<style scoped>
.school-list {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}
</style>
