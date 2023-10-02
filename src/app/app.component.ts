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
