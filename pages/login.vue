<script setup lang="ts">
  import {useAuthStore} from "~/stores/useAuthStore";

  definePageMeta({
    layout: 'guest',
    middleware: ['guest'],
  });

  const authStore = useAuthStore();

  console.log(authStore);

  const form = ref({
    email: "test@example.com",
    password: "password",
  });
  const handleLogin = async () => {
    await authStore.login(form.value);

    // await useApi("/sanctum/csrf-cookie");
    // await useApi('/login', {method: 'POST', body: form.value})
    const user = await useApi('/api/user');

    console.log(user);
  }
  const getUser = async () => {
    await useApi("/sanctum/csrf-cookie");
    const user = await useApi('/api/user');

    console.log(user.data.value);
  }
</script>

<template>
  <div>Login page</div>
  <div>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-2 w-1/4 my-4 mx-4">
      <input v-model="form.email" type="email" class="text-black font-sans  roudend rounded-sm border border-solid-2 border-gray-400 p-2">
      <input v-model="form.password" type="password" class="text-black font-sans roudend rounded-sm border border-solid border-gray-400 p-2">
      <button class="text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded rounded-sm font-sans font-medium p-2" type="submit">Login</button>
      <button @click="getUser" class="text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded rounded-sm font-sans font-medium p-2" type="button">Get user</button>

    </form>
  </div>
</template>

<style scoped>

</style>