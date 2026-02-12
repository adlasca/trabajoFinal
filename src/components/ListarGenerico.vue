<template>
    <div class="list-container">
        <div class="header-actions">
            <h1>{{ titulo }}</h1>
            <input type="text" v-model="busqueda" placeholder="Buscar" @keyup.enter="buscar">
            <button @click="buscar" class="btn-primary">Buscar</button>
            <button @click="actualizar" class="btn-primary">Actualizar</button>
            <router-link to="/crear" class="btn-primary">
                Nuevo
            </router-link>
        </div>

        <div v-if="datos.length === 0" class="empty-state">
            <p>No hay datos registrados.</p>
        </div>

        <div v-else class="table-responsive">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th v-for="columna in columnas" :key="columna.key">
                            {{ columna.label }}
                        </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dato in datos" :key="dato.id">
                        <td v-for="columna in columnas" :key="columna.key">
                            {{ dato[columna.key] }}
                        </td>
                        <td class="actions-cell">
                            <!-- Placeholder for edit/delete functionality if needed later -->
                            <button @click="$router.push({ name: rutaModificar, params: { id: dato.id } })"
                                class="btn-primary-sm">Editar</button>
                            <button @click="eliminar(dato.id)" class="btn-danger-sm">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListarGenerico',
    data() {
        return {
            busqueda: '',
        }
    },
    props: {
        titulo: String,
        datos: Array,
        columnas: Array,
        ruta: String,
        rutaModificar: String
    },

}
</script>

<style scoped>
.list-container {
    padding: 2rem;
}

.header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.header-actions h1 {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--color-heading);
}

.header-actions input {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-mute);
    color: var(--color-text);
    font-size: 1rem;
}

.header-actions input:focus {
    outline: none;
    border-color: var(--vt-c-indigo);
    box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
}

.btn-primary {
    padding: 0.5rem 1rem;
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.2s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
}

.btn-primary:hover {
    background-color: hsla(160, 100%, 32%, 1);
}

.btn-primary-sm {
    padding: 0.25rem 0.5rem;
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s ease;
}

.btn-primary-sm:hover {
    background-color: hsla(160, 100%, 32%, 1);
}

.btn-danger-sm {
    padding: 0.25rem 0.5rem;
    background-color: #ef4444;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s ease;
    margin-left: 0.5rem;
}

.btn-danger-sm:hover {
    background-color: #dc2626;
}

.empty-state {
    text-align: center;
    padding: 3rem;
    color: var(--color-text);
    opacity: 0.7;
}

.table-responsive {
    overflow-x: auto;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    font-size: 0.9rem;
    min-width: 600px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;
}

.styled-table thead tr {
    background-color: hsla(160, 100%, 37%, 1);
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
    border-bottom: 1px solid var(--color-border);
}

.styled-table tbody tr {
    background-color: var(--color-background-soft);
    color: var(--color-text);
}

.styled-table tbody tr:hover {
    background-color: var(--color-background-mute);
}

.styled-table tbody tr:last-child {
    border-bottom: 2px solid hsla(160, 100%, 37%, 1);
}

.actions-cell {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
}

@media (max-width: 600px) {
    .header-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .header-actions h1 {
        font-size: 1.5rem;
    }

    .styled-table {
        font-size: 0.8rem;
    }

    .styled-table th,
    .styled-table td {
        padding: 8px 10px;
    }
}
</style>