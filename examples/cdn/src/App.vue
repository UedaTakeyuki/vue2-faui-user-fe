<template>
  <v-app>
    <!-- Navigation bar -->
    <Navbar titleStr="Demo App" :links="links"/>

    <!-- Login hidden component -->
    <Login/>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
/* eslint-disable */
import {AccountRoutes as AccountRoutes} from 'vue2-faui-user-fe'    // If firebase is from npm or yarn
import {Login as Login} from 'vue2-faui-user-fe'
import {Navbar} from 'vuetify-nav2'
import {mdiHome, mdiAccount} from "@mdi/js"

AccountRoutes.menuItem.icon = mdiAccount // default if for mdi, so need to set mdiSVG icon when using mdiSVG

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