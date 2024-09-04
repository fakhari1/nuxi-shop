// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    app: {
        head: {
            title: 'فروشگاه اینترنتی فخر',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    css: [
        '~/assets/css/core.css',
        '~/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    components: [
        '~/components',
        {
            path: '~/components/layouts/desktop',
            pathPrefix: false,
        },
        {
            path: '~/components/layouts/mobile',
            pathPrefix: false,
        },
        {
            path: '~/components/tailwindcss/alerts',
            pathPrefix: false,
        }
    ],
    modules: [
        '~/modules/auth'
    ],
})
