<template>
    <div class="home">
        <homehead></homehead>
        <shopclass></shopclass>
        <nearshop></nearshop>
    </div>
</template>
<script>
import homehead from './homehead'
import shopclass from './shopclass'
import nearshop from './nearshop'
export default{
  data () {
    return {
    }
  },
  components: {
    homehead,
    shopclass,
    nearshop
  }
}
</script>
<style scoped>
.home{
  width:100%;
}
</style>
