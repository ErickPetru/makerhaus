<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import SideBar from '~/components/SideBar'
import SeeMore from '~/components/SeeMore'

export default {
  name: 'IncreasingFollowers',
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
  <div id="increasing-followers" class="page">
    <navigation-bar/>

    <section class="content">
      <breadcrumb>
        Bot de seguidores

        <ul slot="items">
          <li><nuxt-link to="/features/management">Gerenciamento</nuxt-link></li>
          <li><nuxt-link to="/features/increasing-followers">Aumento de seguidores</nuxt-link></li>
          <li><nuxt-link to="/features/digital-strategy">Estratégia digital</nuxt-link></li>
        </ul>
      </breadcrumb>

      <div class="info">
        <h1 class="caret animated flipInX delay-250">Aumente seus <br class="phone-only">seguidores: a <br class="phone-only">ferramenta certa <br>para conquistar <br class="phone-only">novos clientes</h1>
        <p class="animated flipInX delay-500">Siga as pessoas certas e au&shy;mente sua base de seguidores. Nossa ferramenta é precisa e vai te ajudar a encontrar *targets *ideais, au&shy;mentar o engajamen&shy;to e levar sua mensagem para muito mais pessoas. As pessoas vão amar e te curtir de volta.</p>
      </div>
    </section>

    <img class="phone-4a phone-only animated fadeInDown delay-500" src="~/assets/phone-4a.png">
    <img class="phone-5a phone-only animated fadeInUp delay-750" src="~/assets/phone-5a.png">

    <img class="phone-4b not-phone-only animated fadeInDown delay-500" src="~/assets/phone-4b.png">
    <img class="phone-5b not-phone-only animated fadeInUp delay-750" src="~/assets/phone-5b.png">

    <side-bar/>

    <see-more to="/features/digital-strategy" class="animated fadeIn delay-2750" floating="true"/>
  </div>
</template>

<style lang="stylus">
@import '../../assets/variables.styl'

#increasing-followers
  background: #235a72 radial-gradient(#5db899, #0a3261) fixed

  .info
    +breakpoint(tablet-landscape-up)
      flex: 1
      display: flex
      flex-flow: column
      justify-content: center
      align-self: flex-start
      margin-bottom: 10vh

    p
      width: 52vw
      margin-bottom: 7vh
      color: rgba(#fff, 75%)
      +breakpoint(tablet-landscape-up)
        width: 29rem
        color: rgba(#fff, 80%)
        text-shadow: 0 1px 2px rgba(#000, 5%)

    h1
      font-size: calc(1.5em + 1vw)
      +breakpoint(tablet-landscape-up)
        font-size: 2em

  .phone-4a
    position: absolute
    bottom: 8vh
    right: 0
    width: 35vw
    z-index: -1
  .phone-5a
    width: 69vw
  .phone-4b
    position: absolute
    right: 9%
    height: 38vh
    filter: drop-shadow(5px 10px 100px rgba(#000, 30%)) drop-shadow(40px 50px 50px rgba(#000, 50%))
    z-index: -1
    +breakpoint(desktop-up)
      right: 18%
    +breakpoint(big-desktop-up)
      right: 28%
  .phone-5b
    position: absolute
    right: 7%
    bottom: 0
    height: 40vh
    filter: drop-shadow(-5px 10px 100px rgba(#000, 30%)) drop-shadow(-40px 50px 50px rgba(#000, 50%))
    z-index: -1
    +breakpoint(desktop-up)
      right: 17%
    +breakpoint(big-desktop-up)
      right: 24%
</style>
