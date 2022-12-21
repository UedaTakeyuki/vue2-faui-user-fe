//import * as firebase from 'firebase'

export default {
  methods: {
    getIdToken: async function() {
      var user = this.$firebase.auth().currentUser;
      if (user){
        const idToken = await user.getIdToken()
        return idToken
      } else {
        return ""
      }
    }
  }
}