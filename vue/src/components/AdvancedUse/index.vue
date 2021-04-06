<template>
  <div>
    <p>Vue高级特性</p>
    <hr>
    <!-- 自定义v-model -->
    <p>{{name}}</p>
    <CustomVModel v-model="name"></CustomVModel>
  </div>
</template>

<script>
import CustomVModel from './CustomVModel.vue'
export default {
  components: { CustomVModel },
  data () {
    return {
      name: 'niuniu'
    }
  }
}
</script>
<style  scoped>
</style>
