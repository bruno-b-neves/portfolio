<template>
  <div class="d-flex justify-content-between w-100">
    <div v-for="build in builds" :key="build.name">
      <b-card align="center" class="border-secondary pb-1">
        <font-icon :icon="build.icon" size="xl"></font-icon>
      </b-card>
    </div>
  </div>
  <!-- <b-row>
    <b-col v-for="build in builds" :key="build.name" cols="12" md="3">
    </b-col>
  </b-row> -->
</template>
<script>
export default {
  data() {
    return {
      builds: [
        {
          name: 'Vuejs',
          icon: ['fab', 'vuejs']
        },
        {
          name: 'Bootstrap',
          icon: ['fab', 'bootstrap']
        },
        {
          name: 'Sass',
          icon: ['fab', 'sass']
        },
        {
          name: 'JavaScript',
          icon: ['fab', 'square-js']
        },
        {
          name: 'Git',
          icon: ['fab', 'git-alt']
        }
      ]
    }
  }
}
</script>
<style scoped>
.card {
  border-radius: 6px;
  width: 180px;
  height: 75px;
  background-color: inherit;
}

.card .card-body {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card .card-body .svg-inline--fa {
  color: #fff;
  opacity: 30%;
}
</style>
