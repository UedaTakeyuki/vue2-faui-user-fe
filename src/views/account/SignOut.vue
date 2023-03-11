<template>
  <v-card>
    <v-card-title>
      sign out
      <v-spacer/>
      <v-btn
        x-small
        class="grey--text"
        to="/docs/users-manual/account/signout"
      >
        guide
      </v-btn>
    </v-card-title>
    <v-card-text>Sign out from this account.</v-card-text>
    <v-card-actions>
      <!-- Floating Action Button -->
      <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="primary"
        @click="logout"
      >
        <!--<v-icon>exit_to_app</v-icon>-->
        <SvgIconRoundExitToApp
          style="width: 70%; height: 70%;"
        />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Logout from "./Logout"
import SvgIconRoundExitToApp from '../../components/SvgIconRoundExitToApp.vue'

export default {
  components: {SvgIconRoundExitToApp},
  mixins: [Logout],
}
</script>