<script>
import NavigationBar from '~/components/NavigationBar'
import Breadcrumb from '~/components/Breadcrumb'
import SideBar from '~/components/SideBar'
import SeeMore from '~/components/SeeMore'

export default {
  name: 'HowItWorks',
  components: {
    NavigationBar,
    Breadcrumb,
    SideBar,
    SeeMore
  },
  transition: {
    name: 'page',
    mode: 'in-out'
  },
  data () {
    return {
      video: false
    }
  },
  methods: {
    showVideo (show = true) {
      this.video = show
      this.$nextTick(() => this.$refs.showVideo.blur())
    }
  }
}
</script>

<template>
  <div id="how-it-works" class="page">
    <navigation-bar/>

    <section class="content">
      <div class="title-bar">
        <breadcrumb :strong="true">Como Funciona</breadcrumb>
        <h1 class="not-phone-only caret animated flipInX delay-250">Saiba como aumentar os seus<br>clientes com a nossa ferramenta</h1>
      </div>

      <h1 class="phone-only caret animated flipInX delay-250">Acesse de qualquer dispositivo</h1>

      <div class="info">
        <ul class="devices">
          <li class="animated zoomInDown delay-250">
            <img src="~/assets/device-smartphone.png" alt="Smartphone">
            <h2 class="phone-only">Mobile & APP</h2>
            <div class="not-phone-only">
              <h2>Smartphone</h2>
              <p>
                Google Android<br>
                Apple iOS<br>
                Microsoft Windows
              </p>
            </div>
          </li>
          <li class="animated zoomInDown delay-750">
            <img src="~/assets/device-tablet.png" alt="Tablet">
            <h2 class="phone-only">Android, iOS e Windows</h2>
            <div class="not-phone-only">
              <h2>Tablet</h2>
              <p>
                Google Android<br>
                Apple iOS<br>
                Microsoft Windows
              </p>
            </div>
          </li>
          <li class="animated zoomInDown delay-1250">
            <img src="~/assets/device-desktop.png" alt="Desktop">
            <h2 class="phone-only">Desktop</h2>
            <div class="not-phone-only">
              <h2>Desktop</h2>
              <p>
                Microsoft Windows<br>
                Apple Mac OS<br>
                Linux<br>
                Google Chrome
              </p>
            </div>
          </li>
        </ul>

        <div class="open-video">
          <button ref="showVideo" class="animated flipInX delay-2000" @click="showVideo" :disabled="video">
            <img src="~/assets/icon-play.png">
            <span>Veja o vídeo</span>
          </button>
        </div>
      </div>
    </section>

    <side-bar/>

    <see-more to="/screenshots" class="animated fadeIn delay-2750"/>

    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" :duration="{ enter: 500, leave: 250 }">
      <div class="video" v-if="video" @click="showVideo(false)">
        <div class="video-container animated zoomInDown delay-250" tabindex="0" ref="video" @click.stop>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/StAXDYKfNEo?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang="stylus">
@import '../assets/variables.styl'

#how-it-works
  background: #0170a4 radial-gradient(#01a685, #0170a4) fixed

  .info
    +breakpoint(tablet-landscape-up)
      display: flex
      flex-flow: column
      justify-content: center
      position: absolute
      top: 0; bottom: 0
      width: 70vw
      z-index: -1

  .devices
    display: flex
    flex-flow: column
    margin: 0
    padding: 0
    list-style: none
    font-family: $font-featured
    +breakpoint(tablet-landscape-up)
      flex-flow: row
      padding: 7vh 5vw 0
    li
      display: flex
      align-items: center
      padding: 1rem 0 1.25rem
      position: relative
      img
        max-height: 8vh
      h2
        margin: 0 0 0 1rem
        font-size: 1.375em
        font-weight: 300
      &:nth-child(even)
        justify-content: flex-end
        padding: 1rem 0 1rem
        img
          order: 1
        h2
          margin: 0 1rem 0 0
      &:not(:last-child)::after
        content: ''
        position: absolute
        left: 0
        bottom: 0
        width: 50%
        border-bottom: 3px dashed rgba(#fff, 25%)
      +breakpoint(tablet-landscape-up)
        flex: 1
        flex-flow: column
        align-items: flex-start
        font-size: .825em
        padding: 0
        img
          max-height: 10vh
        h2
          margin: 2rem 0 1rem
          font-size: 1em
          font-weight: 700
        p
          font-weight: 300
          line-height: 1.5
          color: rgba(#fff, 75%)
        &:nth-child(even)
          justify-content: flex-start
          padding: 0
          img
            order: 0
          h2
            margin: 2rem 0 1rem
        &:not(:last-child)::after
          bottom: auto
          left: 6rem
          top: 2rem
          right: 3rem
          width: auto

  .open-video
    button
      margin: 1rem auto 0
      display: flex
      align-items: center
      font-size: .75em
      transition: all .5s
      padding: .75rem 1.75rem
      &[disabled]
        opacity: .25
      +breakpoint(tablet-landscape-up)
        margin: 2rem 0 0 10vw
    img
      margin-right: 1em
      width: 1.5em
      height: 1.5em

  .video
    position: fixed
    top: 0; right: 0; bottom: 0; left: 0
    background: rgba(#000, 50%)
    padding: .5rem
    display: flex
    justify-content: center
    align-items: center
    z-index: 3
    .video-container
      background: #000
      float: none
      clear: both
      position: relative
      padding: 25px 0 56.25%
      box-shadow: 0 10px 50px rgba(#000, 50%), 0 2px 10px rgba(#000, 15%)
      width: 100%
      height: 0
      iframe
        position: absolute
        top: 0; right: 0; bottom: 0; left: 0
        width: 100%; height: 100%
    +breakpoint(tablet-landscape-up)
      padding: 1rem 25vw
</style>
