<template>
  <div class="manga">
    <v-container>
      <h1>Series de Manga</h1>
       <v-row>
        <v-col>
          <h1>{{mangas}}</h1>
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
