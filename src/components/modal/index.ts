import Block, {IBlockEvents} from "../../reactor/Block";

type ModalType = {
    title?: string;
    form?: boolean;
    backButton?: Block;
    bodyContent?: Block[];
    footerContent?: Block[];
    events?: IBlockEvents;
}

export default class Modal extends Block {
    constructor(props: ModalType) {
        const children: Record<string, Block> = {};
        if (props.backButton) children.backButton = props.backButton;
        super({ ...props, ...children });
    }

    render(): string {
        return `
            <div class="wrapper">
                <div class="form">
                    <div class="form__title">
                        {{{backButton}}}
                        ${this.props.title ? 
                            `<div>${this.props.title}</div>`
                                :
                            ''}
                    </div>
                    ${this.props.form ?
                        `<form class="form__fields">{{{bodyContent}}}</form>`
                        :
                        `<div class="form__fields">{{{bodyContent}}}</div>`}
                    <div class="form__footer">{{{footerContent}}}</div>
                </div>
            </div>
         
        `;
    }
}
