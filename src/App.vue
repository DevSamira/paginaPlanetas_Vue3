<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeTitle from './components/HomeTitle.vue'
import Footer from './components/Footer.vue'
import ModalPlanets from './components/ModalPlanets.vue'
</script>

<template>
  <nav>
    <n-button class="homeBtn">
      <RouterLink to="/" id="route">Home</RouterLink>
    </n-button>
    <ModalPlanets />
  </nav>
  <body>
    <div class="background">
      <div class="homeTitle">
        <HomeTitle />
      </div>
      <div class="video">
        <video autoplay muted loop>
          <source src="./assets/Free to Use Space Footage (1080p 60FPS).mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </body>

  <RouterView />
  <div class="footer">
    <Footer />
  </div>
</template>

<style scoped>
* {
  font-family: sans-serif;
}
body {
  width: 80%;
  margin: auto;
}
.homeTitle {
  margin-top: 5rem;
}
nav {
  backdrop-filter: blur(5px);
  width: 100%;
  -webkit-backdrop-filter: blur(5px);
  padding: 1rem;
  display: flex;
  justify-content: space-evenly;
  z-index: 300;
  position: fixed;
  top: 0;
}
nav:hover {
  transition: 0.7s;
  box-shadow: 0 4px 30px rgba(145, 140, 140, 0.253);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.089);
}

#route {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
.homeBtn {
  margin-left: 50%;
}
.background video {
  z-index: -2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.footer {
  bottom: 0;
  margin-bottom: -1rem;
  margin-top: 2rem;
  width: 100%;
  left: 0;
}
</style>
