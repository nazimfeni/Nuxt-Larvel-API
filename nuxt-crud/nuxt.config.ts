// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "NUXT 3 CRUD Application",
      meta:[{charset: 'utf-8'},
      {name:'viewport', content:'width=device-width, initial-scale=1' },
      {hid:'description', name: 'description', content:'NUXT 3 CRUD Application meta desc' },
      {name:'format-detection', content:'telephone=no'}
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com'
      },
      { rel: 'icon',
      type: 'image/x-icon',
      href:'/favicon.ico'
    },
    {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
    }
    ],
    script: [
      {src: 'https://code.jquery.com/jquery-3.7.1.min.js',
      type: 'text/javascript',
    },
      {src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
      type: 'text/javascript',
    }

    ]

    }
  }
})
