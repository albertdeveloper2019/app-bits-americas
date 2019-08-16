import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  validateUser(){

  }

  callRegister(){
    
  }

}
