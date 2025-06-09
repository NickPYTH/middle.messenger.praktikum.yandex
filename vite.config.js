
import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

const chats = [
  {
    to: "Star",
    content: "Hi maan!",
    date: '15:12',
    fromYou: true,
    unReadCount: 0,
    hasUnReadCount: false,
  },
  {
    to: "Mellory",
    content: "Hi maan!",
    date: '15:12',
    fromYou: false,
    unReadCount: 1,
    hasUnReadCount: true
  },
  {
    to: "Butcher",
    content: "Hi maan!",
    date: '15:12',
    fromYou: true,
    unReadCount: 0,
    hasUnReadCount: false
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
        {
          linkName: 'Профиль',
          link: './pages/profile/profile.html'
        },
        {
          linkName: '404',
          link: './pages/notFound/notFound.html'
        },
        {
          linkName: '500',
          link: './pages/error/error.html'
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
    '/pages/profile/profile.html': {
      pageName: 'Профиль',
    },
    '/pages/notFound/notFound.html': {
      pageName: '404',
    },
    '/pages/error/error.html': {
      pageName: '500',
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
        profile: resolve(__dirname, './src/pages/profile/profile.html'),
        notFound: resolve(__dirname, './src/pages/notFound/notFound.html'),
        error: resolve(__dirname, './src/pages/error/error.html'),
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
