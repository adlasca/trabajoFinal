import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/listar',
    name: 'listar',
    component: () => import('../views/ListarView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/listarEstudiantes',
    name: 'listarEstudiantes',
    component: () => import('../views/ListarEstudiantes.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/crear',
    name: 'crear',
    component: () => import('../views/CrearView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/modificarEstudiantes/:id',
    name: 'modificarEstudiantes',
    component: () => import('../views/ModificarEstudiantes.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem("token");
    if (!token) {
      next({ name: "login" })
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router

