<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import SideBar from '~/components/SideBar'
import SeeMore from '~/components/SeeMore'

export default {
  name: 'DigitalStrategy',
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
  <div id="digital-strategy" class="page">
    <navigation-bar/>

    <section class="content">
      <breadcrumb>
        Personalização

        <ul slot="items">
          <li><nuxt-link to="/features/management">Gerenciamento</nuxt-link></li>
          <li><nuxt-link to="/features/increasing-followers">Aumento de seguidores</nuxt-link></li>
          <li><nuxt-link to="/features/digital-strategy">Estratégia digital</nuxt-link></li>
        </ul>
      </breadcrumb>

      <div class="info">
        <div>
          <h1 class="phone-only caret animated flipInX delay-250">As ferramentas mais <br>usadas nas maiores <br>empresas</h1>
          <h1 class="not-phone-only animated flipInX delay-250">As ferramentas <br>mais usadas nas <br>maiores empresas</h1>

          <p class="not-phone-only animated flipInX delay-500">O seu resultado pode ir muito além se você tiver <br>acesso às ferramentas certas. Gerenciamento com&shy;pleto e profissional para você e o seu perfil.</p>
          <p class="not-phone-only animated flipInX delay-750">Você terá o poder de implantar estratégias avança&shy;das de crescimento de base, awarness, engajamento <br>e conversão.</p>
        </div>

        <img class="phone-6 animated zoomInDown delay-1000" src="~/assets/phone-6.png">
      </div>
    </section>

    <div class="not-phone-only pictures">
      <img class="phone-7a animated fadeIn delay-250" src="~/assets/phone-7a.png">
      <img class="phone-7b animated fadeIn delay-250" src="~/assets/phone-7b.png">
      <img class="phone-7c animated fadeIn delay-250" src="~/assets/phone-7c.png">
    </div>

    <side-bar/>

    <see-more to="/how-it-works" class="animated fadeIn delay-2750" floating="true"/>
  </div>
</template>

<style lang="stylus">
@import '../../assets/variables.styl'

#digital-strategy
  background: #01a23c radial-gradient(#9fc31a, #01a23c) fixed

  h1.phone-only
    font-size: .5em + 1vw
    white-space: nowrap
    padding: 0
    +breakpoint(phone-large-up)
      font-size: .875em + 1vw

  h1.not-phone-only, p.not-phone-only
    width: 22rem
    margin-right: calc(1rem + 2vw)
    +breakpoint(desktop-up)
      margin-right: calc(2rem + 2vw)
    +breakpoint(big-desktop-up)
      margin-right: calc(4rem + 4vw)

  h1.not-phone-only
    margin-top: 15vh

  .info
    +breakpoint(tablet-landscape-up)
      position: absolute
      top: 0; bottom: 0
      flex: 1
      display: flex
      align-items: center
      align-self: flex-start
      z-index: -1

  .phone-6
    width: 64vw
    margin: .75rem auto 0
    +breakpoint(tablet-landscape-up)
      width: auto
      height: 84vh

  .pictures
    position: absolute
    top: 0; right: 0; bottom: 0; left: 0
    z-index: -1
    .phone-7a
      position: absolute
      bottom: 0
      height: 19vh
      max-height: 9rem
      left: 25%
    .phone-7b
      position: absolute
      height: 27vh
      max-height: 11rem
      left: 34%
    .phone-7c
      position: absolute
      top: calc(50% - 30vh)
      height: 60vh
      right: -14%
      +breakpoint(desktop-up)
        right: -7%
      +breakpoint(big-desktop-up)
        right: 0
</style>
