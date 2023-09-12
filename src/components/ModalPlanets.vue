<template>
  <n-button id="route" @click="showModal = true"> Sistema solar </n-button>
  <n-modal v-model:show="showModal" class="my-10" width="70%">
    <v-card elevation="24" max-width="50rem" class="mx-auto" id="box">
      <v-carousel cycle height="300" hide-delimiter-background show-arrows="hover">
        <v-carousel-item v-for="(planet, i) in planets" :key="i">
          <v-sheet class="bg-black py-5" height="100%">
            <div class="text-center">
              <div class="text-h2">{{ planet.nome }}</div>
              <div class="d-flex" max-width="15rem">
                <v-card-text>Gravidade: {{ planet.gravidade }}</v-card-text>
                <br />
                <v-card-text>Raio: {{ planet.raio }}</v-card-text>
              </div>
              <v-img :src="planet.image" max-height="10rem"></v-img>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </n-modal>
</template>

<script>
import { defineComponent, ref } from 'vue'
import getApiData from '../model/connect'

export default defineComponent({
  data() {
    return {
      planets: [],
      showModal: ref(false)
    }
  },
  mounted() {
    this.getAllDatas()
  },
  methods: {
    async getAllDatas() {
      const data = await getApiData
      this.planets = data
    }
  }
})
</script>

<style scoped>
#route {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
#id {
  -webkit-box-shadow: 10px 10px 5px 0px rgb(255, 255, 255);
  -moz-box-shadow: 10px 10px 5px 0px rgb(255, 255, 255);
  box-shadow: 10px 10px 5px 0px rgb(255, 255, 255);
}
</style>
