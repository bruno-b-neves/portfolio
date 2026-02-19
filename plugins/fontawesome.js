import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faUser,
  faEnvelope,
  faExternalLinkAlt,
  faCertificate
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faVuejs,
  faReact,
  faSquareJs,
  faSass,
  faGitAlt,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons'

// Previne que o FontAwesome adicione CSS automaticamente
config.autoAddCss = false

library.add(
  faUser,
  faEnvelope,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faVuejs,
  faReact,
  faSquareJs,
  faSass,
  faGitAlt,
  faBootstrap,
  faExternalLinkAlt,
  faCertificate
)

Vue.component('font-icon', FontAwesomeIcon)
