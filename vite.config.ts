import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import { TDesignResolver } from 'unplugin-vue-components/resolvers';

import qiankun from 'vite-plugin-qiankun'


// https://vitejs.dev/config/
export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  console.log('test:', process.env.VITE_APP_BASE);

  return defineConfig({
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    },
    base: process.env.VITE_APP_BASE,
    server: {
      port: 3004,
      cors: true
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      },
    },
    plugins: [
      vue(),

      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/head',
          '@vueuse/core',
        ],
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
        dts: 'src/auto-imports.d.ts',
      }),

      Components({
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [TDesignResolver({
          library: 'vue-next'
        })],
        dts: 'src/components.d.ts',
      }),

      Pages({
        extensions: ['vue', 'md'],
      }),
      
      Unocss(),

      qiankun('app vue', {
          useDevMode: true,
      }),
    ],

    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
      ],
      exclude: [
        'vue-demi',
      ],
    },
  })
}

