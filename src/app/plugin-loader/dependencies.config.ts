import * as AngularAnimations from '@angular/animations';
import * as AngularCommon from '@angular/common';
import * as AngularCommonHttp from '@angular/common/http';
import * as AngularCompiler from '@angular/compiler';
import * as AngularCore from '@angular/core';
import * as AngularForms from '@angular/forms';
import * as AngularPlatformBrowser from '@angular/platform-browser';
import * as AngularPlatformBrowserDynamic from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as AngularRouter from '@angular/router';
import * as rxjs from 'rxjs';
import * as RxjsOperators from 'rxjs/operators';
import * as Common from 'common';

export const dependencyMap: { [propName: string]: any } = {
  '@angular/animations': AngularAnimations,
  '@angular/common': AngularCommon,
  '@angular/common/http': AngularCommonHttp,
  '@angular/compiler': AngularCompiler,
  '@angular/core': AngularCore,
  '@angular/forms': AngularForms,
  '@angular/platform-browser': AngularPlatformBrowser,
  '@angular/platform-browser-dynamic': AngularPlatformBrowserDynamic,
  '@angular/platform-browser/animations': BrowserAnimationsModule,
  '@angular/router': AngularRouter,
  rxjs,
  'rxjs/operators': RxjsOperators,
  'common': Common
};
