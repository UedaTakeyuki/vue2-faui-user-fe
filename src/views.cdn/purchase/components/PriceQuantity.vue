<template>
  <div>
    <v-container v-for="(priceQuantity, index) in priceQuantityArray" :key="index">
      <v-row>
        <v-col>
          <v-text-field
            v-model="priceQuantity.price"
            hint='Price ID of your Stripe project starting with which is "price_"'
            label="Price ID"
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field
            v-model.number="priceQuantity.quantity"
            hint='Quantity to buy'
            label="Quantity"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-btn
            @click="addPriceQuantity"
          >
            add
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn
            @click="delPriceQuantity(index)"
          >
            del
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint no-unused-vars: 0 */
var sprintf = require('sprintf-js').sprintf,
    vsprintf = require('sprintf-js').vsprintf

export default {
  components: {
  },
  props:{
    priceQuantityArray: {
      default: [],
    },
  },
  data(){
    return {
    }
  },
  methods: {
    addPriceQuantity(){
      this.priceQuantityArray.push({price:"", quantity: 0})
    },
    delPriceQuantity(index){
      this.priceQuantityArray.splice(index, 1)
    },
  },
  async mounted() {
    this.stripe = await loadStripe(this.$stripe);
  },
}
</script>
