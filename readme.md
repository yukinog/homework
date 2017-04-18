# Forntend Boilerplate
Fromtend Boilerplate without gulp.

## setup

```
$ npm install
```

## Stack
* linter: eslint with airbnb javascript style guide
* dev server: browser-sync
* javascript: es2015 with webpack
* css: node-sass with scss style
* images: imagemin and copy
* html: pug

## npm scripts
Configs are almost all in `package.json`.

npm scripts:

|npm run [foo] |description|malti task|
|-----------|------------|----------------|
|minify:images|minify images with imagemin||
|copy:images|copy images||
|build:webpack|build compressed javascripts with webpack||
|watch:webpack|watch and build javascripts||
|build:pug|build pug(html)||
|watch:pug|watch and build pug(html)||
|build:sass|build compressed css||
|watch:sass|watch and build compressed css||
|browsersync|create web server with browsersync||
|clean|delete public directory||
|build|release build|clean, minify:images, build:*|
|devbuild|development build|clean, copy:images, build:*|
|server|run server and watch and build|devbuild watch:* browsersync|

### minify images
While development npm scripts `copy:images` just copy orizinal images. with `npm run build` images minified with `imagemin`.

Run `copy:images` each time you change `src/images`, images tasks don't have watch tasks.

### browsersync
```
"browsersync": "./node_modules/.bin/browser-sync start --server 'public' --files 'public/' --port 3000 --browser firefox",
```

|--option|option description|example|
|-----------|------------|----------------|
|--port|port nubmer|--port 3000|
|--server|entry point, mostly directory with index.html|--server 'public'|
|--proxy|proxy an existing server instead of `--server`. usually used with MAMP|--proxy localhost:80|
