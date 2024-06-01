<script setup lang="ts">
</script>

<template>
  <div class="">

        <ul class="bg-cyan-950 text-lime-500 font-bold font-mono p-10 mb-4 flex row w-full gap-4">
          <li>
            <NuxtLink href="/login" class="">Login</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/register" class="">Register</NuxtLink>
          </li>
        </ul>

    <h2 class="font-medium font-sans ">Guest Layout</h2>
      <slot />

  </div>

</template>

<style scoped>

</style>