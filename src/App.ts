import components from './components';
import pages from './pages';
import registerComponent from './reactor/utils/registerComponent';
import router from './reactor/Router';
import routes from './reactor/constants/routes';

Object.entries(components).forEach(([name, component]) => {
    registerComponent(name, component);
});

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(pages).forEach((page) => {
        router.use(routes[page], pages[page]);
    });
    router.start();
});
