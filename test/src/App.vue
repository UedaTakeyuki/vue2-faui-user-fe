<template>
  <v-app>
    <!-- Navigation bar -->
    <Navbar :links="links"/>

    <!-- Login hidden component -->
    <Login/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */
import {AccountRoutes as AccountRoutes} from '../../src/build-entry'    // If firebase is from npm or yarn
import {Login as Login} from '../../src/build-entry'
import {Navbar} from 'vuetify-nav2'
import { mdiHome, /*mdiArrowLeft*/} from "@mdi/js";

export default {
  components: { Navbar, Login},
  data: () => ({
    links: [
      { icon: mdiHome, text: 'Home', route: '/'},
      { icon: '', text: 'About', route: '/about'},
      AccountRoutes.menuItem,
    ]
  }),
  mounted(){
    console.log("links",this.links)
  }
}
</script>