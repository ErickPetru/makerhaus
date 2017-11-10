<script>
export default {
  name: 'Menu',
  computed: {
    featuresActive () {
      return this.$route.path === '/features/management' ||
        this.$route.path === '/features/increasing-followers' ||
        this.$route.path === '/features/digital-strategy'
    }
  }
}
</script>

<template>
  <div class="app-menu">
    <nuxt-link to="/" v-html="require('~/assets/icon-overview.svg')"></nuxt-link>
    <nuxt-link to="/features/management" :class="{ 'nuxt-link-exact-active': featuresActive }" v-html="require('~/assets/icon-features.svg')"></nuxt-link>
    <nuxt-link to="/how-it-works" v-html="require('~/assets/icon-performance.svg')"></nuxt-link>
    <nuxt-link to="/screenshots" v-html="require('~/assets/icon-screens.svg')"></nuxt-link>
    <nuxt-link to="/pricing" v-html="require('~/assets/icon-wallet.svg')"></nuxt-link>
    <nuxt-link to="/get-it-now" v-html="require('~/assets/icon-download.svg')"></nuxt-link>
  </div>
</template>

<style lang="stylus">
@import '../assets/variables.styl'

.app-menu
  display: flex
  justify-content: space-between
  padding: 1.25rem 0
  border-top: 2px solid rgba(#fff, 70%)
  border-bottom: 2px solid rgba(#fff, 70%)
  z-index: 2
  a
    flex: 0 0 auto
    display: block
    width: 1.5rem
    height: 1.5rem
    path
      transition: fill .25s ease
    &:hover path
      fill: #ff0
  svg
    width: 1.5rem
    height: 1.5rem
  .nuxt-link-exact-active path
    fill: #ff0 !important
  +breakpoint(tablet-landscape-up)
    flex-flow: column
    border-top: none 
    border-bottom: none
    a
      margin: 1em 0
</style>
