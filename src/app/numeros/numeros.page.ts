import { Component, OnInit } from '@angular/core';
import {NativeAudio} from '@capacitor-community/native-audio'
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {
  private tema:any;
  private idioma:any;


  constructor() {     
    //this.onReproductor(1);
  }

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
              src: ['../../assets/sonidos/Español/Numeros/1.ogg']
            });
          }

          if(this.idioma == "Portugues"){
            sound = new Howl({
              src: ['../../assets/sonidos/Portugues/Numeros/1.ogg']
            });                      
          }

          if(this.idioma == "Ingles"){
            sound = new Howl({
              src: ['../../assets/sonidos/Ingles/Numeros/1.ogg']
            });                      
          }

          sound.play();
        break;
      case 2:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Numeros/2.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Numeros/2.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Numeros/2.ogg']
          });                      
        }

        sound.play();
        break;
      case 3:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Numeros/3.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Numeros/3.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Numeros/3.ogg']
          });                      
        }

        sound.play();        
        break;
      case 4:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Numeros/4.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Numeros/4.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Numeros/4.ogg']
          });                      
        }

        sound.play();
        break;
      case 5:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Numeros/5.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Numeros/5.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Numeros/5.ogg']
          });                      
        }

        sound.play();
        break;
      case 6:
        if(this.idioma == "Español"){
          sound = new Howl({
            src: ['../../assets/sonidos/Español/Numeros/6.ogg']
          });
        }

        if(this.idioma == "Portugues"){
          sound = new Howl({
            src: ['../../assets/sonidos/Portugues/Numeros/6.ogg']
          });                      
        }

        if(this.idioma == "Ingles"){
          sound = new Howl({
            src: ['../../assets/sonidos/Ingles/Numeros/6.ogg']
          });                      
        }

        sound.play();
        break;
    }
  }

}
