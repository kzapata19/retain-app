import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app',
  template: `
    <div>
      <h3>
        Yo, world!
      </h3>
    </div>
  `
})

export class App {}
=======
import { Main } from './containers';

@Component({
  selector: 'app',
  directives: [
    Main
  ],
  template: `
    <div>
      <main-container></main-container>
    </div>
  `
})
export class App {}
>>>>>>> module-2
