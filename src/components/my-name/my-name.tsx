import { Component, Prop } from '@stencil/core';
import { ModalController } from '@ionic/core';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {

  @Prop() first: string;

  @Prop() last: string;
  @Prop({ connect: 'ion-modal-ctrl' }) modalCtrl: ModalController;
  display() {
    this.modalCtrl.create({ component: 'my-modal', componentProps: { mundo: 'mundo'} }).then((modal => {
      modal.present().then(() => {
        console.log('modal finished transitioning in, commments: ', modal.componentProps.mundo);
      })
    }))
  }
   render() {
    return (
      <div onClick={this.display.bind(this)}>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
