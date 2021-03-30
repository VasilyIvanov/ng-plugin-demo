import { Component, Inject, OnInit } from '@angular/core';
import { MODULE_BASE_PATH } from 'common';

@Component({
  selector: 'lib-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  public constructor(@Inject(MODULE_BASE_PATH) public readonly moduleBasePath: string) {}

  public ngOnInit(): void {}
}
