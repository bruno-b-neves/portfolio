<template>
  <div>
    <div class="main-header">
      <div class="d-flex align-items-center justify-content-between w-100 px-5">
        <div class="box-info">
          <h1 class="display-4 font-weight-bold text-white">Bruno B. Neves</h1>
          <p class="lead text-white">
            Desenvolvedor Frontend, com experiência em criação de interfaces web
            modernas, responsivas e performáticas.
          </p>
          <b-link class="btn btn-primary">Vamos começar ></b-link>
        </div>
        <div class="box-img">
          <b-img
            src="../assets/img/profile-img.png"
            fluid
            alt="Profile Image"
            width="350"
            height="350"
            class="rounded-circle"
          ></b-img>
        </div>
      </div>

      <div class="box-builds">
        <build-works class="px-5"></build-works>
      </div>
    </div>
  </div>
</template>
<script>
import buildWorks from '~/components/buildWorks.vue'
export default {
  components: {
    buildWorks
  }
}
</script>
<style scoped>
.main-header {
  display: block;
  margin: 110px 0;
  margin-left: auto;
  margin-right: auto;
}

.box-info {
  width: 538px;
  margin-right: 35px;
}

.box-info p {
  width: 492px;
}

.box-info .btn {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px 0 0;
  width: 387px;
  height: 63px;
  font-size: 18px;

  border-radius: 4px;
}

.box-img {
  width: 350px;
  height: 350px;
}

.box-builds {
  margin-top: 95px;
}
</style>
