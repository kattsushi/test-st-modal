import { Component, Prop } from '@stencil/core';


@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.scss'
})
export class MyModal {
  @Prop() mundo;
  render() {
    return (
      <p>Hola {this.mundo}</p>
    );
  }
}
