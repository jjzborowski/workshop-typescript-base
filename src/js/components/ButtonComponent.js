import BaseComponent from './BaseComponent.js';

export default class ButtonComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.initTemplate(props);
    }

    initTemplate = ({ content, onClickHandler }) => {
        this.template = document.createElement('button');
        this.template.innerText = content;
        this.template.addEventListener('click', onClickHandler);
        this.target.appendChild(this.template);
    };
};