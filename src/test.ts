// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { Component } from '@angular/core';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

interface Context  {
  keys(): string[];
  (value: unknown , index: number, array: unknown[]): unknown[];
}

declare const require: {context(start: string, flag: boolean, end: RegExp): Context
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context: Context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
