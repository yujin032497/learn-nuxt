<template>
  <div class="input-wrapper flex">
    <input 
    type="text" 
    :value="searchKeyword" 
    class="search-input"
    @input="$emit('input', $event.target.value)" 
    />
    <button class="btn" type="button" @click="$emit('search')">search</button>
  </div>
</template>

<script>
export default {
    props: {
        value: { // v-model은 value라고 해야한다.
            type: String,
            default: () => '',
        },
    },
}
</script>

<style scoped>
.input-wrapper {
  height: 40px;
  margin: 1rem 0;
}
.search-input {
  width: 200px;
  font-size: 1.2rem;
  font-weight: 500;
}
.btn {
  font-size: 1.2rem;
  font-weight: 500;
}
</style>