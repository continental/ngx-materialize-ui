> **Note**
> This project is currently not actively maintained.

# NGX Materialize UI

NGX Materialize UI is an Angular Component Library based on the [Materialize CSS](https://github.com/Dogfalo/materialize) framework. In generall it wraps the compoents from the Materialize CSS Framework into Angular components. 

## Yet another Material UI Framework?
Yes, but if you are looking for a Material design framework wich is available in pure CSS (because you need it outside of the angular world too) as well as in the form of Angular components, then the combination of Materialice CSS and NGX Materialize UI is the right thing for you.

## Quickstart
To use the library in your probject you have to follow these steps:
1. Add the library to you package.json as a dependency.
2. Add the `MaterializeUiCoreModule` to the imports of your AppModule.
3. Wrap you entire application or the block in which you would like to use the NGX Materialize UI components with the `<mui-root-container>` element.
4. Start using the NGX Materialize UI components inside the `<mui-root-container>` element.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.8.

## Documentation
This library uses [Storybook](https://github.com/storybookjs/storybook) for development and documentation. We will make the storybook documenation pages available online soon. 

### Running documentation locally
To run the documentation locally just clone the repository, execute an `npm install` and after that `npm run storybook`. You can then browse the documentation on `http://localhost:6006`.
