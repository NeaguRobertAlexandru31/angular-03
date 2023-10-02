import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {

  components = [
    { title: 'Componente 1', content: 'Contenuto del componente 1' },
    { title: 'Componente 2', content: 'Contenuto del componente 2' },
    { title: 'Componente 3', content: 'Contenuto del componente 3' }
  ];

  share() {
    window.alert('Accordion');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/