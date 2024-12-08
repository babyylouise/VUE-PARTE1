<template>
  <div class="school-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome Da Escola</th>
          <th>Nome do Diretor</th>
          <th>Localização</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="school in schools" :key="school.id">
          <td>{{ school.id }}</td>
          <td>{{ school.schoolName }}</td>
          <td>{{ school.principalName }}</td>
          <td>{{ school.location }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    schools: {
      type: Array,
      required: true,
    },
  },
  methods: {
    confirmDelete(schoolId) {
      const isConfirmed = window.confirm("Você tem certeza que deseja deletar esta escola?");
      if (isConfirmed) {
        // Emitir o evento de deletar a escola se o usuário confirmar
        this.$emit('delete-school', schoolId);
      } else {
        // Caso o usuário cancele, não fazemos nada, o prompt apenas desaparece
        console.log("A escola não foi deletada.");
      }
    }
  }
};
</script>

<style scoped>
.school-table {
  margin-top: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

th, td {
  text-align: left;
  padding: 15px;
  font-family: 'Roboto', sans-serif;
}

th {
  background: linear-gradient(135deg, #6C63FF, #8490F7);
  color: white;
  font-weight: 600;
}

tr:nth-child(even) {
  background: #f9f9f9;
}

.actions {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn.create {
  background: linear-gradient(135deg, #4CAF50, #66BB6A);
}

.btn.edit {
  background: linear-gradient(135deg, #FFC107, #FFCA28);
}

.btn.delete {
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