<script>
export default {
  setup() {
    return {}
  }
}
</script>

<template>
  <div>
    <h1>Conheça um pouco sobre o sistema</h1>
    <div class="content">
      <p>
        Assista o vídeo do canal "Você Sabia?" ao lado para compreender um pouco mais sobre o
        sistema em que vivemos.
      </p>
      <iframe
        width="1200"
        height="315"
        src="https://www.youtube.com/embed/zLFvrurSef8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<style>
h1 {
  margin-bottom: 2rem;
}
.content {
  margin: auto;
  justify-content: space-evenly;
  max-width: 61rem;
  display: flex;
  align-items: top;
  margin-bottom: 2rem;
}

.content p {
  font-size: 1.3rem;
  text-align: left;
  background-color: #4a148c;
  height: 100%;
  padding: 1rem;
  box-shadow: 1px 1px 1px 1px #fff;
}
</style>
