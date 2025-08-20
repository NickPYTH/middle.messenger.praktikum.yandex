import Block from "../../reactor/Block";
import InputField from "../../components/input/input";
import Modal from "../../components/modal";
import Button from "../../components/button/button";
import Link from "../../components/link/link";
import {validateForm} from "../../utils/validation";

export default class EditProfilePage extends Block {
    constructor() {
        const bodyComponents = [
            new InputField({
                id: 'email',
                label: 'Почта',
                name: 'email',
                type: 'email',
                placeholder: 'Введите почту',
                value: 'some@mail.ru'
            }),
            new InputField({
                id: 'login',
                label: 'Логин',
                name: 'login',
                type: 'text',
                placeholder: 'Введите логин',
                value: 'logogogoog'
            }),
            new InputField({
                id: 'first_name',
                label: 'Имя',
                name: 'first_name',
                type: 'text',
                placeholder: 'Ввведите имя',
                value: 'Somename'
            }),
            new InputField({
                id: 'second_name',
                label: 'Фамилия',
                name: 'second_name',
                type: 'text',
                placeholder: 'Ввведите фамилию',
                value: 'Somesecondname'
            }),
            new InputField({
                id: 'display_name',
                label: 'Имя в чате',
                name: 'display_name',
                type: 'text',
                placeholder: 'Ввведите имя в чате',
                value: 'SomeDisplayName'
            }),
            new InputField({
                id: 'phone',
                label: 'Телефон',
                name: 'phone',
                type: 'tel',
                placeholder: 'Ввведите телефон',
                value: '79998887766'
            }),
            new Button({
                className: 'button--primary',
                name: 'Сохранить',
                id: 'submitButton',
                type: 'submit'
            }),
        ];

        const footerComponents = [
            new Link({
                id: 'backLink',
                text: 'Отменить и вернуться',
            }),
        ];

        const modal = new Modal({
            title: 'Редактирование профиля',
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
            console.log('New profile data:', data);
        } else {
            console.error('Error new profile data:', errors);
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
