import Block from "../../reactor/Block";
import ChatItem from "../chatItem";

export default class ChatsPage extends Block {
    constructor() {
        const chatItem = new ChatItem({
            to: 'zaaalupa',
            date: '10-01-2020',
            content: 'akdnbasjlbdkasjd',
            fromYou: true,
            hasUnReadCount: true,
            unReadCount: 10
        });

        super({ chatItem });
    }

    render(): string {
        return `
            <main class="chats-page">
                <div class="chats-list">
                    <div class="chats-list__header">
                        <a href="http://localhost:3000/pages/profile/profile.html" class="chats-list__header__profile">
                            Профиль
                            <div class="arrow-right"></div>
                        </a>
                        <div class="chats-list__header__search">
                            Поиск
                        </div>
                    </div>
                    <div class="chats-list__list">
                        {{{ chatItem }}}
                    </div>
                </div>
                <div class="chat">
                    <div class="chat__header">
                        <div class="chat__header-name">Star</div>
                    </div>
                    <div class="chat__body">
                            <div class="message message--left">
                                    Свяжите аккаунты на Яндекс.Практикуме и GitHub и клонируйте репозиторий. Не переименовывайте его и убедитесь, что он публичный у вас в GitHub. Иначе ревьюер потом не сможет проверить работу.
                            </div>
                            <div class="message message--right">
                                    После выполнения всех заданий, откройте pull request из ветки sprint_1 в ветку main. Назовите его "Sprint 1".
                            </div>
                    </div>
                    <div class="chat__footer">
                        <textarea name="message" class="chat__footer-text" placeholder="Ваше сообщение"></textarea>
                        <button type="submit" class="chat__footer-send">Отправить</button>
                    </div>
                </div>
            </main>
        `;
    }
}
