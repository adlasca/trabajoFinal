<template>
    <div class="list-container">
        <div class="header-actions">
            <h1>Lista de Estudiantes</h1>
            <input type="text" v-model="busqueda" placeholder="Buscar" @keyup.enter="buscar">
            <button @click="buscar" class="btn-primary">Buscar</button>
            <button @click="actualizar" class="btn-primary">Actualizar</button>
            <router-link to="/crear" class="btn-primary">
                + Nuevo Estudiante
            </router-link>
        </div>

        <div v-if="estudiantes.length === 0" class="empty-state">
            <p>No hay estudiantes registrados.</p>
        </div>

        <div v-else class="table-responsive">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Género</th>
                        <th>Fecha Nacimiento</th>
                        <th>Teléfono</th>
                        <th>Cédula</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="estudiante in estudiantes" :key="estudiante.id">
                        <td>{{ estudiante.nombre }}</td>
                        <td>{{ estudiante.apellido }}</td>
                        <td>{{ estudiante.correo }}</td>
                        <td>{{ estudiante.genero }}</td>
                        <td>{{ estudiante.fechaNacimiento }}</td>
                        <td>{{ estudiante.telefono }}</td>
                        <td>{{ estudiante.cedula }}</td>
                        <td class="actions-cell">
                            <!-- Placeholder for edit/delete functionality if needed later -->
                            <button @click="editar(estudiante.id)" class="btn-primary-sm">Editar</button>
                            <button @click="eliminar(estudiante.id)" class="btn-danger-sm">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { consultarTodosFachada } from '../services/estudianteClient';
import { consultarPorIdFachada } from '../services/estudianteClient';

export default {
    name: 'Listar',
    data() {
        return {
            estudiantes: [],
            busqueda: '',
            materias: [],
            matriculas: [],
            mostrarMaterias: false,
            mostrarMatriculas: false,
            mostrarEstudiantes: true
        }
    },
    async created() {
        this.estudiantes = await consultarTodosFachada();

    },
    methods: {
        async eliminar(id) {
            if (confirm('¿Estás seguro de eliminar este estudiante?')) {
                await consultarTodosFachada(id);
                this.estudiantes = await consultarTodosFachada(); // Refresh list
            }
        },
        async editar(id) {
            this.$router.push(`/modificar/${id}`);
        },
        async buscar() {
            this.estudiantes = [];
            this.estudiantes.push(await consultarPorIdFachada(this.busqueda));
        },
        async actualizar() {
            this.estudiantes = await consultarTodosFachada();
            this.busqueda = '';
        }
    }
}
</script>

<style scoped>
.list-container {
    padding: 1rem;
    max-width: 1000px;
    margin: 0 auto;
}

.header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

h1 {
    color: var(--color-heading);
    font-weight: 600;
    margin: 0;
}

.empty-state {
    text-align: center;
    padding: 3rem;
    background-color: var(--color-background-soft);
    border-radius: 8px;
    color: var(--vt-c-text-light-2);
}

.table-responsive {
    overflow-x: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    background-color: var(--color-background);
    min-width: 600px;
    /* Ensure readability on small screens */
}

.styled-table thead tr {
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid var(--color-border);
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: var(--color-background-soft);
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid hsla(160, 100%, 37%, 1);
}

.styled-table tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.05);
    /* Subtle hover effect */
}

.actions-cell {
    text-align: center;
}

/* Button Styles */
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

.btn-danger-sm {
    background-color: #ef4444;
    color: white;
    border: none;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.8rem;
    transition: background-color 0.2s;
}

.btn-danger-sm:hover {
    background-color: #dc2626;
}

input {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
}

@media (prefers-color-scheme: dark) {
    .styled-table tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
}
</style>
