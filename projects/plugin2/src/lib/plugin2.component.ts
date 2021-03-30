import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-plugin2',
  template: `
    <p>
      plugin2 works!
    </p>
  `,
  styles: [
  ]
})
export class Plugin2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
