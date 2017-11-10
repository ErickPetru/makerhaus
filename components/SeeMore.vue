<script>
export default {
  name: 'SeeMore',
  props: {
    to: {
      type: String,
      default: '/'
    },

    floating: {
      type: [ Boolean, String ],
      default: false
    }
  }
}
</script>

<template>
  <nuxt-link class="see-more" :class="{ 'floating': floating }" :to="to"></nuxt-link>
</template>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.see-more
  position: relative
  display: flex
  width: 60px
  min-height: 60px
  margin: 0 auto 1rem
  border-radius: 50%
  background: rgba(#fff, 80%)
  box-shadow: 0 3px 30px rgba(#000, 15%), 0 1px 10px rgba(#000, 20%)
  &.floating
    margin: calc(-60px - 2rem) auto 0
  &::after
    flex: 1
    content: ''
    background: url('~/assets/arrow-down.png') no-repeat 50% 55%
    background-size: 35%
  +breakpoint(tablet-landscape-up)
    display: none
</style>
