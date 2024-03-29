<template>
  <div class="bg-esprilca-800 py-12 px-36 text-white flex flex-col gap-9">
    <section class="flex justify-between items-center">
      <div class="flex flex-col gap-8">
        <Nuxtlink class="w-[170px]" to="/">
          <img src="/assets/img/logo-light.png" alt="logo" />
        </Nuxtlink>
        <p class="font-light text-xs">
          GRUPO ESPRILCA, Bosque del Hatillo,<br />
          Caracas 1083, Miranda
        </p>
      </div>
      <div class="flex gap-24">
        <div class="flex flex-col gap-2">
          <h1 class="uppercase text-[10px]">Sobre</h1>
          <ul class="font-light text-sm">
            <li><NuxtLink to="/servicios">Servicios</NuxtLink></li>
            <li><NuxtLink to="">Sobre Nosotros</NuxtLink></li>
            <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="uppercase text-[10px]">Compañia</h1>
          <ul class="font-light text-sm">
            <li><NuxtLink to="/clientes">Clientes</NuxtLink></li>
            <li><NuxtLink to="/novedades">Novedades</NuxtLink></li>
          </ul>
        </div>
      </div>
    </section>
    <hr />
    <section class="flex flex-col gap-8 items-center">
      <div id="social-media" class="flex gap-6">
        <a href="" target="_blank" class="transition-all hover:-translate-y-1">
          <Icon class="" name="ic:baseline-whatsapp" size="25px"> </Icon>
        </a>
        <a href="" target="_blank" class="transition-all hover:-translate-y-1">
          <Icon class="" name="mdi:instagram" size="25px"> </Icon>
        </a>
        <a href="" target="_blank" class="transition-all hover:-translate-y-1">
          <Icon class="" name="ic:baseline-facebook" size="25px"> </Icon>
        </a>
        <a href="" target="_blank" class="transition-all hover:-translate-y-1">
          <Icon class="" name="ri:twitter-x-fill" size="25px"> </Icon>
        </a>
        <a href="" target="_blank" class="transition-all hover:-translate-y-1">
          <Icon class="" name="mdi:linkedin" size="25px"> </Icon>
        </a>
      </div>
      <p class="font-light text-center text-xs">
        © {{ new Date().getFullYear() }} Grupo Esprilca - Todos los derechos
        reservados
      </p>
    </section>
  </div>
</template>
