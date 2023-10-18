import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Cliente {
  id?: number;
  nome: string;
  surname: string;
  altezza?: number;
  email: string;
  sesso: "M" | "F" | "-1";
  dataNascita: any;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  
  drinks: any = []

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').subscribe((response:any) => {
      console.log(response.drinks);
      this.drinks = response.drinks
    })
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
