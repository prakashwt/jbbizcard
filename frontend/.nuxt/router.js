import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _25d824bd = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _9f39f5a6 = () => interopDefault(import('../pages/hosting-guide/index.vue' /* webpackChunkName: "pages/hosting-guide/index" */))
const _007c6266 = () => interopDefault(import('../pages/hosting-upgrade/index.vue' /* webpackChunkName: "pages/hosting-upgrade/index" */))
const _4cc76de9 = () => interopDefault(import('../pages/privacy-policy/index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _e5769274 = () => interopDefault(import('../pages/terms-and-conditions/index.vue' /* webpackChunkName: "pages/terms-and-conditions/index" */))
const _1c08ced3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact-us",
    component: _25d824bd,
    name: "contact-us"
  }, {
    path: "/hosting-guide",
    component: _9f39f5a6,
    name: "hosting-guide"
  }, {
    path: "/hosting-upgrade",
    component: _007c6266,
    name: "hosting-upgrade"
  }, {
    path: "/privacy-policy",
    component: _4cc76de9,
    name: "privacy-policy"
  }, {
    path: "/terms-and-conditions",
    component: _e5769274,
    name: "terms-and-conditions"
  }, {
    path: "/",
    component: _1c08ced3,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
