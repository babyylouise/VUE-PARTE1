<template>
  <header class="school-header">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
    </div>
    <div class="actions">
      <button @click="onCreate" class="btn create">
        <i class="fas fa-plus"></i> Criar
      </button>
      <button @click="onEdit" class="btn edit">
        <i class="fas fa-pen"></i> Editar
      </button>
      <button @click="onDelete" class="btn delete">
        <i class="fas fa-trash"></i> Apagar
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Gerenciamento",
    },
    subtitle: {
      type: String,
      required: false,
      default: "Organize tudo de forma eficiente.",
    },
  },
  emits: ["create", "edit", "delete"],
  methods: {
    onCreate() {
      this.$emit("create");
    },
    onEdit() {
      this.$emit("edit");
    },
    onDelete() {
      this.$emit("delete");
    },
  },
};
</script>

<style scoped>
/* Fontes modernas */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Pacifico&display=swap');

/* Cabeçalho geral */
.school-header {
  background: linear-gradient(135deg, #6C63FF, #8490F7);
  color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.header-content {
  margin-bottom: 20px;
}

.school-header h1 {
  font-family: 'Pacifico', cursive;
  font-size: 2.5rem;
  margin: 0;
}

.subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  margin: 5px 0;
  opacity: 0.85;
}

/* Ações (botões) */
.actions {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  padding: 12px 25px;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn.create {
  background: #4CAF50;
}

.btn.edit {
  background: #FFC107;
}

.btn.delete {
  background: #F44336;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Ícones */
i {
  font-size: 1.2rem;
}
</style>
