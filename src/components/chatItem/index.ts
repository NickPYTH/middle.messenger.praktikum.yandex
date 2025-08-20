import Block from "../../reactor/Block";

type ChatItemType = {
    to?: string;
    date?: string;
    content?: string;
    fromYou?: boolean;
    hasUnReadCount?: boolean;
    unReadCount?: number;
}

export default class ChatItem extends Block<ChatItemType> {
    constructor(props: ChatItemType) {
        super({
            ...props,
        });
    }

    render(): string {
        return `
           <div class="chat-item">
                <div class="chat-item__image"></div>
                <div class="chat-item__message">
                    <div class="chat-item__message-to">${this.props.to}</div>
                    <div class="chat-item__message-content">
                    ${this.props.fromYou ? `<span class="chat-item__message-content-isFromYou">Вы:</span>` : ``}
                    ${this.props.content}
                    </div>
                </div>
                <div class="chat-item__extra">
                    <div class="chat-item__extra-time">${this.props.date}</div>
                    ${this.props.hasUnReadCount ?
                        `
                            <div class="chat-item__extra-count">
                              ${this.props.unReadCount}
                            </div>
                        ` 
                        : 
                    ``}
                </div>
            </div>
        `;
    }
}
