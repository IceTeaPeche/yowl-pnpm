import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import home from '@/views/home.vue'
import notif from '@/views/notif.vue'
import register from '@/views/register.vue'
import cookie from '../views/cookie.vue'
import privacy from '../views/privacy.vue'
import research from '../views/research.vue'
import profilsperso from '../views/profilsperso.vue'
import profilspublic from '../views/profilspublic.vue'
import creation from '../views/creation.vue'
import parameters from '@/views/parameters.vue'
import security from '@/views/security.vue'
import password from '@/views/password.vue'
import aboutus from '@/views/aboutus.vue'
import mail from '@/views/mail.vue'
import changemail from '@/views/changemail.vue'
import changepseudo from '@/views/changepseudo.vue'
import pseudo from '@/views/pseudo.vue'
import account from '@/views/account.vue'
import cookieparameters from '@/views/cookieparameters.vue'
import privacyparameters from '@/views/privacyparameters.vue'
import CGU from '@/views/CGU.vue'
import bio from '@/views/bio.vue'
import changebio from '@/views/changebio.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/home',
      name: 'home',
      component: home
    }
    ,
    {
      path: '/notif',
      name: 'notif',
      component: notif
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: register
    }
    ,
    {
      path: '/cookie',
      name: 'cookie',
      component: cookie
    }
    ,
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
    }
    ,
    {
      path: '/research',
      name: 'research',
      component: research
    }
    ,
    {
      path: '/profilsperso',
      name: 'profilsperso',
      component: profilsperso
    }
    ,
    {
      path: '/profilspublic/:user_id',
      name: 'profilspublic',
      component: profilspublic
    }
    ,
    {
      path: '/creation',
      name: 'creation',
      component: creation
    }
    ,
    {
      path: '/parameters',
      name: 'parameters',
      component: parameters
    }
    ,
    {
      path: '/security',
      name: 'security',
      component: security
    }
    ,
    {
      path: '/password',
      name: 'password',
      component: password
    }
    ,
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    }
    ,
    {
      path: '/mail',
      name: 'mail',
      component: mail
    }
    ,
    {
      path: '/changemail',
      name: 'changemail',
      component: changemail
    }
    ,
    {
      path: '/changepseudo',
      name: 'changepseudo',
      component: changepseudo
    }
    ,
    {
      path: '/pseudo',
      name: 'pseudo',
      component: pseudo
    }
    ,
    {
      path: '/account',
      name: 'account',
      component: account
    }
    ,
    {
      path: '/cookieparameters',
      name: 'cookieparameters',
      component: cookieparameters
    }
    ,
    {
      path: '/privacyparameters',
      name: 'privacyparameters',
      component: privacyparameters
    }
    ,
    {
      path: '/CGU',
      name: 'CGU',
      component: CGU
    }
    ,
    {
      path: '/bio',
      name: 'bio',
      component: bio
    }
    ,
    {
      path: '/changebio',
      name: 'cangebio',
      component: changebio
    }
    ]
})

export default router
