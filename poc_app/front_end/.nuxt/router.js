import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _172221b4 = () => interopDefault(import('..\\pages\\NewWorkspace.vue' /* webpackChunkName: "pages/NewWorkspace" */))
const _0926ac43 = () => interopDefault(import('..\\pages\\SavedWorkspace\\index.vue' /* webpackChunkName: "pages/SavedWorkspace/index" */))
const _73125ace = () => interopDefault(import('..\\pages\\workspace\\index.vue' /* webpackChunkName: "pages/workspace/index" */))
const _2fe8e36b = () => interopDefault(import('..\\pages\\SavedWorkspace\\_id.vue' /* webpackChunkName: "pages/SavedWorkspace/_id" */))
const _5d1b2f1e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/NewWorkspace",
    component: _172221b4,
    name: "NewWorkspace"
  }, {
    path: "/SavedWorkspace",
    component: _0926ac43,
    name: "SavedWorkspace"
  }, {
    path: "/workspace",
    component: _73125ace,
    name: "workspace"
  }, {
    path: "/SavedWorkspace/:id",
    component: _2fe8e36b,
    name: "SavedWorkspace-id"
  }, {
    path: "/",
    component: _5d1b2f1e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
