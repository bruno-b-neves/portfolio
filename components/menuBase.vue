<template>
  <b-container fluid="xl">
    <b-navbar class="shadow-sm" toggleable="lg" type="dark">
      <b-navbar-nav class="mr-auto navbar-nav-left" is-nav>
        <b-nav-item href="#home" class="nav-left" link-classes="link-left"
          >Home</b-nav-item
        >
        <b-nav-item href="#sobre" class="nav-left" link-classes="link-left"
          >Sobre</b-nav-item
        >
        <b-nav-item
          href="#certificacoes"
          class="nav-left"
          link-classes="link-left"
          >Certificações</b-nav-item
        >
        <b-nav-item
          href="#projetos"
          class="nav-left"
          link-classes="link-left"
          disabled
          >Projetos</b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto d-none" is-nav>
        <b-nav-item class="nav-right">
          <font-icon :icon="['fab', 'linkedin']" size="2x"></font-icon>
        </b-nav-item>
        <b-nav-item class="nav-right">
          <font-icon :icon="['fab', 'whatsapp']" size="2x"></font-icon>
        </b-nav-item>
        <b-nav-item class="nav-right">
          <font-icon :icon="['fab', 'github']" size="2x"></font-icon>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </b-container>
</template>
<script>
export default {}
</script>
<style scoped>
.navbar {
  background-color: #1b1b1b;
  height: 70px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 1110px;
}

.navbar .navbar-nav.navbar-nav-left {
  width: 717px;
  height: auto;
}

.navbar .navbar-nav .nav-link.link-left {
  padding: 18px 34px;
  font-size: 20px;
  letter-spacing: 1%;
}
</style>
