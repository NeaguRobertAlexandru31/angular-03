import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  datiAnagrafici = true;
  infoStudi = false;
  infoLavori = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSezione(nomeSezione: string) {
    if (nomeSezione === "datiAnagrafici") {
      this.datiAnagrafici = true;
      this.infoStudi = false;
      this.infoLavori = false;
    } else if (nomeSezione === "infoStudi") {
      this.datiAnagrafici = false;
      this.infoStudi = true;
      this.infoLavori = false;
    } else if (nomeSezione === "infoLavori") {
      this.datiAnagrafici = false;
      this.infoStudi = false;
      this.infoLavori = true;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
