<template>
    <ListarGenerico titulo="Estudiantes" :datos="estudiantes" :columnas="columnas" />
</template>

<script>
import ListarGenerico from '../components/ListarGenerico.vue'
import { consultarTodosFachada } from '../services/estudianteClient';
export default {
    name: 'ListarEstudiantes',
    components: {
        ListarGenerico
    },
    data() {
        return {
            estudiantes: [],
            columnas: [
                { key: 'nombre', label: 'Nombre' },
                { key: 'apellido', label: 'Apellido' },
                { key: 'correo', label: 'Correo' },
                { key: 'genero', label: 'Género' },
                { key: 'fechaNacimiento', label: 'Fecha Nacimiento' },
                { key: 'telefono', label: 'Teléfono' },
                { key: 'cedula', label: 'Cédula' }
            ]
        }
    },
    async created() {
        this.estudiantes = await consultarTodosFachada();
    }
}
</script>