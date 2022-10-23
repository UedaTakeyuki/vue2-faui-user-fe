<template>
  <div class="purchaseBind">
    {{priceQuantityArray}}
    <v-card>
      <v-card-title>
        Purchase view example
        <v-spacer/>
        <v-btn 
          x-small
          class="grey--text"
          to="/docs/users-manual/purchase/purchasebind"
        >
          guide
        </v-btn>
      </v-card-title>
      <v-card-text>
        Additional <span class="font-weight-bold">With Expiration</span> bind is available here. 
        The expiration is <span class="font-weight-bold">one year from activation</span> of this, and you can extend it.
      </v-card-text>

      <v-card-title>Price ID & Quantity</v-card-title>
      <v-card-text>
        <PriceQuantity
          :priceQuantityArray="priceQuantityArray"
        />
      </v-card-text>

      <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="cancel"
          >
            Cancel
          </v-btn>
          <v-spacer/>
          <v-btn
            color="primary"
            text
            @click="purchase"
          >
            Purchase
          </v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
/* eslint no-unused-vars: 0 */
//import firebase from "firebase/app";
//import "firebase/auth";
import PriceQuantity from './components/PriceQuantity'
import * as firebase from 'firebase'
import {loadStripe} from '@stripe/stripe-js';
var sprintf = require('sprintf-js').sprintf,
    vsprintf = require('sprintf-js').vsprintf

export default {
  components: {
    PriceQuantity
  },
  props:{
    message: {
      default: () => Vue.extend({template: '<v-card-text class="red--text">Once you delete this account, there is no going back. Please be certain.</v-card-text>'}),
    },
    URLofSessionID: String,
  },
  data(){
    return {
      priceQuantityArray: [],
    }
  },
  methods: {
    async purchase(){
      var user = firebase.auth().currentUser;
      if (user) {
        const idToken = await user.getIdToken()
        const url = sprintf(this.URLofSessionID, idToken)
        const res = await fetch(url, {
          method: "POST",
          body: this.makePurchaseSessionRequest(),
/*
          body: JSON.stringify({
            priceQuantityArray: [{PriceID: 'price_1KcLAqG8LX1Yc059OgCnZeyj', Quantity: 1}],
            //params: {}
          })
*/
        })
        if (res.status == 200) {
          const data = await res.json()
          // https://stackoverflow.com/questions/56200562/how-to-fix-response-type-cors-when-trying-to-create-payment-through-paypal
          console.log("data", data)
          this.stripe.redirectToCheckout({sessionId: data.sessionID /*response.data.SessionID*/})
        }
      }
    },
    cancel(){
      var user = firebase.auth().currentUser;
      if (user) {
        user.getIdToken(/* forceRefresh */ true).then((idToken) => {
          const url = sprintf('https://connect-srv.uedasoft.com/customerportal/%s', idToken)
          location.href = url
        });
      }
    },
    makePurchaseSessionRequest(){
      return JSON.stringify({
            priceQuantityArray: this.priceQuantityArray,
            //params: {}
          })
    }
  },
  async mounted() {
    this.stripe = await loadStripe(this.$stripe);
  },
}
</script>
