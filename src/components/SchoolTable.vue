<template>
    <div class="school-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Localização</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="school in schools" :key="school.id">
            <td>{{ school.id }}</td>
            <td>{{ school.name }}</td>
            <td>{{ school.location }}</td>
            <td class="actions">
              <button class="btn create" @click="$emit('create-student', school.id)">Aluno</button>
              <button class="btn edit" @click="$emit('edit-school', school.id)">Editar</button>
              <button class="btn delete" @click="$emit('delete-school', school.id)">Apagar</button>
            </td>
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
  };
  </script>
  
  <style scoped>
  .school-table {
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  th, td {
    text-align: left;
    padding: 12px 16px;
  }
  
  th {
    background: #f5f5f5;
    font-weight: 600;
  }
  
  tr:nth-child(even) {
    background: #f9f9f9;
  }
  
  .actions {
    display: flex;
    gap: 10px;
  }
  
  .btn {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .btn.create {
    background: #4CAF50;
    color: white;
  }
  
  .btn.edit {
    background: #FFC107;
    color: white;
  }
  
  .btn.delete {
    background: #F44336;
    color: white;
  }
  
  .btn:hover {
    opacity: 0.9;
  }
  </style>
  