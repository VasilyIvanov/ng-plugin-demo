import { TestBed } from '@angular/core/testing';

import { PluginConfigService } from './plugin-config.service';

describe('PluginConfigService', () => {
  let service: PluginConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PluginConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
