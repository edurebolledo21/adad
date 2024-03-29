<template>
  <nav
    class="bg-slate-700 flex justify-between items-center fixed w-full text-white py-4 px-20"
  >
    <NuxtLink class="w-[170px]" to="/">
      <img src="/assets/img/logo-dark.png" alt="logo" />
    </NuxtLink>
    <div>
      <ul class="flex gap-4 text-sm font-medium">
        <li v-for="{ title, url } in links">
          <NuxtLink
            :to="url"
            class="hover:bg-white/20 py-2 px-6 flex transition-all duration-500 items-center rounded-xl"
            >{{ title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
const links = [
  { title: "Inicio", url: "/" },
  { title: "Servicios", url: "/servicios" },
  { title: "Novedades", url: "/novedades" },
  { title: "Contacto", url: "/contacto" },
  { title: "Clientes", url: "/clientes" },
];
</script>
