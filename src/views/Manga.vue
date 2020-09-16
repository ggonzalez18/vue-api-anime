<template>
  <div class="manga">
    <v-container>
       <v-row>
         <v-col>
      <h1>Contenido de Manga</h1>
      <h1>{{mangas.results}}</h1>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  created() {
    this.getMangas()
  },
  computed: {
    ...mapState(['mangas', 'manga'])
  },
    methods: {
    ...mapActions(['getMangas', 'getManga']),
  }
}
</script>
