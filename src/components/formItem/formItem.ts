import Block, {IBlockEvents} from "../../reactor/Block";
import InputField from "../input/input";

type FieldType = {
    id?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    name?: string;
    events?: IBlockEvents;
    value?: string;
    [key: string]: unknown;
}

export default class FormItem extends Block<FieldType> {
    constructor(props: FieldType) {
        const input = new InputField({
            ...props,
        });

        super({
            ...props,
            input
        });
    }

    render(): string {
        return `
            <div>
                <label class="form__label">
                    ${this.props.label}
                </label>
                {{{ input }}}
            </div>
        `;
    }
}
