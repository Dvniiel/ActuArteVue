import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router';

interface Usuario {
  idUsuario: number;
  nombreUsuario: string;
  passwordUsuario: string;
  isAdmin: boolean;
}

export const useRegisterStore = defineStore('register', () => {
  const usuario = ref<Usuario | null>(null);

  async function registrarUsuario(nombreUsuario: string, passwordUsuario: string) {
    const datosRegistro = {
      isAdmin: false, // Asumimos que el nuevo usuario no es admin
      nombreUsuario: nombreUsuario,
      passwordUsuario: passwordUsuario,
      // idUsuario se omite ya que debería ser generado por el backend
    };

    try {
      const response = await axios.post('http://localhost:8003/Usuarios', datosRegistro);
      usuario.value = response.data; // La respuesta incluirá el idUsuario generado por el backend
      if (response) {
        router.push('/'); // Navegar a la página de inicio después del registro exitoso
      }
    } catch (error) {
      console.error('Error registrando el usuario:', error);
      // Aquí deberías manejar el error de manera apropiada
    }
  }

  return { usuario, registrarUsuario };
});
