import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public toastController: ToastController) { }

  async presentToast(msg, type, positionIN?) {
    if(positionIN === null)
       positionIN = 'top';
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      cssClass: 'alignText',
      position: positionIN,
      color: type
    });
    toast.present();
  }

}
