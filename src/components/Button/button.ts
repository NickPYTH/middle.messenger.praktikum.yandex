import Block, {BlockEvent, IBlockEvents} from '../../reactor/Block';
import {validateField} from '../../utils/validation';

type ButtonType = {
    id?: string;
    name?: string;
    className?: string;
    [key: string]: unknown;
}

export default class Button extends Block<ButtonType> {
    constructor(props: ButtonType) {
        const blurHandler: BlockEvent = (e: Event) => {
            this.handleBlur(e as FocusEvent);
        };

        const events: IBlockEvents = {
            ...(props.events || {}),
            blur: blurHandler,
            onClick: () => {alert('kek')}
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
            <button class=${this.props.className}>${this.props.name}</button>
        `;
    }
}
