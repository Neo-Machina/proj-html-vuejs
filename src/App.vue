<template>
  <div id="app">
    <HeaderComponent :headerNav="menuLinks" :headerIcons="menuIcon" :sideIcons="sideMenuLinks" />

    <main>
      <InfoCourseComponent />
      <AboutMeComponent />
      <KaixaStarkComponent />
      <OnlineCoursesComponent />
      <NewArticlesComponent />
    </main>

    <FooterComponent :addressList="addressSection" :brandIcons="menuBrandIcon" :exploreList="exploreSection"
                      :contactList="coursesSection" :infoList="infoSection" />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import InfoCourseComponent from './components/InfoCourseComponent.vue';
import AboutMeComponent from './components/AboutMeComponent.vue';
import KaixaStarkComponent from './components/KaixaStarkComponent.vue';
import OnlineCoursesComponent from './components/OnlineCoursesComponent.vue';
import NewArticlesComponent from './components/NewArticlesComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    InfoCourseComponent,
    AboutMeComponent,
    KaixaStarkComponent,
    OnlineCoursesComponent,
    NewArticlesComponent,
    FooterComponent
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
      // side-menu-links
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
      ],
      // footer-links
      addressSection: {
        title: 'Address',
        address: '382 NE 191st ST # 87394 Miami, FL 22179-3899',
        contact: '+1(305)547-9909(9am - 5pm EST, Monday - Friday)',
        email: 'support@maxcoach.com'
      }, 
      exploreSection: {
        title: 'Explore',
        footerLinks: [
          {
            url: '#',
            text:'Start here'
          },
          {
            url: '#',
            text: 'Blog'
          },
          {
            url: '#',
            text: 'About us'
          }
        ]
      },
      coursesSection: {
        footerLinks: [
          {
            url: '#',
            text:'Success story'
          },
          {
            url: '#',
            text: 'Courses'
          },
          {
            url: '#',
            text: 'Contact us'
          }
        ]
      },
      infoSection : {
        title: 'Information',
        footerLinks: [
          {
            url: '#',
            text:'Membership'
          },
          {
            url: '#',
            text: 'Purchase Guide'
          },
          {
            url: '#',
            text: 'Privacy policy'
          },
          {
            url: '#',
            text: 'Terms of service'
          }
        ]
      },
      menuBrandIcon: [
        {
          url: '#',
          icon: 'fa-brands fa-facebook-square'
        },
        {
          url: '#',
          icon: 'fa-brands fa-twitter'
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
    }
  }
}
</script>

<style lang="scss">
@import './style/common.scss'
</style>
