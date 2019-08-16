import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { MessagesService } from 'src/app/services/messages.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ModalRegisterComponent } from '../../components/modal-register/modal-register.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public dataMail: string;
  public dataKey: string;
  public postData: any;
  public mostrar: boolean;
  public rolUser: string;

  constructor(
    private servicesUser: UserServiceService,
    private router: Router,
    public modalCtrl: ModalController,
    private messagesService: MessagesService,
    private storage: Storage

  ) { }

  ngOnInit() {
  }

  validateUser() {
    this.postData = {
      email: this.dataMail,
      password: this.dataKey
    };
    this.mostrar = true;
    this.servicesUser.MakeAutentication(this.postData).subscribe(
      (data: any) => {
        this.storage.set('token', data.token);
        this.storage.set('rol', data.usuario.rol);
        this.storage.set('nombre', data.usuario.nombre);
        this.storage.set('idUser', data.usuario._id);

        if (data.usuario.rol === 'USER_ROLE') {
          this.router.navigateByUrl('/dashboard');
        }
        if (data.usuario.rol === 'ADMIN_ROLE') {
          this.router.navigateByUrl('/dashboard');
        }
      },
      error => {
        this.mostrar = false;
        console.log(error.error.mensaje);
        this.messagesService.presentToast(error.error.mensaje, 'danger');
      }
    );
  } // validateUser

  async callRegister() {
   
    const modal = await this.modalCtrl.create({
      animated: true,
      cssClass: 'dialog-modal',
      component: ModalRegisterComponent,
      componentProps: {}
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
  } // callRegister


}
