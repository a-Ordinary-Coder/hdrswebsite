// vite.config.ts
import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${path.resolve('src/pages/Home/demo03.less')}";`,
                },
                javascriptEnabled: true
            }
        }
    }
})