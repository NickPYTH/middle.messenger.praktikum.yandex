import Block from "../../reactor/Block";
import Link from "../../components/link/link";

export default class NotFoundPage extends Block {
    constructor() {
        const backToChatsLink = new Link({
                id: 'backLink',
                text: 'Вернуться к чатам',
            });
        super({backToChatsLink});
    }

    render(): string {
        return `
            <div class="error-page">
                <div class="error-page__title">
                    404
                </div>
                <div class="error-page__description">
                    Не туда попали
                </div>
               {{{ backToChatsLink }}}
            </div>
        `;
    }
}
