ng-spin-kit
===============

SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for Angular

Inspired by angular-spinkit (https://github.com/Urigo/angular-spinkit)

![ng-spin-kit](ng-spin-kit.gif?raw=true "ng-spin-kit")

## Usage

1. Install with NPM:

  ```bash
  npm install ng-spin-kit --save
  ```

<sup>If you need support for Angular versions 8 or lower, use ng-spin-kit version
6: ```npm install ng-spin-kit@6 --save```.</sup>

2. Import one component

  ```javascript
  import { NgSpinKitModule } from 'ng-spin-kit'
  ```

3. Use it:

  ```javascript
  // app.component.ts

import { Component } from '@angular/core';

  @Component({
    selector: 'app',
    template: `
      <h3>rotating-plane</h3>
      <sk-rotating-plane></sk-rotating-plane>

      <h3>double-bounce</h3>
      <sk-double-bounce></sk-double-bounce>

      <h3>wave</h3>
      <sk-wave></sk-wave>

      <h3>wandering-cubes</h3>
      <sk-wandering-cubes></sk-wandering-cubes>

      <h3>pulse</h3>
      <sk-pulse></sk-pulse>

      <h3>chasing-dots</h3>
      <sk-chasing-dots></sk-chasing-dots>

      <h3>circle</h3>
      <sk-circle></sk-circle>

      <h3>three-bounce</h3>
      <sk-three-bounce></sk-three-bounce>

      <h3>cube-grid</h3>
      <sk-cube-grid></sk-cube-grid>

      <h3>word-press</h3>
      <sk-word-press></sk-word-press>

      <h3>fading-circle</h3>
      <sk-fading-circle></sk-fading-circle>

      <h3>folding-cube</h3>
      <sk-folding-cube></sk-folding-cube>
    `
  })

  export class AppComponent {}
  
  // app.module.ts
  
  import { NgModule } from 'angular2/core';
  import { BrowserModule } from '@angular/platform-browser';
  
  import { AppComponent } from './app.component';
  import { NgSpinKitModule } from 'ng-spin-kit';
  
  @Component({
    imports: [
      BrowserModule,
      NgSpinKitModule
    ],
    declarations: [
      AppComponent,
    ],
    bootstrap: [
      AppComponent
    ]
  })
  ```

#### For every component you can set:
  ```
  [isRunning]: boolean - state of the spinner, true - visible, false - hidden, default: true
  ```

  ```
  [delay]: number - representing the milliseconds to wait, before showing the spinner, default: 0
  ```

  ```
  [color]: string - background color for each item
  ```

## Development

### Build

Run `ng build ng-spin-kit --prod` to build the project. The build artifacts will be stored in the `dist/` directory.

### Publishing

After building your library with `ng build ng-spin-kit`, go to the dist folder `cd dist/ng-spin-kit` and
run `npm publish`.

### Running unit tests

Run `ng test ng-spin-kit` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Add all your requests and ideas in the issues area or send us a pull request!
