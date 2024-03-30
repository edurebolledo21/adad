<template>
  <div>
    <div class="gap-6 absolute z-10 flex flex-col text-white top-[37%] left-32">
      <h1 class="font-medium text-5xl uppercase">
        Seguridad y Salud Laboral,<br />
        GRUPO ESPRILCA
      </h1>
      <p class="font-light text-xl">
        Con mas de 20 años de experiencia local e internacional y continuo
        aprendizaje, te ofrecemos <br />
        servicios integrales de consultoría, asesoría y además formación.
      </p>
    </div>
    <swiper
      :loop="true"
      :effect="fade"
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="relative"
    >
      <swiper-slide
        class="header-background-1 header-background"
      ></swiper-slide>
      <swiper-slide
        class="header-background-2 header-background"
      ></swiper-slide>
      <swiper-slide
        class="header-background-3 header-background"
      ></swiper-slide>
      <swiper-slide
        class="header-background-4 header-background"
      ></swiper-slide>
      <swiper-slide
        class="header-background-5 header-background"
      ></swiper-slide>
    </swiper>
  </div>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.header-background {
  margin: 0;
  padding: 0;
  height: 98dvh;
  display: flex;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-color: black;
}
.header-background-1 {
  background-image: linear-gradient(
      180deg,
      rgba(4, 35, 32, 0.64),
      rgba(0, 119, 109, 0.3)
    ),
    url("~/assets/img/slide1.jpg");
}
.header-background-2 {
  background-image: linear-gradient(
      180deg,
      rgba(4, 35, 32, 0.64),
      rgba(0, 119, 109, 0.3)
    ),
    url("~/assets/img/slide2.png");
}
.header-background-3 {
  background-image: linear-gradient(
      180deg,
      rgba(4, 35, 32, 0.64),
      rgba(0, 119, 109, 0.3)
    ),
    url("~/assets/img/slide3.jpg");
}
.header-background-4 {
  background-image: linear-gradient(
      180deg,
      rgba(4, 35, 32, 0.64),
      rgba(0, 119, 109, 0.3)
    ),
    url("~/assets/img/slide4.jpg");
}
.header-background-5 {
  background-image: linear-gradient(
      180deg,
      rgba(4, 35, 32, 0.64),
      rgba(0, 119, 109, 0.3)
    ),
    url("~/assets/img/slide5.jpg");
}

.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-size: 22px;
  color: white;
  border-radius: 100%;
  transition: 0.3s ease-in-out;
  width: 43px;
  height: 43px;
  text-align: center;
  margin-left: 2rem;
  margin-right: 2rem;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #ffffff42;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper—slide-active {
  animation: fadeInUp 1s;
}
</style>
