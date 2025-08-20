import Block from "../../reactor/Block";
import InputField from "../../components/input/input";
import Modal from "../../components/modal";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import {validateForm} from "../../utils/validation";

export default class RegistrationPage extends Block {
    constructor() {
        const bodyComponents = [
            new InputField({
                id: 'inputFirstName',
                label: 'Имя',
                name: 'first_name',
                type: 'text',
                placeholder: 'Введите имя',
            }),
            new InputField({
                id: 'inputSecondName',
                label: 'Фамилия',
                name: 'second_name',
                type: 'text',
                placeholder: 'Введите фамилию',
            }),
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
            new InputField({
                id: 'inputEmail',
                label: 'Почта',
                name: 'email',
                type: 'email',
                placeholder: 'Ввведите почту',
            }),
            new InputField({
                id: 'inputPhone',
                label: 'Телефон',
                name: 'phone',
                type: 'tel',
                placeholder: 'Ввведите телефон',
            }),
            new Button({
                className: 'button--primary',
                name: 'Зарегистрироваться',
                id: 'submitButton',
                type: 'submit'
            }),
        ];

        const footerComponents = [
            new Link({
                id: 'loginLink',
                text: 'Войти',
            }),
        ];

        const modal = new Modal({
            title: 'Регистрация',
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

        const formErrors = validateForm(data);

        if (Object.keys(formErrors).length === 0) {
            console.log('Form data:', data);
        } else {
            console.error('Validation errors:', formErrors);
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
