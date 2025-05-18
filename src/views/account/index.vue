<script setup lang="ts">
// import axios from 'axios'

// import { ref } from 'vue'
import { googleSdkLoaded } from 'vue3-google-login'

// Services
import loginService from '@/core/services/login.services'

const login = () => {
  googleSdkLoaded((google) => {
    google.accounts.oauth2
      .initCodeClient({
        client_id: import.meta.env.VITE_OAUTH_CLIENT_ID,
        scope: 'email profile openid',
        redirect_uri: import.meta.env.VITE_REDIRECT_URL,
        callback: async (response) => {
          if (response.code) {
            const res = await loginService(response)

            console.log('res', res)
          }
        },
      })
      .requestCode()
  })
}
</script>

<template>
  <main :class="$style['container']">
    <h1>Dar click para iniciar sesión con Google</h1>
    <aside :class="$style['google-container']" v-on:click="login">
      <img src="@/assets/images/google-icon.webp" />
      <p>Ingresar con Google</p>
    </aside>
  </main>
</template>

<style module>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 15px;
  height: 70vh;
  gap: 27px;
}

.container h1 {
  font-weight: 600;
  margin: 0px;
  text-decoration: underline;
  text-align: center;
  font-size: 21px;
}

.google-container {
  background: white;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  border: 1px solid #1a1a32;
  border-radius: 6px;
  cursor: pointer;
  gap: 5px;
}

.google-container img {
  width: 50px;
  height: 50px;
}

.google-container p {
  color: #1a1a32;
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
}
</style>
