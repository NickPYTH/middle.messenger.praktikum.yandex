import { validateForm } from '../../utils/validation';
import Block from "../../reactor/Block";
import InputField from "../../components/input/input";
import Modal from "../../components/modal";
import Button from "../../components/Button/button";

export default class AuthPage extends Block {
    constructor() {
        const bodyComponents = [
            new InputField({
                id: 'inputLogin',
                label: 'Логин',
                name: 'login',
                type: 'text',
                placeholder: 'Введите логин',
            }),
            new InputField({
                id: 'inputPassword',
                label: 'Пароль',
                name: 'password',
                type: 'password',
                placeholder: 'Ввведите пароль',
            })
        ];

        const footerComponents = [
            new Button({
                id: 'submitButton',
                name: 'Войти',
                className: 'button--primary'
            }),
        ];

        const modal = new Modal({
            className: 'modal-auth',
            title: 'Вход',
            form: true,
            bodyContent: bodyComponents,
            footerContent: footerComponents,
            //events: {
                 //submit: (e: Event) => this.handleSubmit(e)
             //}
        });

        super({ modal });
    }

    handleSubmit(event: Event) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const data: Record<string, string> = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        const errors = validateForm(data);

        if (Object.keys(errors).length === 0) {
            console.log('Form data:', data);
        } else {
            console.error('Validation errors:', errors);
        }
    }

    render(): string {
        return `
            <div class="auth">
                {{{modal}}}
            </div>
        `;
    }
}
