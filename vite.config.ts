import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'
// const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), alias()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    // per bootstrap guarda qui
    // https://stackoverflow.com/questions/64502855/vite-import-css-with-alias-in-main-ts
    // https://www.youtube.com/watch?v=oZ9zlS5V5WU
    // configurazione SCSS
    // ho importato il file direttamente in main.ts, è un test, nel caso non andasse scommetanre questa parte
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "./src/scss/_variables.scss";`
    //         }
    //     }
    // },
    // CONDIVISIONE PACCHETTI, Tutorial: https://www.youtube.com/watch?v=5QV9wVc8c7g
    // CONDIVISIONE PACCHETTI - configurazione per la build 
    build: {
        lib: {
            // the entry file that is loaded whenever someone imports
            // your plugin in their app
            entry: [resolve(__dirname, 'src/index.js')],

            // the exposed global variable
            // is required when formats includes 'umd' or 'iife'
            name: 'EsmaForm',

            // the proper extensions will be added, ie:
            // name.js (es module)
            // name.umd.cjs) (common js module)
            // default fileName is the name option of package.json
            fileName: 'esma-form'
        },
        rollupOptions: {

            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})


