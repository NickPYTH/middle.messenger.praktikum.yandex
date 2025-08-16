import Block, {BlockEvent, IBlockEvents} from '../../reactor/Block';
import {validateField} from '../../utils/validation';

type InputType = {
    id?: string;
    type?: string;
    placeholder?: string;
    name?: string;
    className?: string;
    events?: IBlockEvents;
    value?: string;
    [key: string]: unknown;
}

export default class InputField extends Block<InputType> {
    constructor(props: InputType) {
        const blurHandler: BlockEvent = (e: Event) => {
            this.handleBlur(e as FocusEvent);
        };

        const events: IBlockEvents = {
            ...(props.events || {}),
            blur: blurHandler
        };
        const inputClass = `input ${props.className || ''}${props.error ? ' error' : ''}`;

        super({
            ...props,
            inputClass,
            events
        });
    }

    handleBlur(e: Event): void {
        const input = e.target as HTMLInputElement;
        const { name, value } = input;
        const error = validateField(name, value);
        this.setProps({
            error,
            value,
            inputClass: `input ${this.props.className || ''}${error ? ' error' : ''}`
        });
    }

    render(): string {
        return `
            <input
                id=${this.props.id || ''}
                type="${this.props.type}"
                placeholder="${this.props.placeholder}"
                name="${this.props.name}"
                class="${this.props.inputClass}"
                value="${this.props.value || ''}"
            />
        `;
    }
}
