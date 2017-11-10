<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
      default: []
    },

    active: {
      type: Number,
      default: 0
    }
  },
  computed: {
    subset () {
      const arr = this.items
      if (!arr.length) return arr

      const half = Math.floor(arr.length / 2)
      const delta = this.active - half

      return [
        ...arr.slice(delta),
        ...arr.slice(0, delta)
      ]
    }
  },
  methods: {
    next () {
      let index = this.active
      if (index === this.items.length - 1) index = 0
      else index++

      this.$emit('update:active', index)
    },

    previous () {
      let index = this.active
      if (index === 0) index = this.items.length - 1
      else index--

      this.$emit('update:active', index)
    },

    isActive (index) {
      return index === Math.floor(this.items.length / 2)
    },

    isPrevious (index) {
      return index === Math.floor(this.items.length / 2) - 1
    },

    isNext (index) {
      return index === Math.floor(this.items.length / 2) + 1
    }
  }
}
</script>

<template>
  <div class="carousel">
    <transition-group name="flip" class="carousel-wrapper" tag="ol">
      <li class="carousel-item" v-for="(item, index) of subset" :key="item.id"
        :class="{ 'active': isActive(index), 'previous': isPrevious(index), 'next': isNext(index),
          'invisible': !isActive(index) && !isPrevious(index) && !isNext(index) }">
        <slot name="item" :item="item">{{ item.id }}</slot>
      </li>
    </transition-group>

    <div class="carousel-controls">
      <a class="carousel-controls-previous" @click="previous">&#10094;</a>
      <a class="carousel-controls-next" @click="next">&#10095;</a>
    </div>
  </div>
</template>

<style lang="stylus">
@import '../assets/variables.styl'

.carousel
  margin: 4.5rem -2rem 2.75rem
  display: flex
  justify-content: center
  position: relative
  +breakpoint(tablet-landscape-up)
    margin: 1rem 0 0
    position: absolute
    right: 0; left: 0

.carousel-wrapper
  flex-shrink: 0
  display: flex
  align-items: center
  padding: 0
  margin: 0
  list-style: none

.carousel-item
  flex-shrink: 0
  border-radius: 1px
  padding: 0
  margin: 0 1.25rem
  opacity: .3
  transition: all .5s ease-in-out
  +breakpoint(tablet-landscape-up)
    margin: 0 3rem
  & > *
    border-radius: 1px
    width: 100%
    max-width: 47vw
    +breakpoint(tablet-landscape-up)
      max-height: 53vh
      width: auto
  &.active
    opacity: 1
    transform: scale(1.25)
  &.invisible
    opacity: 0

.carousel-controls
  position: absolute
  top: 0; right: 0; bottom: 0; left: 0
  padding: 3rem
  z-index: 2
  font-size: 1.625em
  font-weight: 700
  display: flex
  justify-content: space-between
  align-items: center
  +breakpoint(tablet-landscape-up)
    font-size: 1.75em
    padding: 1.5rem 30%
  a
    color: #fff
    text-shadow: 0 0 50px rgba(#000, 20%), 0 1px 8px rgba(#000, 20%)
    &:hover
      color: #ff0
</style>
