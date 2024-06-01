<script setup lang="ts">
  definePageMeta({
    layout: 'guest',
    middleware: ['guest'],
  });

  const form = ref({
    email: "test@example.com",
    password: "password",
  });
  const handleLogin = async () => {
    const csrf =  await $fetch("http://localhost:8000/sanctum/csrf-cookie", {
      credentials: "include",
    });

    console.log(csrf);

    const cookie = useCookie("XSRF-TOKEN");

    await $fetch("http://localhost:8000/login", {
      method: "POST",
      body: form.value,
      credentials: 'include',
      watch: false,
      headers: {
        'X-XSRF-TOKEN': cookie.value as string,
      } ,
    });

    const user = await $fetch("http://localhost:8000/api/user", {
      credentials: "include",
    })

    console.log(user);
  }
</script>

<template>
  <div>Login page</div>
  <div>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-2 w-1/4 my-4 mx-4">
      <input v-model="form.email" type="email" class="text-black font-sans  roudend rounded-sm border border-solid-2 border-gray-400 p-2">
      <input v-model="form.password" type="password" class="text-black font-sans  roudend rounded-sm border border-solid border-gray-400 p-2">
      <button class="text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-900 rounded rounded-sm font-sans font-medium p-2" type="submit">Login</button>
    </form>
  </div>
</template>

<style scoped>

</style>