import Block from "../../reactor/Block";
import Link from "../../components/link/link";

export default class ErrorPage extends Block {
    constructor() {
        const backToChatsLink = new Link({
                id: 'dropProgerAndBackLink',
                text: 'Уволить программиста и вернуться к чатам',
            });
        super({backToChatsLink});
    }

    render(): string {
        return `
            <div class="error-page">
                <div class="error-page__title">
                    500
                </div>
                <div class="error-page__description">
                    Все сломалось
                </div>
               {{{ backToChatsLink }}}
            </div>
        `;
    }
}
