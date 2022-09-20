import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.page.html',
  styleUrls: ['./colores.page.scss'],
})
export class ColoresPage implements OnInit {
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
              src: ['../../assets/sonidos/Español/Colores/blanco.ogg']
            });
          }

          if(this.idioma == "Portugues"){
            sound = new Howl({
              src: ['../../assets/sonidos/Portugues/Colores/blanco.ogg']
            });                      
          }

          if(this.idioma == "Ingles"){
            sound = new Howl({
              src: ['../../assets/sonidos/Ingles/Colores/blanco.ogg']
            });                      
          }

          sound.play();
        break;
      case 2:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Colores/negro.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Colores/negro.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Colores/negro.ogg']
          });                      
        }

        sound.play();
        break;
      case 3:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Colores/rojo.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Colores/rojo.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Colores/rojo.ogg']
          });                      
        }

        sound.play();        
        break;
      case 4:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Colores/azul.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Colores/azul.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Colores/azul.ogg']
          });                      
        }

        sound.play();
        break;
      case 5:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Colores/amarillo.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Colores/amarillo.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Colores/amarillo.ogg']
          });                      
        }

        sound.play();
        break;
      case 6:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Colores/verde.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Colores/verde.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Colores/verde.ogg']
          });                      
        }

        sound.play();
        break;
    }
  }
}
