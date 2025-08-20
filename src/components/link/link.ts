import Block, {IBlockEvents} from "../../reactor/Block";

type LinkType = {
    id?: string;
    url?: string;
    text?: string;
    attr?: Record<string, string>;
    events?: IBlockEvents;
}

export default class Link extends Block {
    constructor(props: LinkType) {
        const children: Record<string, Block> = {};
        const attr: Record<string, string> | undefined = props.attr;
        if (props.id && attr) attr.id = props.id;
        super({
            text: props.text,
            attr,
            events: props.events,
            ...children
        });
    }
    render(): string {
        return `
            <a href="{{url}}" class="link--primary">
                {{text}}
            </a>`;
    }
}
