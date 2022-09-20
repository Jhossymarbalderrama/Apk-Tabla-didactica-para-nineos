import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {
  private tema:any;
  private idioma:any;
  constructor() { }

  ngOnInit() {
  }

  onReproductor(boton:any){
    this.tema = localStorage.getItem("tema");
    this.idioma = localStorage.getItem("idioma");
    var sound: any;
    //console.log("tema: "+this.tema+" Idioma:"+this.idioma);

   
    switch (boton) {
      case 1:          
          if(this.idioma == "Español"){
            sound = new Howl({
              src: ['../../assets/sonidos/Español/Animales/vaca.ogg']
            });
          }

          if(this.idioma == "Portugues"){
            sound = new Howl({
              src: ['../../assets/sonidos/Portugues/Animales/vaca.ogg']
            });                      
          }

          if(this.idioma == "Ingles"){
            sound = new Howl({
              src: ['../../assets/sonidos/Ingles/Animales/vaca.ogg']
            });                      
          }

          sound.play();
        break;
      case 2:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Animales/caballo.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Animales/caballo.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Animales/caballo.ogg']
          });                      
        }

        sound.play();
        break;
      case 3:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Animales/oveja.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Animales/oveja.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Animales/oveja.ogg']
          });                      
        }

        sound.play();        
        break;
      case 4:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Animales/cerdo.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Animales/cerdo.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Animales/cerdo.ogg']
          });                      
        }

        sound.play();
        break;
      case 5:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Animales/gallina.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Animales/gallina.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Animales/gallina.ogg']
          });                      
        }

        sound.play();
        break;
      case 6:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Animales/perro.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Animales/perro.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Animales/perro.ogg']
          });                      
        }

        sound.play();
        break;
    }
  }
}
