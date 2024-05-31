<script setup lang="ts">
</script>

<template>
  <div>

        <ul class="bg-zinc-950 text-yellow-500 font-bold p-10 mb-4">
          <li>
            <NuxtLink href="/login" class="">Login</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/register" class="">Register</NuxtLink>
          </li>
        </ul>

    <h2 class="font-medium ">Guest Layout</h2>
      <slot />

  </div>

</template>

<style scoped>

</style>