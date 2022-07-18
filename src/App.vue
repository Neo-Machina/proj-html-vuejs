<template>
  <div id="app">
    <HeaderComponent :headerNav="menuLinks" :headerIcons="menuIcon" :sideIcons="sideMenuLinks" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      menuLinks: [
        {
          url: '#',
          text: 'home'
        },
        {
          url: '#',
          text: 'pages'
        },
        {
          url: '#',
          text: 'courses'
        },
        {
          url: '#',
          text: 'features'
        },
        {
          url: '#',
          text: 'blog'
        },
        {
          url: '#',
          text: 'shop'
        }
      ],
      menuIcon: [
        {
          url: '#',
          icon: 'fa-brands fa-twitter'
        },
        {
          url: '#',
          icon: 'fa-brands fa-facebook-f'
        },
        {
          url: '#',
          icon: 'fa-brands fa-instagram'
        },
        {
          url: '#',
          icon: 'fa-brands fa-linkedin'
        }
      ],
      sideMenuLinks: [
        {
          url: '#',
          icon: 'fa-solid fa-ruler-combined'
        },
        {
          url: '#',
          icon: 'fa-solid fa-life-ring'
        },
        {
          url: '#',
          icon: 'fa-solid fa-book'
        },
        {
          url: '#',
          icon: 'fa-cart-shopping'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './style/common.scss'
</style>
