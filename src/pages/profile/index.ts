import Block from "../../reactor/Block";
import InputField from "../../components/input/input";
import Modal from "../../components/modal";
import Link from "../../components/link/link";

export default class ProfilePage extends Block {
    constructor() {
        const bodyComponents = [
            new InputField({
                id: 'email',
                label: 'Почта',
                name: 'email',
                type: 'email',
                placeholder: 'Введите почту',
                value: 'some@mail.ru',
                disabled: true
            }),
            new InputField({
                id: 'login',
                label: 'Логин',
                name: 'login',
                type: 'text',
                placeholder: 'Введите логин',
                value: 'logogogoog',
                disabled: true
            }),
            new InputField({
                id: 'first_name',
                label: 'Имя',
                name: 'first_name',
                type: 'text',
                placeholder: 'Ввведите имя',
                value: 'Somename',
                disabled: true
            }),
            new InputField({
                id: 'second_name',
                label: 'Фамилия',
                name: 'second_name',
                type: 'text',
                placeholder: 'Ввведите фамилию',
                value: 'Somesecondname',
                disabled: true
            }),
            new InputField({
                id: 'display_name',
                label: 'Имя в чате',
                name: 'display_name',
                type: 'text',
                placeholder: 'Ввведите имя в чате',
                value: 'SomeDisplayName',
                disabled: true
            }),
            new InputField({
                id: 'phone',
                label: 'Телефон',
                name: 'phone',
                type: 'tel',
                placeholder: 'Ввведите телефон',
                value: '79998887766',
                disabled: true
            }),
        ];

        const footerComponents = [
            new Link({
                id: 'editProfileLink',
                text: 'Редактировать',
            }),
            new Link({
                id: 'changePasswordLink',
                text: 'Сменить пароль',
            }),
            new Link({
                id: 'returnToChatsLink',
                text: 'Вернуться к чатам',
            }),
        ];

        const modal = new Modal({
            title: 'Профиль',
            form: true,
            bodyContent: bodyComponents,
            footerContent: footerComponents,
        });

        super({ modal });
    }

    render(): string {
        return `
            <div class="auth">
                {{{modal}}}
            </div>
        `;
    }
}
