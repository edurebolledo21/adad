<template>
  <nav
    class="flex top-0 z-20 justify-between items-center fixed w-full py-4 px-20"
    :class="
      y > 60
        ? ' bg-teal-600/50 py-5 text-white shadow-md backdrop-blur-md'
        : ' py-4 text-white'
    "
  >
    <NuxtLink class="w-[170px]" to="/">
      <img
        class="transition-all"
        :class="y > 100 ? 'w-[150px]' : 'w-[170px]'"
        src="/assets/img/logo-light.png"
        alt="logo"
      />
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
import { useWindowScroll } from "@vueuse/core";
const { x, y } = useWindowScroll();

const links = [
  { title: "Inicio", url: "/" },
  { title: "Servicios", url: "/servicios" },
  { title: "Novedades", url: "/novedades" },
  { title: "Contacto", url: "/contacto" },
  { title: "Clientes", url: "/clientes" },
];
</script>
