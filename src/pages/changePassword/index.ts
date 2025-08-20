import Block from "../../reactor/Block";
import InputField from "../../components/input/input";
import Modal from "../../components/modal";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import {validateForm} from "../../utils/validation";

export default class ChangePasswordPage extends Block {
    constructor() {
        const bodyComponents = [
            new InputField({
                id: 'oldPassword',
                label: 'Старый пароль',
                name: 'oldPassword',
                type: 'password',
                placeholder: 'Ввведите старый пароль',
            }),
            new InputField({
                id: 'newPassword',
                label: 'Новый пароль',
                name: 'newPassword',
                type: 'password',
                placeholder: 'Ввведите новый пароль',
            }),
            new Button({
                className: 'button--primary',
                name: 'Сменить',
                id: 'submitButton',
                type: 'submit'
            }),
        ];

        const footerComponents = [
            new Link({
                id: 'backLink',
                text: 'Вернуться',
            }),
        ];

        const modal = new Modal({
            title: 'Смена пароля',
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
            console.log('Change password data:', data);
        } else {
            console.error('Password validation errors:', errors);
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
