import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {MessagesService} from 'src/app/services/messages.service';
import {UserServiceService} from '../../services/user-service.service';


@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
})
export class ModalRegisterComponent implements OnInit {

  public user = {
    nombre: '',
    telefono: '',
    img: '',
    email: '',
    password: '',
    rol: 'USER_ROLE',
    check: true,
  }

  mostrar: boolean;

  constructor(public modalCtrl: ModalController,
              private router: Router, public servicesUser: UserServiceService,
              private messagesService: MessagesService) {
  }

  ngOnInit() { }

  exitArguments() {
    this.modalCtrl.dismiss();
  } // exitArguments

  exitWithArguments() {
    this.modalCtrl.dismiss({
    });

  }// exitArguments

  async callRegister() {

    this.mostrar = true;
    console.log('user', this.user);

    this.servicesUser.MakeRegister(this.user).subscribe(async (data: any) => {
      // swal(data.mensaje, ' ', "success")

      this.messagesService.presentToast(data.mensaje, 'success');

      this.modalCtrl.dismiss();
     

      this.router.navigateByUrl('/home');

    }, error => {
      this.mostrar = false;
      this.messagesService.presentToast(error.error.mensaje, 'danger');

    });
  }// callRegister

  postData(postData: any) {
    throw new Error('Method not implemented.');
  }


}
