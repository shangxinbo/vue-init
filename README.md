# vue-init

> This respository is a fork from [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack). You may want an official template there. 
> This template is Vue 2.0 compatible only.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vue-cli
$ vue init shangxinbo/vue-init my-project
$ cd my-project
$ npm install
$ npm run dev
```
If port 8080 is already in use on your machine you must change the port number in `/config/index.js`. Otherwise `npm run dev` will fail.

This will scaffold the project using the `master` branch. If you wish to use the latest version of the webpack template, do the following instead:

``` bash
$ vue init webpack#develop my-project
```

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## Docs And Features

you may want to read docs [here](http://vuejs-templates.github.io/webpack/) because this template is exactly the same with vuejs-temlates/webpack. __except that:__

* Add a mock server by express for data-mock (look in dirs named api and proxy). When `npm run dev`, it will start in a child process.
* Use [mockjs](https://github.com/nuysoft/Mock/tree/refactoring) to mock random data 
* Add `less-loader` and `less` 
* Add [vuex](https://github.com/vuejs/vuex) for vue 
* Add [vue-resource](https://github.com/pagekit/vue-resource) for ajax
* Change editerconfig `indent_size = 4` 
* Change eslint pick preset `none (eslint:recommended and config yourself)`. Detail in '.eslintrc.js'
* Add src/router/index.js to eslintignore, beacause webpack2.0 use 'System.import' which is error for eslint 

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run proxy`: proxy request and response to integrate real restfull.
  - change mock server to proxy real restful.
  - proxy URL and PORT config in `config/dev.env.js`

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```

### remarks
``` bash
$ git remote 
  origin
$ git remote add https://github.com/vuejs-templates/webpack.git
$ git remote 
  office
  origin
$ git fetch office
$ git pull office master
$ 解决冲突并提交