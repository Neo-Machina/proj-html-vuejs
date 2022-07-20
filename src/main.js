import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faTwitter, faFacebookF, faInstagram, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import { faAngleDown, faArrowRightLong, faRulerCombined, faLifeRing, faBook, faCartShopping, 
          faArrowDownLong, faCaretDown, faCaretUp, faCheck} 
from '@fortawesome/free-solid-svg-icons'

import { faFileLines, faUser, faCalendar } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleDown, faTwitter, faFacebookF, faInstagram, faLinkedin, faArrowRightLong,
            faRulerCombined, faLifeRing, faBook, faCartShopping, faFileLines, faUser, faCalendar, 
            faFacebookSquare, faArrowDownLong, faCaretDown, faCaretUp, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
