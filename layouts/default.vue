<template>
  <div>
    <div class="menu-placeholder">
      <menu-base class="menu-fixed"></menu-base>
    </div>
    <nuxt class="main" />
  </div>
</template>

<script>
import menuBase from '~/components/menuBase.vue'
export default {
  components: {
    menuBase
  }
}
</script>

<style>
html,
body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 1%;
  line-height: 1.5;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #080808;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main {
  max-height: calc(100vh - 70px);
}

.menu-placeholder {
  height: 70px;
}

.menu-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
}
</style>
