<template>
    <ModificarGenerico :datos="datos" :estudiante="estudiante" :rutaModificar="rutaModificar" />
</template>

<script>
import ModificarGenerico from '../components/ModificarGenerico.vue'
import { actualizarPorIdFachada } from '../services/estudianteClient'
export default {
    name: 'ModificarEstudiantes',
    components: {
        ModificarGenerico
    },
    data() {
        return {
            datos: [
                { key: 'nombre', label: 'Nombre' },
                { key: 'apellido', label: 'Apellido' },
                { key: 'correo', label: 'Correo' },
                { key: 'genero', label: 'Género' },
                { key: 'fechaNacimiento', label: 'Fecha Nacimiento' },
                { key: 'telefono', label: 'Teléfono' },
                { key: 'cedula', label: 'Cédula' }
            ],
            estudiante: {},
            rutaModificar: 'modificarEstudiantes'
        }
    },
    mounted() {
        this.estudiante = actualizarPorIdFachada(this.$route.params.id);
    }
}
</script>