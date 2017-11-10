<script>
import Logo from '~/components/Logo'
import Menu from '~/components/Menu'

export default {
  name: 'NavigationBar',
  components: {
    Logo,
    AppMenu: Menu
  },
  props: {
    floating: {
      type: [ Boolean, String ],
      default: false
    }
  }
}
</script>

<template>
  <nav class="navigation-bar" :class="{ 'floating': floating }">
    <header class="app-header">
      <logo/>
    </header>

    <app-menu/>

    <footer class="app-footer">
      <p>© 2017 Maker.Haus — Social</p>
    </footer>
  </nav>
</template>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.navigation-bar
  padding: 2rem 2rem 0
  +breakpoint(tablet-landscape-up)
    width: 10rem
    flex-shrink: 0
    padding: 3rem 0 4rem 5vw
    display: flex
    flex-flow: column
    justify-content: space-between
  +breakpoint(desktop-up)
    box-sizing: content-box
    padding: 3rem 2rem 4rem 8vw
    width: 6.5rem
  +breakpoint(big-desktop-up)
    padding-left: 10vw
  &.floating
    position: absolute
    top: 0; bottom: 0; left: 0

.app-header
  margin-bottom: 1.5rem
  height: 4rem
  z-index: 2
  +breakpoint(tablet-landscape-up)
    height: 2rem
    font-size: .625em

.app-footer
  display: none
  p
    margin: 0
  +breakpoint(tablet-landscape-up)
    white-space: nowrap
    display: flex
    align-items: flex-end
    height: 2rem
    margin-top: 1.5rem
    font-family: $font-featured
    font-weight: 200
    font-size: .625em
    color: rgba(#fff, 50%)
</style>
