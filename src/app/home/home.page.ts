import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../services/auth.service';

import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  private email: any;

  private colores: boolean;
  private animales: boolean;
  private numeros: boolean;

  private banderaEspa: boolean;
  private banderaIng: boolean;
  private banderaPor: boolean;

  public load: boolean = true;

  constructor(
    private authSvc:AuthService, 
    private router: Router, 
    private afAuth: AngularFireAuth,
    private activatedRoute: ActivatedRoute,
    public loadingController: LoadingController
  ) {
    this.animales = true;
    this.colores = false;
    this.numeros = false;

    this.banderaEspa = true;
    this.banderaIng = false;
    this.banderaPor = false;  

    localStorage.setItem('idioma','Español');  
    localStorage.setItem('tema','Animales');
  }

  ngOnInit(){
    this.email = localStorage.getItem('email');
  }
  
  onLogout(){            
    this.load = false;

    setTimeout(() => {
      this.load = true;
      console.log('Deslogueando!!!');
      localStorage.removeItem('email');
      localStorage.removeItem('tema');
      localStorage.removeItem('idioma');
      this.afAuth.signOut();

      document.getElementById("email").setAttribute('value',"");
      document.getElementById("password").setAttribute('value',""); 

      this.router.navigateByUrl('/login');  
    }, 500);
    
  }

  
  selecIdioma(ev:any){
    console.log(ev);
    switch (ev) {
      case "Español":
          console.log("Selecciono Español");
          this.banderaEspa = true;
          this.banderaIng = false;
          this.banderaPor = false;

          localStorage.setItem('idioma','Español');  
        break;

      case "Ingles":
    console.log("Selecciono ingles");
          this.banderaEspa = false;
          this.banderaIng = true;
          this.banderaPor = false;

          localStorage.setItem('idioma','Ingles');
        break;

      case "Portugues":
        console.log("Selecciono Portugues");
          this.banderaEspa = false;
          this.banderaIng = false;
          this.banderaPor = true;

          localStorage.setItem('idioma','Portugues');  
        break;
    }
  }

  selectTema(ev: any) {
    console.log(ev);
    switch (ev) {
      case "Colores":
          this.numeros = false;
          this.colores = true;
          this.animales = false;
          
          localStorage.setItem('tema','Colores');
      break;
      case "Numeros":
          this.numeros = true;
          this.colores = false;
          this.animales = false;

          localStorage.setItem('tema','Numeros');
      break;
      case "Animales":
          this.numeros = false;
          this.colores = false;
          this.animales = true;

          localStorage.setItem('tema','Animales');
      break;
    }
  }


}
