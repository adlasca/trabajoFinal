<template>
    <h1>Modificar</h1>
    <form @submit.prevent="handleUpdate">
        <div class="form-group">
            <label for="nombre">Nombre </label>
            <input type="text" id="nombre" v-model="estudiante.nombre">
        </div>
        <div class="form-group">
            <label for="apellido">Apellido</label>
            <input type="text" id="apellido" v-model="estudiante.apellido">
        </div>
        <div class="form-group">
            <label for="correo">Correo</label>
            <input type="email" id="correo" v-model="estudiante.correo">
        </div>
        <div class="form-group">
            <label for="genero">Género</label>
            <input type="text" id="genero" v-model="estudiante.genero">
        </div>
        <div class="form-group">
            <label for="fechaNacimiento">Fecha Nacimiento</label>
            <input type="date" id="fechaNacimiento" v-model="estudiante.fechaNacimiento" rquired>
        </div>
        <div class="form-group">
            <label for="telefono">Teléfono</label>
            <input type="text" id="telefono" v-model="estudiante.telefono">
        </div>
        <div class="form-group">
            <label for="cedula">Cédula</label>
            <input type="text" id="cedula" v-model="estudiante.cedula">
        </div>
        <button type="submit" class="btn-primary">Actualizar</button>
        <router-link to="/listar" class="btn-primary">Cancelar</router-link>
    </form>
</template>

<script>
import { actualizarPorIdFachada } from '@/services/estudianteClient';
import { consultarPorIdFachada } from '@/services/estudianteClient';
export default {
    name: 'Modificar',
    data() {
        return {
            estudiante: {
                nombre: '',
                apellido: '',
                correo: '',
                genero: '',
                fechaNacimiento: '',
                telefono: '',
                cedula: ''
            }
        }
    },
    async created() {


    },
    methods: {
        async handleUpdate() {
            await actualizarPorIdFachada(this.$route.params.id, this.estudiante);
            this.$router.push('/listar');
        }
    }
}
</script>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
}

.btn-primary {
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: hsla(160, 100%, 32%, 1);
}
</style>