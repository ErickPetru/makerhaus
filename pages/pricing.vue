<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import Carousel from '~/components/Carousel'
import SideBar from '~/components/SideBar'
import SeeMore from '~/components/SeeMore'

const plans = [
  {
    id: 1,
    name: 'One',
    price: 'R$99',
    priority: 3,
    features: {
      postsManager: true,
      storiesManager: true,
      albumsManager: false,
      autoFollow: false,
      autoUnfollow: false,
      autoDM: false,
      autoLike: false,
      autoComment: false,
      autoRepost: false
    },
    button: {
      featured: false,
      text: 'Teste Grátis',
      delay: 1750,
      href: '/get-it-now'
    }
  },

  {
    id: 2,
    name: 'Black',
    price: 'R$149',
    priority: 1,
    features: {
      postsManager: true,
      storiesManager: true,
      albumsManager: true,
      autoFollow: true,
      autoUnfollow: true,
      autoDM: true,
      autoLike: true,
      autoComment: true,
      autoRepost: true
    },
    button: {
      featured: true,
      text: 'Teste Grátis',
      delay: 2000,
      href: '/get-it-now'
    }
  },

  {
    id: 3,
    name: 'Enterprise',
    price: 'Consulte-nos',
    priority: 2,
    button: {
      featured: false,
      text: 'Contato',
      delay: 2250,
      href: '/get-it-now'
    }
  }
]

export default {
  name: 'Pricing',
  components: {
    NavigationBar,
    Breadcrumb,
    Carousel,
    SideBar,
    SeeMore
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  data () {
    return {
      active: 0,

      features: [
        { key: 'postsManager', value: 'Gerenciador de Posts' },
        { key: 'storiesManager', value: 'Gerenciador de Stories' },
        { key: 'albumsManager', value: 'Gerenciador de Álbuns' },
        { key: 'autoFollow', value: 'Auto Follow' },
        { key: 'autoUnfollow', value: 'Auto Unfollow' },
        { key: 'autoDM', value: 'Auto DM' },
        { key: 'autoLike', value: 'Auto Like' },
        { key: 'autoComment', value: 'Auto Comment' },
        { key: 'autoRepost', value: 'Auto Repost' }
      ],

      plansById: plans.slice().sort((a, b) => a.id > b.id),

      plansByPriority: plans.slice().sort((a, b) => a.priority > b.priority)
    }
  }
}
</script>

<template>
  <div id="pricing" class="page">
    <navigation-bar/>

    <section class="content">
      <div class="title-bar">
        <breadcrumb>Planos</breadcrumb>
        <h1 class="not-phone-only animated flipInX delay-250">Temos o plano perfeito para você</h1>
      </div>

      <table class="large-table animated fadeInDown delay-750">
        <thead>
          <tr>
            <th>Escolha<br>Seu Plano</th>
            <th v-for="plan of plansById" :key="plan.id">
              <strong>{{ plan.price }}</strong>
              <span>{{ plan.name }}</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="feature of features" :key="feature.key">
            <td>{{ feature.value }}</td>
            <td v-for="plan of plansById" :key="plan.id" :class="{
                'checked': plan.features && plan.features[feature.key],
                'unchecked': plan.features && !plan.features[feature.key],
                'custom': !plan.features }">
                {{ plan.features ? plan.features[feature.key] ?
                  '&#10004;' : '&#10006;' : 'Personalizado' }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>&nbsp;</td>
            <td v-for="plan of plansById" :key="plan.id">
              <nuxt-link tag="button" :to="plan.button.href"
                :class="[ { 'featured': plan.button.featured },
                  `delay-${ plan.button.delay }` ]"
                class="animated flipInX">
                {{ plan.button.text }}
              </nuxt-link>
            </td>
          </tr>
        </tfoot>
      </table>

      <carousel class="small-tables animated flipInX delay-500"
        :items="plansByPriority" :active.sync="active">
        <template slot="item" slot-scope="props">
          <table>
            <thead>
              <tr>
                <th colspan="2">
                  <span>{{ props.item.name }}</span> <strong v-if="props.item.price.length < 7">{{ props.item.price }}</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature of features" :key="feature.key">
                <td>{{ feature.value }}</td>
                <td :class="{
                  'checked': props.item.features && props.item.features[feature.key],
                  'unchecked': props.item.features && !props.item.features[feature.key],
                  'custom': !props.item.features }">
                  {{ props.item.features ? props.item.features[feature.key] ?
                    '&#10004;' : '&#10006;' : 'Personalizado' }}
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </carousel>

      <nuxt-link tag="button" to="/get-it-now" class="phone-only animated flipInX delay-1250">
        4 dias grátis! Comece agora
      </nuxt-link>
    </section>

    <side-bar/>

    <see-more to="/get-it-now" class="animated fadeIn delay-2000"/>
  </div>
</template>

<style lang="stylus">
@import '../assets/variables.styl'

#pricing
  background: #01a685 radial-gradient(#65b461, #01a685) fixed

  table
    animation-duration: 2s
    font-family: $font-featured
    width: 100%
    table-layout: fixed
    empty-cells: show
    border-spacing: 0
    thead
      th
        padding: .75em .75em 2em
        line-height: 1.25
        font-size: 1.5em
        &:first-child
          text-align: right
          font-size: 1.25em
          width: 25%
        span
          display: block
          text-transform: uppercase
          font-size: .875em
          font-weight: 700
          color: rgba(#000, 85%)
        strong
          color: #ff0
          text-transform: uppercase
    tbody
      font-size: .75em
      tr:nth-child(odd)
        background: rgba(#fff, 10%)
      td
        padding: .75em 1em
        text-align: center
        text-shadow: 0 1px 2px rgba(#000, 15%)
        height: 5vh
      td:first-child
        text-align: right
        font-weight: 300
        color: rgba(#fff, 75%)
      .custom
        font-weight: 300
        color: rgba(#ff0, 75%)
      .checked
        color: #ff0
        font-weight: 700
    tfoot
      td
        text-align: center
        font-size: .75em
        padding: 1.75em .75em
        button
          min-width: 50%
          padding: .75em

  .large-table
    display: none
    +breakpoint(tablet-landscape-up)
      margin-top: 3vh
      display: table
      th strong
        font-size: .75em
    +breakpoint(big-desktop-up)
      th strong
        font-size: 1em

  .small-tables
    display: flex
    font-size: .875em
    table
      table-layout: auto
      border-collapse: collapse
      margin-top: 0
    thead
      th
        padding: .75rem 0 .75rem
        position: relative
        &:first-child
          width: auto
          font-size: 2em
      span
        float: left
        color: #000
      strong
        font-size: .625em
        position: absolute
        right: 0
        bottom: 1rem
    tbody
      border: 1px solid rgba(#fff, 40%)
      td
        white-space: nowrap
        padding: 1.25em .75em
      td:first-child
        width: 65%
    +breakpoint(tablet-landscape-up)
      display: none

  .carousel
    animation-duration: 1s
    margin-top: 2.5rem
  .carousel-wrapper
    width: calc((54vw + (1.75rem * 2)) * 3)
  .carousel-item
    margin: 0 1.75rem
    &.previous, &.next
      opacity: .5
    table
      max-width: 54vw
      width: 54vw

  button.phone-only
    margin: 5rem auto 0
    font-size: .75em
</style>
