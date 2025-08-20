import Block from "../../reactor/Block";
import {validateForm} from "../../utils/validation";

export default class SendMessageForm extends Block<any> {

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
            console.log('Message data:', data);
        } else {
            console.error('Message error:', errors);
        }
    }
    constructor() {

        super({events: {
                submit: (e: Event) => this.handleSubmit(e)
            }});
    }

    render(): string {
        return `
           <form class="chat__footer">
                        <textarea name="message" class="chat__footer-text" placeholder="Ваше сообщение"></textarea>
                        <button type="submit" class="chat__footer-send">Отправить</button>
                    </form>
        `;
    }
}
