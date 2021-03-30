import { Component } from '@angular/core';
import { PluginConfigService } from 'common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(public readonly pluginConfigService: PluginConfigService) {}
}
