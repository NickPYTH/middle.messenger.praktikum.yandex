import { defineConfig } from 'vite'
//@ts-ignore
import handlebars from 'vite-plugin-handlebars';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [handlebars(), checker({
    typescript: true,
  })],
  publicDir: 'static',
  server: {
    port: 3000
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "variables" as *;
        `,
      }
    }
  }
})
