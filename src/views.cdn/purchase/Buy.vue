<template>
  <div
    :is="mainView"
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
    }
  },
}
</script>
