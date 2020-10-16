[![Netlify Status](https://api.netlify.com/api/v1/badges/716c8f28-f7ce-49a0-b00e-866fa7fa6676/deploy-status)](https://app.netlify.com/sites/angular-brotli-example/deploys)

# Angular Brotli example

This Angular project is a demostration of how to integrate the Brotli compression in an Angular project.

The node server has been integrated with [`express-static-gzip`](https://www.npmjs.com/package/express-static-gzip). This module is a middleware that automatically checks the available encoded headers supported by the browsers and eventually serve the Brotli files. The fallback is the gzip file compression. As the developers of this plugin said, "it supports any other compression as well".

The Brotli compression has been done using [`brotli`](https://www.npmjs.com/package/brotli) node module.

The compression has to happen after the Angular-CLI production build (`ng build --prod`): in this example, all the compression configuration is set in the file `brotli_compress.ts` that is run after the build on production. To run everything together a new script has been added to the `package.json`:

```JSON
{
    ...
    "scripts": {
        "ng": "ng",
        "start": "ng serve",
        "build": "ng build",
        "build_prod": "ng build --prod",
        "test": "ng test",
        "lint": "ng lint",
        "e2e": "ng e2e",
        "compress": "ts-node brotli_compress.ts",
        "build_prod_and_compress": "npm run build_prod && npm run compress"
    },
    ...
}
```

If needed, this compression can be run also after an Server Side Render (SSR) build.

To easily check if the compression is working, just check the "Content-Encoding" from the "Response Headers" in the "Network" tab in the inspector from the browsers.

![Content-Encoding from the Response Headers](/src/assets/Content-Encoding_screenshot.png)

~~**NOTE**: At the time this is written, the platform I am using to deploy, Netlify, does not support the Brotli compression backend side but they are working on this issue as described [here](https://github.com/netlify/ask-netlify/issues/24). For this reason I will continue to keep the deployment as valid even if it is not supported as when it will be it will be easier to check the working project directly online. In the meantime you can dowload/clone this project and check the the Brotli compression on your local machines.~~

You can now check the compression on the [deployed website](https://github.com/Ferie/brotli-angular-example).

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
