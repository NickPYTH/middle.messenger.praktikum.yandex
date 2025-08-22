import Block from "./reactor/Block";
import LoginPage from "./pages/login";
import Footer from "./components/footer/footer";
import RegistrationPage from "./pages/registration";
import ChatsPage from "./pages/chats";
import EditProfilePage from "./pages/editProfile";
import ProfilePage from "./pages/profile";
import ChangePasswordPage from "./pages/changePassword";
import NotFoundPage from "./pages/notFound";
import ErrorPage from "./pages/error";

type AppStateType = {
    currentPage: string;
}

const linksList = [
    { linkTitle: 'Авторизация', page: 'AuthPage' },
    { linkTitle: 'Регистрация', page: 'RegistrationPage' },
    { linkTitle: 'Чаты', page: 'ChatsPage' },
    { linkTitle: 'Профиль', page: 'ProfilePage' },
    { linkTitle: 'Изменение профиля', page: 'EditProfilePage' },
    { linkTitle: 'Смена пароля', page: 'ChangePasswordPage' },
    { linkTitle: 'Ошибка 404', page: 'NotFoundPage' },
    { linkTitle: 'Ошибка 500', page: 'ErrorPage' }
];

export default class App {
    state: AppStateType;
    element: HTMLElement;
    private currentPage: Block | null = null;
    private footer: Footer;

    constructor() {
        this.state = {
            currentPage: 'AuthPage'
        };
        this.navigateTo = this.navigateTo.bind(this);
        this.handleFooterClick = this.handleFooterClick.bind(this);
        const appElement = document.getElementById('app');
        if (!appElement) {
            throw new Error('App element not found');
        }
        this.element = appElement;

        this.footer = new Footer({
            links: linksList,
            events: {
                click: (e: Event) => this.handleFooterClick(e)
            }
        });
        const footerElement = this.footer.getContent();

        this.element.appendChild(footerElement);

        this.render();
    }
    private handleFooterClick = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target && target.dataset.target) {
            e.preventDefault();
            this.navigateTo(target.dataset.target);
        }
    }

    public navigateTo(page: string) {
        this.state.currentPage = page;
        this.updateActiveLink(page);
        this.render();
    }

    private updateActiveLink(page: string) {
        const links = this.element.querySelectorAll('.footer-link');
        links.forEach(link => {
            if (link instanceof HTMLElement && link.dataset.target === page) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    public render() {
        if (this.currentPage) {
            const oldContent = this.currentPage.getContent();
            if (oldContent && oldContent.parentNode === this.element) {
                oldContent.remove();
            }
            this.currentPage = null;
        }

        switch (this.state.currentPage) {
            case 'AuthPage':
                this.currentPage = new LoginPage();
                break;
            case 'RegistrationPage':
                this.currentPage = new RegistrationPage();
                break;
            case 'ChatsPage':
                this.currentPage = new ChatsPage();
                break;
            case 'EditProfilePage':
                this.currentPage = new EditProfilePage();
                break;
            case 'ProfilePage':
                this.currentPage = new ProfilePage();
                break;
            case 'ChangePasswordPage':
                this.currentPage = new ChangePasswordPage();
                break;
            case 'NotFoundPage':
                this.currentPage = new NotFoundPage();
                break;
            case 'ErrorPage':
                this.currentPage = new ErrorPage();
                break;
            default:
                this.currentPage = new LoginPage();
                break;
        }

        const pageContent = this.currentPage.getContent();
        const footer = this.element.querySelector('footer');
        if (pageContent && footer) {
            this.element.insertBefore(pageContent, footer);
            this.currentPage.show();
        } else if (pageContent) {
            this.element.appendChild(pageContent);
            this.currentPage.show();
        }

        this.updateActiveLink(this.state.currentPage);
    }
}
