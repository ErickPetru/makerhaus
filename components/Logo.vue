<script>
export default {
  name: 'Logo',
  props: {
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>

<template>
  <nuxt-link class="logo" :to="to">
    <img class="symbol" src="~/assets/logo-symbol.png" alt="Logotipo">
    <img class="typo" src="~/assets/logo-typo.png" alt="MakerHaus Social">
  </nuxt-link>
</template>

<style lang="stylus" scoped>
.logo
  display: inline-flex
  align-items: center
  height: 100%
  .symbol
    max-height: 100%
  .typo
    margin-left: 1em
    max-height: 65%
  &:hover .typo
    filter: sepia(100%) saturate(2000%) hue-rotate(0deg)
</style>
