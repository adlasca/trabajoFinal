<template>
    <div class="login-container">
        <div class="login-card">
            <div class="login-header">
                <h1>Bienvenido</h1>
                <p>Ingresa tus credenciales para continuar</p>
            </div>
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="usuario">Usuario</label>
                    <input type="text" id="usuario" v-model="usuario" placeholder="Ej: admin"
                        :class="{ 'error': error }" required>
                </div>
                <div class="form-group">
                    <label for="contrasena">Contraseña</label>
                    <input type="password" id="contrasena" v-model="contrasena" placeholder="••••••••"
                        :class="{ 'error': error }" required>
                </div>
                <div v-if="error" class="error-message">
                    {{ error }}
                </div>
                <button type="submit" :disabled="loading" class="btn-login">
                    <span v-if="loading">Cargando...</span>
                    <span v-else>Iniciar Sesión</span>
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { loginFacade } from '../services/authUser';

export default {
    name: 'Login',
    data() {
        return {
            usuario: '',
            contrasena: '',
            loading: false,
            error: ''
        }
    },
    methods: {
        async handleLogin() {
            this.loading = true;
            this.error = '';

            try {
                localStorage.setItem('token', await loginFacade(this.usuario, this.contrasena));
                this.$router.push('/listar'); // Redirect to list view after successful login
            } catch (err) {
                this.error = err.message || 'Error al iniciar sesión';
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    /* Centered vertically in the available space */
    background-color: var(--color-background);
}

.login-card {
    background-color: var(--color-background-soft);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    width: 100%;
    max-width: 400px;
    border: 1px solid var(--color-border);
}

.login-header {
    text-align: center;
    margin-bottom: 2rem;
}

.login-header h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-heading);
    margin-bottom: 0.5rem;
}

.login-header p {
    color: var(--color-text);
    font-size: 0.9rem;
    opacity: 0.8;
}

.form-group {
    margin-bottom: 1.25rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--color-heading);
    font-size: 0.95rem;
}

input {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-mute);
    color: var(--color-text);
    font-size: 1rem;
    transition: all 0.2s ease;
}

input:focus {
    outline: none;
    border-color: var(--vt-c-indigo);
    /* Using defined branding color */
    box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
    /* Subtle focus ring */
    background-color: var(--color-background);
}

input.error {
    border-color: #ef4444;
}

.error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 0.5rem;
    background-color: rgba(239, 68, 68, 0.1);
    border-radius: 6px;
}

.btn-login {
    width: 100%;
    padding: 0.875rem;
    background-color: hsla(160, 100%, 37%, 1);
    /* Green from main.css */
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;
}

.btn-login:hover:not(:disabled) {
    background-color: hsla(160, 100%, 32%, 1);
    /* Slightly darker green */
}

.btn-login:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

@media (prefers-color-scheme: dark) {
    .login-card {
        background-color: #1e1e1e;
        /* Slightly lighter than the very dark bg */
    }
}
</style>