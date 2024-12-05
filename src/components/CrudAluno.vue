<template>
  <div class="create-student-button">
      <button @click="createStudent">Inserir novo Aluno</button>
    </div>

  <div class="student-table">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Gênero</th>
          <th>Idade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.gender }}</td>
          <td>{{ student.age }}</td>
          <td class="actions">
            <button class="btn edit" @click="$emit('edit-student', student.id)">Detalhes</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
import StudentInsert from "@/views/Student/StudentInsert.vue";

export default {
  props: {
    students: {
      type: Array,
      required: true,
    },
  },
  methods: {
  createStudent(){
    this.$router.push({ name: 'StudentInsert'});
 },
  }
};
</script>

<style scoped>
.student-table {
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
.create-student-button {
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* Centralizando o botão */
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
  text-align: center;
  margin-top: 20px;
  
}
.create-student-button button:hover{
  background-color: #45a049;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

i {
  font-size: 1.2rem;
}
</style>
