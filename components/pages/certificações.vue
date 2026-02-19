<template>
  <div class="px-5 py-5">
    <b-row>
      <b-col
        v-for="cert in certifications"
        :key="cert.id"
        cols="12"
        md="6"
        lg="4"
        class="mb-4"
      >
        <b-card class="cert-card h-100" no-body>
          <b-card-body class="d-flex flex-column">
            <div class="cert-icon mb-3">
              <font-icon
                :icon="cert.icon"
                size="3x"
                class="text-info"
              ></font-icon>
            </div>
            <h5 class="cert-title mb-2">{{ cert.title }}</h5>
            <p class="cert-provider mb-2">{{ cert.provider }}</p>
            <small class="cert-date text-muted mb-3">{{ cert.date }}</small>
            <div
              v-if="cert.credentialId && cert.credentialId.trim() !== ''"
              class="cert-id mb-3 pb-2 border-bottom border-secondary"
            >
              <small class="text-muted">ID da Credencial:</small>
              <p class="mb-0">{{ cert.credentialId }}</p>
            </div>
            <b-link
              v-if="cert.crendentialUrl"
              class="cert-link"
              :href="cert.crendentialUrl"
              target="_blank"
            >
              Ver Credencial
              <font-icon icon="external-link-alt" size="sm"></font-icon>
            </b-link>
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
      certifications: [
        {
          id: 1,
          title: 'UI Design',
          provider: 'Argus Academy',
          date: '2024',
          credentialId: 'UC-a6ca737d-e0f9-4cb0-ad92-d4f29e9078c2',
          crendentialUrl:
            'https://www.udemy.com/certificate/UC-a6ca737d-e0f9-4cb0-ad92-d4f29e9078c2/',
          icon: ['fas', 'certificate']
        },
        {
          id: 2,
          title: 'Vue.js 2',
          provider: 'Cod3r',
          date: '2024',
          credentialId: 'UC-3d44799c-05ad-420a-bb19-f96a972084c3',
          crendentialUrl:
            'https://www.udemy.com/certificate/UC-3d44799c-05ad-420a-bb19-f96a972084c3/',
          icon: ['fas', 'certificate']
        },
        {
          id: 3,
          title: 'Desenvolvimento Web Moderno',
          provider: 'Cod3r',
          date: '2023',
          credentialId: 'UC-87ffd16e-f5ac-4401-8593-84c52c7990d6',
          crendentialUrl:
            'https://www.udemy.com/certificate/UC-87ffd16e-f5ac-4401-8593-84c52c7990d6/',
          icon: ['fas', 'certificate']
        },
        {
          id: 4,
          title: 'Introdução Prática ao TypeScript',
          provider: 'Dio.me',
          date: '2022',
          credentialId: 'BDEC9EFA',
          crendentialUrl: 'https://www.dio.me/certificate/BDEC9EFA/share',
          icon: ['fas', 'certificate']
        },
        {
          id: 5,
          title: 'TypeScript: Classes, Tipos e Interfaces',
          provider: 'Dio.me',
          date: '2022',
          credentialId: '54B1CB12',
          crendentialUrl: 'https://www.dio.me/certificate/54B1CB12/share',
          icon: ['fas', 'certificate']
        },
        {
          id: 6,
          title: 'Introdução ao Angular 8',
          provider: 'Dio.me',
          date: '2022',
          credentialId: '7121E3AC',
          crendentialUrl: 'https://www.dio.me/certificate/7121E3AC/share',
          icon: ['fas', 'certificate']
        },
        {
          id: 7,
          title: 'Instalando e Preparando o ambiente Angular',
          provider: 'Dio.me',
          date: '2022',
          credentialId: '83FF4CE2',
          crendentialUrl: 'https://www.dio.me/certificate/83FF4CE2/share',
          icon: ['fas', 'certificate']
        },
        {
          id: 8,
          title: 'Introdução ao Git e GitHub',
          provider: 'Dio.me',
          date: '2021',
          credentialId: '95494F30',
          crendentialUrl: 'https://www.dio.me/certificate/95494F30/share',
          icon: ['fas', 'certificate']
        },
        {
          id: 9,
          title: 'Responsive Web Design',
          provider: 'Freecodecamp',
          date: '2021',
          credentialId: '',
          crendentialUrl:
            'https://www.freecodecamp.org/portuguese/certification/brunoneves/responsive-web-design',
          icon: ['fas', 'certificate']
        }
      ]
    }
  }
}
</script>

<style scoped>
.cert-card {
  background-color: #1b1b1b;
  border: 1px solid #333;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.cert-card:hover {
  border-color: #555;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  transform: translateY(-4px);
}

.cert-icon {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
}

.cert-title {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
}

.cert-provider {
  font-size: 14px;
  color: #00d4ff;
  font-weight: 500;
  margin-bottom: 8px !important;
}

.cert-date {
  font-size: 12px;
}

.cert-id {
  font-size: 12px;
}

.cert-id p {
  font-family: monospace;
  font-size: 13px;
  color: #00d4ff;
  font-weight: 600;
}

.cert-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  margin-top: auto;
  border: 2px solid #00d4ff;
  border-radius: 4px;
  color: #00d4ff !important;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none !important;
  transition: all 0.3s ease;
}

.cert-link:hover {
  background-color: #00d4ff;
  color: #1b1b1b !important;
  box-shadow: 0 4px 12px rgba(0, 212, 255, 0.3);
}

.btn-info {
  background-color: #00d4ff;
  border-color: #00d4ff;
  color: #1b1b1b;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-info:hover {
  background-color: #00a8cc;
  border-color: #00a8cc;
}
</style>
