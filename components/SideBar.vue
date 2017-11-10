<script>
export default {
  name: 'SideBar',
  props: {
    floating: {
      type: [ Boolean, String ],
      default: false
    },

    dots: {
      type: Number,
      default: 0
    },

    active: {
      type: Number,
      default: 0
    }
  }
}
</script>

<template>
  <aside class="side-bar" :class="{ 'floating': floating }">
    <header class="side-header">
      <a href="return:void(0)" class="hamburger">
        <hr v-for="i in 3" :key="i">
      </a>
    </header>

    <nav class="dots" v-if="dots">
      <a v-for="n in dots" :key="n"
        :class="{ 'active': n - 1 === active }" @click.prevent="$emit('update:active', n - 1)">
        <span>{{ n + 1 }}</span>
      </a>
    </nav>

    <footer class="side-footer">
      <a href="https://www.facebook.com/makerhausad/" target="_blank"><img src="~/assets/icon-facebook.png" alt="Facebook"></a>
      <a href="https://www.instagram.com/maker.haus/" target="_blank"><img src="~/assets/icon-instagram.png" alt="Instagram"></a>
    </footer>
  </aside>
</template>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.side-bar
  padding: 2rem 2rem 0
  font-size: 1.75rem
  position: absolute
  top: 0; right: 0
  z-index: 1
  +breakpoint(tablet-landscape-up)
    padding: 3rem 5vw 4rem 0
    font-size: 1rem
    display: flex
    flex-flow: column
    align-items: flex-end
    justify-content: space-between
    &.floating
      bottom: 0
    &:not(.floating)
      position: static
      top: auto; right: auto
  +breakpoint(desktop-up)
    padding-right: 8vw
  +breakpoint(big-desktop-up)
    padding-right: 10vw

.side-header
  padding: 1rem 0 0
  +breakpoint(tablet-landscape-up)
    padding: 0

.hamburger
  width: 18px
  height: 9px
  padding: 8px 2px
  display: block
  box-sizing: content-box
  hr
    background: #fff
    width: 100%
    height: 1px
    border: none
    margin: 0
    transition: background .25s ease
    &:nth-child(2)
      margin-top: 3px
    &:nth-child(3)
      margin-top: 3px
      width: 65%
      float: right
  &:hover hr
    background: #ff0

.side-footer
  display: none
  a
    display: block
    padding: 2px 4px
    img
      height: .625em
      opacity: .6
    &:not(:last-child)
      margin-right: 4px
    &:hover img
      filter: sepia(100%) saturate(2000%) hue-rotate(0deg)
      opacity: 1
  +breakpoint(tablet-landscape-up)
    flex: 0
    display: flex
    align-items: flex-end
    height: 2rem
    margin-top: 1.5rem

.dots
  display: none
  +breakpoint(tablet-landscape-up)
    display: block
    flex-shrink: 0
    a
      display: block
      padding: 3px 0
    span
      display: block
      overflow: hidden
      text-indent: -100vw
      width: 15px
      height:4px
      background: rgba(#fff, 60%)
      border-radius: 2px
    a.active span
      background: #ff0
</style>
