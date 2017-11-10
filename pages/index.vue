<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import SideBar from '~/components/SideBar'
import SeeMore from '~/components/SeeMore'

export default {
  name: 'Index',
  components: {
    NavigationBar,
    Breadcrumb,
    SideBar,
    SeeMore
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  }
}
</script>

<template>
  <div id="index" class="page">
    <navigation-bar/>

    <section class="content">
      <breadcrumb :strong="true">Cresca no Instagram</breadcrumb>

      <div class="info">
        <h1 class="caret animated flipInX delay-250">Sua voz ainda mais<br>poderosa. Aumente<br>sua exposição no<br>Instagram</h1>
        <p class="animated flipInX delay-750">4 dias de teste grátis</p>
        <nuxt-link tag="button" to="/get-it-now" class="animated flipInX delay-1250">Comece agora</nuxt-link>
      </div>
    </section>

    <div class="pictures">
      <img class="phone-1a animated fadeInUp" src="~/assets/phone-1a.png" alt="Menu de adicionar post executando em um smartphone">

      <img class="phone-1b animated fadeInDown delay-500" src="~/assets/phone-1b.png" alt="Menu de adicionar post executando em um smartphone">
      <img class="phone-2 animated fadeInUp delay-750" src="~/assets/phone-2.png" alt="Tela de adicionar post executando em um smartphone">
    </div>

    <side-bar/>

    <see-more to="/features/management" class="animated fadeIn delay-2000" floating="true"/>
  </div>
</template>

<style lang="stylus" scoped>
@import '../assets/variables.styl'

.page
  background: #df1146 radial-gradient(#ff792d, #df1146) fixed

.info
  flex: 1
  display: flex
  flex-flow: column
  justify-content: center
  align-self: flex-start
  margin-bottom: 3rem
  p
    font-size: 1.25em
    margin-bottom: 1.5em
  button
    align-self: flex-start

.pictures
  position: relative
  z-index: -1
  margin-top: -25vh
  overflow: hidden
  display: flex
  justify-content: flex-end
  align-items: flex-end
  .phone-1a
    height: 53vh
    right: 0; bottom: 0
    pointer-events: none
  .phone-1b, .phone-2
    display: none
  +breakpoint(tablet-portrait-up)
    margin-top: -45vh
    .phone-1a
      height: 72vh
  +breakpoint(tablet-landscape-up)
    display: block
    position: absolute
    top: 0; right: 0; bottom: 0; left: 0
    margin: 0
    .phone-1a
      display: none
    .phone-1b, .phone-2
      display: block
      pointer-events: none
    .phone-1b
      height: 65vh
      position: absolute
      top: 0; left: calc(50% - 2rem)
      animation-duration: 2s
    .phone-2
      height: 30vh
      position: absolute
      bottom: 0; left: calc(50% - 25vw)
      animation-duration: 1.5s
</style>
