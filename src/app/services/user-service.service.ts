import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public HttpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', }),
  };

  public url = environment.URL;
  public flag: boolean;
  token: any;
  rol: any;
  idUser: any;

  constructor(private http: HttpClient, private router: Router, private storage: Storage) {
     this.getToken();
  }

  MakeAutentication(postData: any) {
    return this.http.post(this.url + '/login', postData, this.HttpOptions);
  }

  saveDirecction(postData: any) {
    return this.http.post(this.url + '/direccion?token=' + this.token, postData );
  }


  getDirecction(postData: any) {
    return this.http.get(this.url + '/direccion');
  }

  MakeRegister(postData: any) {
    return this.http.post(this.url + '/usuario', postData, this.HttpOptions);
  }

  async guardaStorage(token: string) {
    this.token = token;
    this.storage.set('token', token);
  }

  async getToken() {
    this.token = await this.storage.get('token') || null;
  }

  async getRol() {
    this.rol = await this.storage.get('rol') || null;
  }

  async getIdUser() {
    this.idUser = await this.storage.get('idUser') || null;
  }

  async  validateToken(): Promise<boolean> {
    await this.getToken();

    if (!this.token) {
      this.router.navigateByUrl('/dashboard');
      return Promise.resolve(false);
    }
    return new Promise<boolean>(resolve => {
      this.storage.get('token').then((val) => {
        if (val) {
          resolve(true);
        } else {
          this.router.navigateByUrl('/dashboard');
          resolve(false);
        }
      });

    });
  }

  async  validateRol(): Promise<boolean> {
    await this.getRol();
    return new Promise<boolean>(resolve => {
      this.storage.get('rol').then((val) => {
        if (val === 'ADMIN_ROLE') {
          resolve(true);
        } else {
          this.router.navigateByUrl('/dashboard');
          resolve(false);
        }
      });
    });
  }

  listarDirecciones(idUser) {
    return this.http.get(this.url + '/busqueda/coleccion/direcciones/' + idUser + '?token=' + this.token);
  }

   eliminarDireccion(id) {
     return this.http.delete(this.url + '/direccion/' + id + '?token=' + this.token);
  }


}
