import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-welcome-component',
  template: `
    <main>
      <h1>Welcome to NGX Materialize UI</h1>
      <p>This is an Angular component library based on the Materialize CSS Framework.</p>
      <h2>How to use</h2>
      <p>
        To use the components of this library you have to wrap them with the 
        <span class="inline-code">&lt;mui-root-container&gt;</span> component. 
      </p>
      <p>
        In generall we recommend to wrap your entire application within that component 
        directly in your app component.
      </p>
      <h2>Sample Code</h2>
      <p>
        Have a look to the playground app. Here you can find sample code how to compose
        entire views out of some of the components included in this library. 
      </p>
      <!-- <p class="note">
        <b>NOTE:</b> <br />
        Have a look at the <span class="inline-code">.storybook/webpack.config.js</span> to add
        webpack loaders and plugins you are using in this project.
      </p> -->
    </main>
  `,
  styles: [
    `
      main {
        padding: 15px;
        line-height: 1.4;
        font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;
        background-color: #ffffff;
      }

      .note {
        opacity: 0.5;
      }

      .inline-code {
        font-size: 15px;
        font-weight: 600;
        padding: 2px 5px;
        border: 1px solid #eae9e9;
        border-radius: 4px;
        background-color: #f3f2f2;
        color: #3a3a3a;
      }

      a {
        color: #1474f3;
        text-decoration: none;
        border-bottom: 1px solid #1474f3;
        padding-bottom: 2px;
      }
    `,
  ],
})
export default class WelcomeComponent {
  @Output()
  showApp = new EventEmitter<any>();
}
