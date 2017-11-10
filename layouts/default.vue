<script>
export default {
  name: 'Layout'
}
</script>

<template>
  <div class="app">
    <nuxt/>
  </div>
</template>

<style lang="stylus">
@import '../assets/variables.styl'
@import '../assets/animate.styl'

*, *:before, *:after
  box-sizing: border-box
  margin: 0

::-moz-selection
  background: #ff0 !important
  color: #131313 !important
  text-shadow: none !important
  opacity: 1 !important

::selection
  background: #ff0 !important
  color: #131313 !important
  text-shadow: none !important
  opacity: 1 !important

html
  font-family: $font-base
  font-size: 1em
  line-height: 1.1
  color: #fff
  word-spacing: 0
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased

html, body, #__nuxt, .app, .page, .container
  height: 100vh
  overflow: hidden

.app
  position: relative

.page
  position: absolute
  top: 0; right: 0; bottom: 0; left: 0
  box-shadow: 0 2px 20px rgba(#000, 15%)
  transform-origin: center top
  overflow: auto
  overflow-x: hidden
  z-index: 3
  +breakpoint(tablet-landscape-up)
    display: flex
    overflow: scroll
    overflow-x: hidden

.page-enter-active
  animation: fadeIn .75s both

.content
  padding: 2rem
  flex: 1
  z-index: 1
  +breakpoint(tablet-landscape-up)
    padding: 2rem 0 2rem 2rem
    display: flex
    flex-flow: column
    justify-content: flex-start

.title-bar
  display: flex
  & > div
    flex: 1
  h1, .title
    padding-top: 1.5rem
    margin: 0 0 1rem
    h1
      margin: 0 0 1rem

img
  max-width: 100%
  display: block

sizes = 2 1.75 1.5625 1.375 1.1875 1
for size, $i in sizes
  h{$i + 1}
    font-family: $font-featured
    font-size: unit(size, 'em')
    margin-bottom: 1.5rem
    text-shadow: 0 2px 8px rgba(#000, 3%)

@keyframes caret-blinking
  0%, 49% { opacity: 0 }
  50%, 99% { opacity: 1 }

.caret::after
  content: ''
  position: relative
  display: inline-block
  background: #ff0
  width: 3px
  height: 1.5ex
  margin: 0 0 -3px 5px
  animation: caret-blinking 1s 1.5s both infinite

p
  margin-bottom: 1.5rem

button, .button
  border: none
  background: #141414
  color: #fff
  box-shadow: 0 10px 60px rgba(#000, 20%)
  font-family: $font-featured
  font-size: .875em
  padding: 1rem 1.875rem 1rem
  border-radius: 2rem
  text-transform: uppercase
  text-decoration: none
  font-weight: 300
  +breakpoint(tablet-landscape-up)
    font-size: .75em
  &:not([disabled]):hover
    box-shadow: 0 10px 60px rgba(#000, 40%)
    background: #ff0
    color: #141414
  &.featured
    background: #ff0
    color: #000
    font-weight: 700
    box-shadow: 0 10px 30px rgba(#ff0, 25%), 0 2px 5px rgba(#000, 15%)
    &:not([disabled]):hover
      box-shadow: 0 10px 60px rgba(#000, 40%)
      background: #141414
      color: #ff0

a, button, .button
  cursor: pointer
  touch-action: manipulation
  transition: color .25s ease, background .25s ease, opacity .25s ease, box-shadow .25s ease
  outline: 1px dotted rgba(#fff, 0)
  outline-offset: 2px
  &:focus
    outline-color: rgba(#fff, 50%)

.phone-only
  display: block
  +breakpoint(tablet-landscape-up)
    display: none

.not-phone-only
  display: none
  +breakpoint(tablet-landscape-up)
    display: block
</style>
