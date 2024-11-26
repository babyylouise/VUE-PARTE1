import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';  // Certifique-se de que o caminho esteja correto
import Escolas from '@/views/Escolas.vue';
import Alunos from '@/views/Alunos.vue';
import SchoolEdit from '@/views/SchoolEdit.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,  // Rota para a página inicial
  },
  {
    path: '/escolas',
    name: 'Escolas',
    component: Escolas,  // Certifique-se de que você tenha o componente Escolas.vue
  },
  {
    path: '/alunos',
    name: 'Alunos',
    component: Alunos,  // Certifique-se de que você tenha o componente Alunos.vue
  },
  {
    path: '/escolas/editar/:id',  // Definindo a rota de edição com parâmetro :id
    name: 'SchoolEdit',
    component: SchoolEdit,  // Componente que será mostrado na edição
    props: true,  // Permite passar o id como uma prop
  }
  
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

