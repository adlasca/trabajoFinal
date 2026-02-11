<template>
    <div class="create-container">
        <div class="create-card">
            <div class="create-header">
                <h1>Nuevo Estudiante</h1>
                <p>Complete el formulario para registrar un estudiante</p>
            </div>

            <form @submit.prevent="agregar">
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" v-model="student.nombre" placeholder="Ej: Juan" required>
                </div>

                <div class="form-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" v-model="student.apellido" placeholder="Ej: Perez" required>
                </div>

                <div class="form-row">
                    <div class="form-group half">
                        <label for="edad">Edad</label>
                        <input type="number" id="edad" v-model="student.edad" placeholder="Ej: 25" min="1" required>
                    </div>

                    <div class="form-group half">
                        <label for="genero">Género</label>
                        <select id="genero" v-model="student.genero" required>
                            <option value="" disabled>Seleccionar</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                </div>

                <div class="form-actions">
                    <router-link to="/listar" class="btn-secondary">Cancelar</router-link>
                    <button type="submit" class="btn-primary">Guardar Estudiante</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import StudentService from '../services/estudianteClient';

export default {
    name: 'Agregar',
    data() {
        return {
            student: {
                nombre: '',
                apellido: '',
                edad: '',
                genero: ''
            }
        }
    },
    methods: {
        agregar() {
            if (this.student.nombre && this.student.apellido && this.student.edad && this.student.genero) {
                StudentService.add(this.student);
                this.$router.push('/listar');
            } else {
                alert('Por favor complete todos los campos');
            }
        }
    }
}
</script>

<style scoped>
.create-container {
    display: flex;
    justify-content: center;
    padding: 2rem 1rem;
}

.create-card {
    background-color: var(--color-background-soft);
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    width: 100%;
    max-width: 500px;
    border: 1px solid var(--color-border);
}

.create-header {
    text-align: center;
    margin-bottom: 2rem;
}

.create-header h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-heading);
    margin-bottom: 0.5rem;
}

.create-header p {
    color: var(--color-text);
    opacity: 0.8;
    font-size: 0.9rem;
}

.form-group {
    margin-bottom: 1.25rem;
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-group.half {
    flex: 1;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--color-heading);
    font-size: 0.95rem;
}

input,
select {
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-mute);
    color: var(--color-text);
    font-size: 1rem;
    transition: all 0.2s ease;
}

input:focus,
select:focus {
    outline: none;
    border-color: var(--vt-c-indigo);
    box-shadow: 0 0 0 3px rgba(44, 62, 80, 0.1);
    background-color: var(--color-background);
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
}

.btn-primary {
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;
}

.btn-primary:hover {
    background-color: hsla(160, 100%, 32%, 1);
}

.btn-secondary {
    background-color: transparent;
    color: var(--color-text);
    padding: 0.75rem 1.5rem;
    border: 1px solid var(--color-border);
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: background-color 0.2s;
}

.btn-secondary:hover {
    background-color: var(--color-background-mute);
}
</style>
