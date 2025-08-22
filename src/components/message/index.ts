import Block from "../../reactor/Block";

type MessageType = {
    content?: string;
    fromYou?: boolean;
}

export default class Message extends Block<MessageType> {
    constructor(props: MessageType) {
        super({
            ...props,
        });
    }

    render(): string {
        return `
           <div class="message ${this.props.fromYou ? 'message--left' : 'message--right'}">
            ${this.props.content}
           </div>
        `;
    }
}
