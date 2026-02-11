<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
const isAuthenticated = false

const logout = () => {
  router.push('/login')
}
</script>

<template>
  <header v-if="$route.path !== '/login'">
    <div class="wrapper">
      <nav>
        <div class="nav-links">
          <RouterLink to="/listar">Estudiantes</RouterLink>
          <RouterLink to="/crear">Materias</RouterLink>
          <RouterLink to="/crear">Matriculas</RouterLink>
        </div>
        <div class="nav-auth">
          <a v-if="isAuthenticated" @click="logout" class="logout-btn">Salir</a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  background-color: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  padding: 1rem 0;
  margin-bottom: 2rem;
}

.wrapper {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

nav a {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

nav a.router-link-active {
  background-color: hsla(160, 100%, 37%, 0.1);
  color: hsla(160, 100%, 37%, 1);
}

nav a:hover {
  background-color: var(--color-background-mute);
}

.logout-btn {
  cursor: pointer;
  color: #ef4444;
}

.logout-btn:hover {
  background-color: rgba(239, 68, 68, 0.1);
}
</style>
