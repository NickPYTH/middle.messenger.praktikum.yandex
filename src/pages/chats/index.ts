import Block from "../../reactor/Block";
import ChatItem from "../../components/chatItem";
import Message from "../../components/message";
import SendMessageForm from "../../components/sendMessageForm";

export default class ChatsPage extends Block {
    constructor() {
        const chatItemOne = new ChatItem({
            to: 'Somebody',
            date: '10-01-2020',
            content: 'Some content',
            fromYou: true,
            hasUnReadCount: true,
            unReadCount: 10
        });
        const chatItemTwo = new ChatItem({
            to: 'Somebody 2',
            date: '11-01-2020',
            content: 'Some content 2',
            fromYou: false,
            hasUnReadCount: false,
            unReadCount: 0
        });
        const messageOne = new Message({
            content: 'Some message content 1',
            fromYou: false,
        });
        const messageTwo = new Message({
            content: 'Some message content 2',
            fromYou: true,
        });
        const sendMessageForm = new SendMessageForm();
        super({ chatItemOne, chatItemTwo, messageOne, messageTwo, sendMessageForm });
    }

    render(): string {
        return `
            <main class="chats-page">
                <div class="chats-list">
                    <div class="chats-list__header">
                        <a href="http://localhost:3000/pages/profile/profile.html" 
                            class="chats-list__header__profile">
                            Профиль
                            <div class="arrow-right"></div>
                        </a>
                        <div class="chats-list__header__search">
                            Поиск
                        </div>
                    </div>
                    <div class="chats-list__list">
                        {{{ chatItemOne }}}
                        {{{ chatItemTwo }}}
                    </div>
                </div>
                <div class="chat">
                    <div class="chat__header">
                        <div class="chat__header-name">Star</div>
                    </div>
                    <div class="chat__body">
                        {{{ messageOne }}}
                        {{{ messageTwo }}}
                    </div>
                    {{{ sendMessageForm }}}
                </div>
            </main>
        `;
    }
}
