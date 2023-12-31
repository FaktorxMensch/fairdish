// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},
    modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxtjs/supabase", "nuxt-vuetify"],
    supabase: {
        redirectOptions: {
            exclude: ["/", "/login", "/register", "/kontakt", "/partner-werden","/partner/verwalten",
                "/partner/verwalten/**"],
        }
    },
    imports: {
        presets: [{
            // run yarn add sweetalert2
            from: 'sweetalert2',
            imports: [{name: 'default', as: 'Swal'}],
        }]
    },
})
