<script>
import Sobre from './Sobre.vue'

export default {
  components: { Sobre },
  setup() {
    return {}
  }
}
</script>

<template>
  <div>
    <h1>Explore o que puder</h1>
    <h3>Você é <strong>livre</strong>...</h3>
    <p>CONHEÇA O SISTEMA SOLAR</p>
  </div>
  <div class="arrow">
    <img
      src="https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png"
      alt="seta virada para baixo"
    />
  </div>
  <div class="sobre">
    <sobre />
  </div>
</template>

<style scoped>
div {
  color: #fff;
  text-shadow: 2px 2px 6px #000000;
  text-align: center;
}
h1 {
  font-size: 3rem;
}
h3 {
  font-size: 1.7rem;
}
h3 strong {
  color: aqua;
}
p {
  font-size: 4rem;
  border: 2px solid aqua;
  display: inline;
  padding: 1rem;
}
p:hover {
  transition: 0.7s ease-in-out;
  border: 2px solid green;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
}
.arrow {
  animation: slide-out-bottom 5s infinite;
  z-index: 200;
}

.arrow:hover {
  cursor: pointer;
}
.arrow img {
  width: 4rem;
}

@keyframes slide-out-bottom {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(100px);
    opacity: 0;
  }
}

.sobre {
  margin-top: 10rem;
}
</style>
