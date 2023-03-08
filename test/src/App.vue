<template>
  <v-app>
    <!-- Navigation bar -->
    <Navbar :links="links"/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import {Navbar} from 'vuetify-nav2'
import { mdiHome, /*mdiArrowLeft*/} from "@mdi/js";

export default {
  components: { Navbar},
  data: () => ({
    links: [
      { icon: mdiHome, text: 'Home', route: '/'},
      { icon: '', text: 'About', route: '/abuot'},
    ]
  }),
}
</script>