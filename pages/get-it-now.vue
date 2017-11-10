<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import SideBar from '~/components/SideBar'

export default {
  name: 'GitItNow',
  components: {
    NavigationBar,
    Breadcrumb,
    SideBar
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  }
}
</script>

<template>
  <div id="get-it-now" class="page">
    <navigation-bar/>

    <section class="content">
      <breadcrumb>Download</breadcrumb>

      <div class="info">
        <div>
          <h1 class="animated flipInX delay-250">Baixe o <br>nosso APP</h1>
  
          <p class="animated flipInX delay-500">Controle seu Instagram de maneira profissional e tenha <br>acesso às ferramentas mais avançadas para implantar sua <br>estratégia de crescimento, engajamento e conversão no <br>Instagram.</p>
  
          <a class="button animated flipInX delay-750" href="https://www.apple.com/br/ios/app-store/" target="_blank">
            <img src="~/assets/apple.png">
            <div>
              <span>Download on the</span>
              <strong>App Store</strong>
            </div>
          </a>
        </div>

        <img class="phone-8 animated fadeInUp delay-750" src="~/assets/phone-8.png" alt="Tela de abertura do aplicativo">
      </div>
    </section>

    <side-bar/>
  </div>
</template>

<style lang="stylus">
@import '../assets/variables.styl'

#get-it-now
  background: #180145 radial-gradient(#0170a4, #180145) fixed

  .info
    font-size: .25em + .5vw
    +breakpoint(phone-large-up)
      font-size: .5em + .5vw
    & > div
      position: relative
      text-align: center
      margin: 0 0 2rem
      z-index: 1
    .phone-8
      width: 65vw
      margin: 0 auto -2rem
    +breakpoint(tablet-landscape-up)
      position: absolute
      top: 0; bottom: 0
      display: flex
      align-items: center
      justify-content: center
      z-index: -1
      & > div
        flex: 1
        margin: 0 2.5vw
      .phone-8
        height: 90vh
        width: auto
        margin: 0 0 0 4vw
        align-self: flex-end
    p
      line-height: 1.3
      font-size: .875em
      color: rgba(#fff, 75%)
    .button
      display: inline-flex
      padding: .75rem 2rem
      img
        height: 1.5rem
        margin-right: .75rem
        transition: all .25s ease
      div
        display: flex
        flex-flow: column
        justify-content: center
      span
        display: block
        font-size: .75em
        text-transform: none
        color: rgba(#fff, 50%)
        transition: all .25s ease
      &:hover
        img
          filter: invert()
        span
          color: rgba(#000, 50%)
</style>
