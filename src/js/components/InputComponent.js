import BaseComponent from './BaseComponent.js';

export default class InputComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.initTemplate(props);
    }

    initTemplate = () => {
        this.template = document.createElement('input');
        this.target.appendChild(this.template);
    };
};