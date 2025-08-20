import Block, {BlockEvent, IBlockEvents} from '../../reactor/Block';
import {validateField} from '../../utils/validation';

type InputType = {
    id?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    events?: IBlockEvents;
    value?: string;
    disabled?: boolean;
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

        super({
            ...props,
            events
        });
    }

    handleBlur(e: Event): void {
        const input = e.target as HTMLInputElement;
        const { name, value } = input;
        const error = validateField(name, value);
        this.props
        this.setProps({
            error,
            value,
            errorClass: `${error ? 'form__input-error' : ''}`
        });
    }

    render(): string {
        return `
                <input
                    id=${this.props.id || ''}
                    type="${this.props.type}"
                    placeholder="${this.props.placeholder}"
                    name="${this.props.name}"
                    class="form__input ${this.props.errorClass}"
                    value="${this.props.value || ''}"
                    ${this.props.disabled ? "disabled":""}
                />
        `;
    }
}
