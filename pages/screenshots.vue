<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import Carousel from '~/components/Carousel'
import SideBar from '~/components/SideBar'
import SeeMore from '~/components/SeeMore'

export default {
  name: 'Screenshots',
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
      screenshots: [
        { id: 1, src: require('~/assets/screenshots/1.png'), alt: '' },
        { id: 2, src: require('~/assets/screenshots/2.png'), alt: '' },
        { id: 3, src: 'http://placehold.it/380x676/faf345/000000&text=4', alt: '' },
        { id: 4, src: 'http://placehold.it/380x676/01a685/000000&text=5', alt: '' },
        { id: 5, src: require('~/assets/screenshots/3.png'), alt: '' }
      ],

      active: 0
    }
  }
}
</script>

<template>
  <div id="screenshots" class="page">
    <navigation-bar/>

    <section class="content">
      <breadcrumb>Screenshots</breadcrumb>
      <h1 class="caret animated flipInX delay-250">Screenshots</h1>

      <div class="info">
        <carousel class="animated flipInX delay-750"
          :items="screenshots" :active.sync="active">
          <template slot="item" scope="props">
            <img :src="props.item.src" alt="props.item.alt">
          </template>
        </carousel>
      </div>
    </section>

    <side-bar :dots="screenshots.length" :active.sync="active"/>

    <see-more to="/pricing" class="animated fadeIn delay-2000"/>
  </div>
</template>

<style lang="stylus">
@import '../assets/variables.styl'

#screenshots
  background: #3b3480 radial-gradient(#0170a4, #3b3480) fixed

  h1
    margin-bottom: 1.25em
    +breakpoint(tablet-landscape-up)
      display: none

  .info
    display: flex
    flex-flow: column
    justify-content: center
    position: absolute
    top: 0; right: 0; bottom: 0; left: 0

  .carousel
    animation-duration: 1s

  .carousel-item
    box-shadow: 0 0 200px rgba(#000, 5%), 0 0 100px rgba(#000, 1%)
    &.active
      box-shadow: 0 0 100px rgba(#000, 20%), 0 0 50px rgba(#000, 20%)
</style>
