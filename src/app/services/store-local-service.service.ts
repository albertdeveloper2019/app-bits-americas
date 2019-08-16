import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class StoreLocalServiceService {
  token: any;

  constructor(private storage: Storage) { }// constructor

  saveDataUser(data: any) {
   this.storage.set('token', data.token);
   this.storage.set('id', data.id);
   this.storage.set('nombre', data.usuario.nombre);
   this.storage.set('rol', data.usuario.rol);
  }// saveDataUser

  removeDataUser() {
    this.storage.remove('token');
    this.storage.remove('id');
    this.storage.remove('nombre');
    this.storage.remove('rol');
  }// removeDataUser

  async getUserRol() {
    return await this.storage.get('rol');
  }// getUserRol

  getUserToken() {
    this.storage.get('token').then((val) => {
        console.log(val);
    });
  }// getUserToken

  async getUserID() {
    return await this.storage.get('id');
  }// getUserID

  async getUserNombre() {
    return await this.storage.get('nombre');
  }// getUserNombre

  async getLength() {
     return await this.storage.length();
  }// getLength

}
