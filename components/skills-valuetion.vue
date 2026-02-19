<template>
  <div class="skills-container py-5">
    <b-row>
      <b-col
        v-for="skill in skills"
        :key="skill.id"
        cols="12"
        md="6"
        lg="4"
        class="mb-4"
      >
        <b-card class="skill-card h-100" no-body>
          <b-card-body class="d-flex flex-column">
            <div class="skill-header mb-3">
              <h5 class="skill-name mb-0">{{ skill.name }}</h5>
              <span class="skill-percentage">{{ skill.percentage }}%</span>
            </div>
            <b-progress
              :value="skill.percentage"
              class="flex-grow-1"
            ></b-progress>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { id: 1, name: 'JavaScript', percentage: 85 },
        { id: 2, name: 'Vue.js', percentage: 80 },
        { id: 3, name: 'HTML5', percentage: 90 },
        { id: 4, name: 'CSS3 / SASS', percentage: 85 },
        { id: 5, name: 'Bootstrap', percentage: 88 },
        { id: 6, name: 'Git / GitHub', percentage: 80 },
        { id: 7, name: 'TypeScript', percentage: 30 },
        { id: 8, name: 'Nuxt.js', percentage: 30 }
      ]
    }
  }
}
</script>

<style scoped>
.skill-card {
  background-color: #1b1b1b;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.skill-card:hover {
  border-color: #555;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}

.skill-percentage {
  font-size: 14px;
  font-weight: 700;
  color: #00d4ff;
}

::v-deep .progress {
  background-color: #333;
  height: 8px;
}

::v-deep .progress-bar {
  background: linear-gradient(90deg, #00d4ff, #00a8cc);
}
</style>
