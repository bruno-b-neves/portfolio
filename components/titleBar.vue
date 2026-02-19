<template>
  <div class="titlebar shadow-sm">
    <h2 class="titlebar-title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.titlebar {
  display: flex;
  align-items: center;
  background-color: #1b1b1b;
  height: 70px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 1110px;
  padding: 0 34px;
}

.titlebar-title {
  margin: 0;
  font-size: 22px;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 1%;
  opacity: 0.3;
}
</style>
