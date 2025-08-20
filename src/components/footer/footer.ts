import Block, {IBlockEvents} from "../../reactor/Block";

export type FooterLinkType = {
    linkTitle: string;
    page: string;
}

type propsType = {
    links: FooterLinkType[];
    events?: IBlockEvents;
}

export default class Footer extends Block {
    constructor(props: propsType) {
        super({
            ...props,
            attr: {
                class: 'footer'
            }
        });
    }

    render(): string {
        return `<footer>
                    <nav class="footer-links">
                        {{#each links}}
                            <button class="footer-link" data-target="{{page}}">
                                {{linkTitle}}
                            </button>
                        {{/each}}
                    </nav>
            </footer>
        `;
    }
}
