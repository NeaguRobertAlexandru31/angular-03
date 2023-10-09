import { Component, OnInit } from "@angular/core";

interface Cliente{
  id?: number,
  nome: string,
  surname: string,
  altezza?: number,
  email: string,
  sesso: "M" | "F" | "-1",
  dataNascita: any,
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  datiAnagrafici = true;
  infoStudi = false;
  infoLavori = false;

  jsonIn: Cliente = {
    nome: "",
    surname: "",
    email: "",
    sesso: "-1",
    dataNascita: "",
  };

  onDataNascitaChange($event: any){
    console.log($event);
  }

  constructor() {}

  ngOnInit(): void {

  }

  save(){
    
  }

  /* Alternate pen/close sections on click */
  toggleSezione(nomeSezione: string) {
    this.datiAnagrafici = false;
    this.infoStudi = false;
    this.infoLavori = false;

    if (nomeSezione === "datiAnagrafici") {
      this.datiAnagrafici = true;
    } else if (nomeSezione === "infoStudi") {
      this.infoStudi = true;
    } else if (nomeSezione === "infoLavori") {
      this.infoLavori = true;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
