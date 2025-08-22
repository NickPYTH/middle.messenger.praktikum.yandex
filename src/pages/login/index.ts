import Block from "../../reactor/Block";
import InputField from "../../components/input/input";
import Modal from "../../components/modal";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import {validateForm} from "../../utils/validation";

export default class LoginPage extends Block {
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
            }),
            new Button({
                className: 'button--primary',
                name: 'Войти',
                id: 'submitButton',
                type: 'submit'
            }),
        ];

        const footerComponents = [
            new Link({
                id: 'regLink',
                text: 'Зарегестрироваться',
            }),
        ];

        const modal = new Modal({
            title: 'Вход',
            form: true,
            bodyContent: bodyComponents,
            footerContent: footerComponents,
            events: {
                 submit: (e: Event) => this.handleSubmit(e)
             }
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
