<template>
  <div>
    {{metaDataArray}}
    <v-form v-model="adding.valid">
      <v-card flat>
        <v-card-title>input</v-card-title>
        <v-card-text>
        <v-container>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="adding.name"
              hint='Name of adding MetaData'
              label="Name"
              :rules="rules.nameRules"
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="adding.value"
              hint='Value of adding MetaData'
              label="Value"
              :rules="rules.valueRules"
            ></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn
              @click="add"
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
    <v-container v-for="(value, name) in metaDataArray" :key="name">
      <v-row>
        <v-col>
          {{name}}
        </v-col>
        <v-col cols="2">
          {{value}}
        </v-col>
        <v-col cols="1">
          <v-btn
            x-small
            @click="del(name)"
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
    metaDataArray: {
      default: {},
    },
  },
  data(){
    return {
      adding: {
        name: "",
        value: "",
        valid: false
      },
      rules: {
        nameRules: [
          v => !!v || 'Price ID is required',
        ],
        valueRules: [
          v => !!v || 'Quantity is required',
        ]

      }
    }
  },
  methods: {
    add(){
      this.$set(this.metaDataArray, this.adding.name, this.adding.value)
    },
    del(key){
      this.$delete(this.metaDataArray, key)
    },
  },
}
</script>
