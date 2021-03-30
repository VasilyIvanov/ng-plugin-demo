import { Injectable } from '@angular/core';
import { DemoPlugin } from './interfaces/demo-plugin';

@Injectable({
  providedIn: 'root'
})
export class PluginConfigService {
  public value: DemoPlugin[] = [];
  public loaded = false;

  public constructor() { }

  public load(uri: string): Promise<DemoPlugin[]> {
    return fetch(uri).then(result => result.json()).then(json => {
      this.value = json;
      this.loaded = true;
      return json;
    });
  }
}
