import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-plugin1',
  template: `
    <p>
      plugin1 works!
    </p>
  `,
  styles: [
  ]
})
export class Plugin1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
