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
      isAdmin: false,
      nombreUsuario: nombreUsuario,
      passwordUsuario: passwordUsuario,
    };

    try {
      const response = await axios.post('http://ad59716b915d74f619fe1dde0e2ca2c7-864283579.us-east-1.elb.amazonaws.com/Credenciales/register', datosRegistro);
      usuario.value = response.data;
      if (response) {
        router.push('/');
      }
    } catch (error) {
      console.error('Error registrando el usuario:', error);
    }
  }

  return { usuario, registrarUsuario };
});
