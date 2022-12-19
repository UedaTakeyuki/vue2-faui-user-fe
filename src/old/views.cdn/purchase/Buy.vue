<template>
  <div
    :is="mainView"
    :URLofSessionID="this.baseURL + '/postforgetsessionid/%s' "
  />
</template>

<script>
import PurchaseBind from './PurchaseBind'
export default {
  components: {
    PurchaseBind
  },
  props:{
    mainView: {
      default: () => PurchaseBind,
    },
    baseURL: String,
  },
}
</script>
