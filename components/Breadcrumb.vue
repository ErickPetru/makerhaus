<script>
export default {
  name: 'Breadcrumb',
  props: {
    strong: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="breadcrumb">
    <p>
      /
      <strong v-if="strong"><slot></slot></strong>
      <span v-else><slot></slot></span>
    </p>

    <slot name="items"></slot>
  </div>
</template>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.breadcrumb
  display: none
  span, strong
    display: inline
    font-size: 1em
    font-weight: 700
    margin-left: .25rem
  strong
    text-transform: uppercase
  +breakpoint(tablet-landscape-up)
    flex: 0
    display: inline-block
    align-self: flex-start
    margin: 2.5rem 2rem 1.5rem 0
    font-family: $font-featured
    font-weight: 200
    font-size: .625em
    white-space: nowrap
  +breakpoint(desktop-up)
    margin-right: 4rem
  ul
    display: none
    +breakpoint(tablet-landscape-up)
      display: block
      margin: 5rem -.5rem 0 0
      padding: 0
      list-style: none
      a
        position: relative
        display: flex
        color: rgba(#fff, 50%)
        text-decoration: none
        text-transform: uppercase
        font-size: .5rem
        font-weight: 400
        padding: .75em 0
        &::before
          content: ''
          display: inline-block
          width: 6px
          height: 5.5px
          background: rgba(#fff, 50%)
          border-radius: 50%
          margin: 2px 1em 0 2px
          transition: all .25s ease
        &::after
          content: ''
          position: absolute
          left: 0
          display: inline-block
          width: 10px
          height: 10px
          background: rgba(#ff0, 0)
          border-radius: 50%
          transition: all .25s ease
          z-index: -1
        &:hover
          color: #ff0
          &::before
            background: #fff
        &.nuxt-link-exact-active
          color: #fff
          font-weight: 500
          &::before
            background: #ff0
          &::after
            background: rgba(#ff0, 20%)
</style>
