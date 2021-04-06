<template>
  <div>
    <input
      type="text"
      :value="text"
      @input="$emit('change',$event.target.value)"
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: 'text',
    event: 'change'
  },
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style  scoped>
</style>
