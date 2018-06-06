// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VForm,
  VTextField,
  VSelect,
  VCheckbox,
  VSwitch,
  VDialog,
  VCard,
  VSubheader,
  VDivider,
  VRadioGroup,
  VDataTable
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VForm,
    VTextField,
    VSelect,
    VCheckbox,
    VSwitch,
    VDialog,
    VCard,
    VSubheader,
    VDivider,
    VRadioGroup,
    VDataTable
  },
  theme: {
    primary: '#A97C54',
    secondary: '#525050',
    accent: '#848181',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    blue: '#5B6789',
    green: '#639D6A',
    taupe: '#CBA37F',
    darkText: '#303131',
    input: '#F6D7BD'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
