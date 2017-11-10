<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import SideBar from '~/components/SideBar'
import SeeMore from '~/components/SeeMore'

export default {
  name: 'Management',
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
  <div id="management" class="page">
    <navigation-bar/>

    <section class="content">
      <div class="title-bar">
        <breadcrumb>
          Funcionalidades

          <ul slot="items">
            <li><nuxt-link to="/features/management">Gerenciamento</nuxt-link></li>
            <li><nuxt-link to="/features/increasing-followers">Aumento de seguidores</nuxt-link></li>
            <li><nuxt-link to="/features/digital-strategy">Estratégia digital</nuxt-link></li>
          </ul>
        </breadcrumb>

        <div>
          <h1 class="not-phone-only caret animated flipInX delay-250">Simples e intuitivo. Gerenciamento<br>profissional de onde estiver</h1>
          <p class="not-phone-only animated flipInX delay-500">Todas as suas contas e ferramentas em um só lugar, com acesso <br>seguro de onde você estiver.</p>

          <h1 class="phone-only animated flipInX delay-250">Todas as suas contas e <br>ferramentas em um só <br>lugar, com acesso seguro <br>de onde você estiver.</h1>

          <div class="pictures">
            <img class="phone-3a phone-only animated fadeInUp delay-500" src="~/assets/phone-3a.png" alt="Tela de adicionar post executando em um smartphone">
            <img class="phone-3b not-phone-only animated fadeInUp delay-500" src="~/assets/phone-3b.png" alt="Tela de adicionar post executando em um smartphone">

            <img class="not-phone-only logo-symbol-large animated zoomInDown delay-1750" src="~/assets/logo-symbol-large.png">

            <div class="baloon pink animated fadeIn delay-1250">
              <h2>Programe Posts,<br class="phone-only"> Stories e Álbuns</h2>
              <p class="not-phone-only">Gerencie e programe posts, stories e álbuns <br>em um só lugar.</p>
            </div>

            <div class="baloon blue animated fadeIn delay-1500">
              <h2>Tablet, PC e Celular</h2>
              <p class="not-phone-only">Poste de qualquer lugar com <br>segurança.</p>
            </div>

            <div class="baloon green animated fadeIn delay-1750">
              <h2>Multi-contas</h2>
              <p class="not-phone-only">No Maker.Haus Social App você consegue <br>gerenciar quantas contas precisar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <side-bar/>

    <see-more to="/features/increasing-followers" class="animated fadeIn delay-2750" floating="true"/>
  </div>
</template>

<style lang="stylus">
@import '../../assets/variables.styl'

#management
  background: #261b59 radial-gradient(#902b7e, #261b59) fixed

  h1.phone-only
    font-size: .375em + 1vw
    white-space: nowrap
    padding: 0
    margin: 0 0 2rem
    +breakpoint(phone-large-up)
      font-size: .625em + 1vw

  .pictures
    position: relative
    margin: 0 -2rem -2rem
    z-index: -1
    .phone-3a
      margin: auto
      height: 53vh
    +breakpoint(tablet-landscape-up)
      margin: 0 0 0 -.5rem
      position: absolute
      bottom: 0
      .phone-3b
        height: 70vh
        width: auto
        margin: 0
        filter: drop-shadow(0 30px 60px rgba(#000, 95%))

  .logo-symbol-large
    position: absolute
    bottom: 30%
    left: -20%
    width: 15vh
    height: 15vh
    filter: drop-shadow(0 10px 20px rgba(#000, 65%))

  .baloon
    position: absolute
    padding: 1rem 2rem
    border-radius: 1rem
    line-height: 1.5
    margin: 1.5rem
    box-shadow: 0 2px 30px rgba(#000, 10%), 0 1px 10px rgba(#000, 20%)
    +breakpoint(tablet-landscape-up)
      padding: 1.25rem 2rem
    &::after
      content: ''
      position: absolute
      width: .875rem
      height: .875rem
      border-radius: 50%
    &.pink
      background: #e81d51
      top: 6%
      left: -.5rem
      &::after
        right: -.875rem; bottom: .375rem
        box-shadow: .375rem .375rem 0 0 @background
        transform: rotateZ(88deg)
    &.blue
      background: #0081ff
      top: 36%
      right: -.5rem
      &::after
        left: -.875rem; top: .5rem
        box-shadow: .375rem .375rem 0 0 @background
        transform: rotateZ(-88deg)
    &.green
      background: #01a23c
      bottom: 0
      right: .125rem
      margin-bottom: .75rem
      &::after
        left: -.875rem; bottom: .375rem
        box-shadow: .375rem .375rem 0 0 @background
    h2
      font-size: .75em
      margin: 0
    p
      font-size: .75em
      font-weight: 300
      margin: .25em 0 0
    +breakpoint(tablet-landscape-up)
      box-shadow: -5px 20px 80px rgba(#000, 50%), 0 1px 10px rgba(#000, 20%)
      &.pink
        top: 10%
        left: -55%
      &.blue
        top: 36%
        right: -40%
      &.green
        bottom: 14%
        right: -46%
</style>
