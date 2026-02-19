<template>
  <b-container class="main" fluid="lg">
    <section id="home" class="section-anchor">
      <header-info></header-info>
    </section>
    <section id="sobre" class="section-anchor">
      <title-bar title="Sobre"></title-bar>
      <sobre-mim></sobre-mim>
    </section>
    <section id="certificacoes" class="section-anchor">
      <title-bar title="Certificações"></title-bar>
      <certificacoes></certificacoes>
    </section>
    <section id="projetos" class="section-anchor"></section>
  </b-container>
</template>
<script>
import headerInfo from '~/components/header.vue'
import titleBar from '~/components/titleBar.vue'
import sobreMim from '~/components/pages/about.vue'
import certificacoes from '~/components/pages/certificações.vue'
export default {
  layout: 'default',
  components: {
    headerInfo,
    titleBar,
    sobreMim,
    certificacoes
  }
}
</script>
<style scoped>
.section-anchor {
  scroll-margin-top: 80px;
}
</style>
