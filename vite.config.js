
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const chats = [
  {
    to: "Nick",
    content: "Hi maan!",
    date: 'today',
    fromYou: true
  },
  {
    to: "Mellory",
    content: "Hi maan!",
    date: '15:12',
    fromYou: false
  },
  {
    to: "Butche",
    content: "Hi maan!",
    date: 'Wed',
    fromYou: true
  }
];

const pages = {
    '/index.html': {
      pageName: 'Спринт №1',
      pageLinks: [
        {
          linkName: 'Авторизация',
          link: './pages/login/login.html'
        },
        {
          linkName: 'Регистрация',
          link: './pages/registration/registration.html'
        },
        {
          linkName: 'Чаты',
          link: './pages/chats/chats.html'
        },
      ],
    },
    '/pages/login/login.html': {
      pageName: 'Авторизация',
    },
    '/pages/registration/registration.html': {
      pageName: 'Регистрация',
    },
     '/pages/chats/chats.html': {
      pageName: 'Чаты',
      chats,
    },
};

export default defineConfig({
  root: 'src', 
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, './src/index.html'), 
        login: resolve(__dirname, './src/pages/login/login.html'), 
        registration: resolve(__dirname, './src/pages/registration/registration.html'), 
        chats: resolve(__dirname, './src/pages/chats/chats.html'), 
      }
    },
    outDir: '../dist', 
    emptyOutDir: true, 
  },
  server: {
    open: '/', 
    port: 3000,
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
      context(pagePath) {
        return pages[pagePath];
      },
    })
  ],
  publicDir: '../static',
});
