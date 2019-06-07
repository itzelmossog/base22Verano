import {Component, h, Method, Element} from '@stencil/core';

@Component({
    tag: 'my-modal',
    styleUrl: 'my-modal.scss'
})

export class MyModal{
    @Element() modalEl: HTMLElement;

    @Method()
    open() {
        this.modalEl.style.display = 'block';
    }

    render(){
        return <h1> Hello from my Modal</h1>
    }
}