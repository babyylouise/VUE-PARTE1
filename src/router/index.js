import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';  // Certifique-se de que o caminho esteja correto
import Escolas from '@/views/School/Escolas.vue';
import SchoolEdit from '@/views/School/SchoolEdit.vue';
import SchoolCreate from '../views/School/SchoolCreate.vue';
import Alunos from '../views/Student/Alunos.vue';
import EditAluno from '../views/Student/editAluno.vue';
import StudentInsert from '../views/Student/StudentInsert.vue';



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
  },{
    path: '/escolas/create/',  // Definindo a rota de edição com parâmetro :id
    name: 'SchoolCreate',
    component: SchoolCreate,
    props: false,  // Permite passar o id como uma prop
  },{
    path: '/estudante/edit/:id',  // Definindo a rota de edição com parâmetro :id
    name: 'editAluno',
    component: EditAluno,
    props: true,  // Permite passar o id como uma prop
  },{
    path: '/estudante/create',  // Definindo a rota de edição com parâmetro :id
    name: 'StudentInsert',
    component: StudentInsert,
    props: false,  // Permite passar o id como uma prop
  }
  
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

