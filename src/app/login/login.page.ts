import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';

import {ToastController} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const {SplashScreen} = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();
  private acceso_Pepe: any = false;
  private acceso_Pedro: any= false;
  private acceso_Jose: any= false;
  public load: boolean = true;  
  

  public spanCorreo: boolean = false;
  public spanPassw: boolean = false;

  constructor(
    private router:Router, 
    private authSvc: AuthService, 
    public toastController: ToastController,
    public loadingController: LoadingController) 
  {  
  }

  ngOnInit() {      
    this.acceso_Pepe = document.getElementById('option-1',) as HTMLInputElement | null;
    this.acceso_Pedro = document.getElementById('option-2',) as HTMLInputElement | null;
    this.acceso_Jose = document.getElementById('option-2',) as HTMLInputElement | null;
  }

  async onLogin(){
    if(this.user.email == null || this.user.email == undefined || this.user.email == ""){
      this.spanCorreo = true;
      this.ErrorLoginCamposVacios();    
    }
    if(this.user.password == null || this.user.password == undefined || this.user.password == ""){
      this.spanPassw = true;
      this.ErrorLoginCamposVacios(); 
    }
    
    if(this.user.email != undefined && this.user.password != undefined && this.user.email != "" && this.user.password != ""){
      //this.SpinnerLoading();

      this.load = false;
      const user = await this.authSvc.onLogin(this.user);
      
      if(user != undefined){ 
        setTimeout(() => {
          this.load = true;

          //console.log('Successfully Logged In!!!');
          this.spanCorreo = false;
          this.spanPassw = false;           
          localStorage.setItem('email',this.user.email);
          this.acceso_Pepe.checked  = false;
          this.acceso_Pedro.checked  = false;
          this.acceso_Jose.checked  = false; 
          this.router.navigateByUrl('/home');
        }, 500);
      }else{
        this.load = true;
        this.ErrorLoginToast();
      }
    }
  }

  async ErrorLoginCamposVacios() {
    const toast = await this.toastController.create({
      position: 'top',
      message: 'Ingrese todos los campos.',
      duration: 1100,
      color: 'warning'
    });
    toast.present();
  }

  async ErrorLoginToast() {
    const toast = await this.toastController.create({
      position: 'top',
      message: 'Correo y/o Contraseña no son correctos.',
      duration: 1100,
      color: 'danger'
    });
    toast.present();
  }

  async SpinnerLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      spinner: 'crescent',
      duration: 500,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();    
  }

  private setInputEmailPassword(){
    document.getElementById("email").setAttribute('value',this.user.email);
    document.getElementById("password").setAttribute('value',this.user.password); 
  }

  private autoLogin(userAuto: number)
  {
    switch(userAuto){
      case 1:         
        this.user.email = "pepe@gmail.com";
        this.user.password = "Pepe159";  
        this.setInputEmailPassword(); 
      break;

      case 2:      
        this.user.email = "pedro@gmail.com";
        this.user.password = "Pedro159";
        this.setInputEmailPassword();           
      break;

      case 3:
        this.user.email = "jose@gmail.com";
        this.user.password = "Jose159";
        this.setInputEmailPassword();        
      break;
    }
    //this.onLogin();
  }


}
