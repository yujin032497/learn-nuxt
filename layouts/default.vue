<template>
  <div>
    <header>
      <!-- <h1>{{ $route.name }} 페이지</h1> -->

      <!-- router link와 동일 기능 -->
      <!-- <NuxtLink to="/">홈페이지</NuxtLink>
      <NuxtLink to="/main">메인 페이지</NuxtLink>
      <NuxtLink to="/product">상품 페이지</NuxtLink> -->

      <h1>
        <NuxtLink to="/">Nuxt Shopping</NuxtLink>
      </h1>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
  },
}
</script>
