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
    path: '/modificar/:id',
    name: 'modificar',
    component: () => import('../views/ModificarView.vue'),
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
  if (to.meta.requiereAutorizacion) {
    /*Le envio a una pagina de login */

    const estaAutenticado = localStorage.getItem("estaAutenticado");
    const token = localStorage.getItem("token");
    if (!estaAutenticado) {
      console.log("redirige a login")
      next({ name: "login" })
    } else {
      console.log("sin validaciones")
      next();
    }
  } else {
    /*Le dejo sin validaciones*/
    console.log("sin validaciones")
    next()
  }
});

export default router

