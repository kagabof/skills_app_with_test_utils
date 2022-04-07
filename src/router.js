import {createRouter, createWebHistory}from 'vue-router'
import Skills from './components/SkillsComp.vue'
import About from './components/AboutComp.vue'

const routes = [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
