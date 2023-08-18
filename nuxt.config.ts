// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: '/styles/index.css' }
      ],
      meta: [
        {
          name: 'description', content: 'Hai, saya Zulfahmi, seorang pengembang yang berfokus pada pengembangan Web dan Aplikasi Selular yang berpengalaman selama empat tahun. Sudah tersertifikasi nasional oleh Lembaga Sertifikasi Profesi Komputer dalam bidang Programming and Software Development pada tahun 2020. Kepuasan pelanggan adalah prioritas saya, dan perlu di ingat, bahwa aplikasi dari saya sepenuhnya dibuat dengan sepenuh hati dan tidak asal jadi.'
        },
        {
          name: 'application-name', content: 'Zulfahmidev'
        },
        {
          name: 'creator', content: 'Zulfahmi'
        },
        {
          name: 'author', content: 'Zulfahmi'
        },
        {
          name: 'keywords', content: 'zulfahmi, zulfahmidev, indonesia, aceh, lhokseumawe, mobile, web, website, mobile app, android, ios, react native, flutter, swift, web developer, web enginer, software enginering, pengembang web, mobile enginering, mobile developer, pengembang aplikasi mobile, pengembang, perangkat lunak, professional, wordskill, lomba kopetensi siswa, sertifikasi nasional, lembaga sertifikasi profesi komputer, komputer, computer, programming, programmer, bangkit, acedmy'
        },
        {
          name: 'title', content: 'Zulfahmidev'
        }
      ]
    }
  }
})
