<template>
  <div>
    <v-form v-model="adding.valid">
      <v-card flat>
        <v-card-title>imput</v-card-title>
        <v-card-text>
        <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="adding.price"
              hint='Price ID of your Stripe project starting with which is "price_"'
              label="Price ID"
              :rules="rules.priceRules"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="adding.quantity"
              hint='Quantity to buy'
              label="Quantity"
              :rules="rules.quantityRules"
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn
              @click="addPriceQuantity"
              :disabled="!adding.valid"
            >
              add
            </v-btn>
          </v-col>
        </v-row>
        </v-container>
        </v-card-text>
      </v-card>
    </v-form>
    <v-card flat>
      <v-card-title> amount </v-card-title>
      <v-card-text>
    <v-container v-for="(priceQuantity, index) in priceQuantityArray" :key="index">
      <v-row>
        <v-col>
          {{priceQuantity.price}}
        </v-col>
        <v-col cols="2">
          {{priceQuantity.quantity}}
        </v-col>
        <v-col cols="1">
          <v-btn
            x-small
            @click="delPriceQuantity(index)"
          >
            del
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    </v-card-text>
    </v-card>
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
      adding: {
        price: "",
        quantity: 0,
        valid: false
      },
      rules: {
        priceRules: [
          v => !!v || 'Price ID is required',
          (v) => /^price_.+$/.test(v) || "Should start with price_.",
        ],
        quantityRules: [
          v => !!v || 'Quantity is required',
          (v) => /^[0-9]+$/.test(v) || "Should be number.",
        ]

      }
    }
  },
  methods: {
    addPriceQuantity(){
      this.priceQuantityArray.push({price: this.adding.price, quantity: this.adding.quantity})
    },
    delPriceQuantity(index){
      this.priceQuantityArray.splice(index, 1)
    },
  },
}
</script>
