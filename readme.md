# Forntend Boilerplate
Front-end Boilerplate without gulp or grant.

## setup

```
# clone
$ git clone git@github.com:natsuhikok/frontend-boilerplate.git hogehoge

# change remote
$ git remote set-url origin git@github.com::yourname/hogehoge.git

# add original remote repo as upstrem [optional]
$ git remote add upstream git@github.com:natsuhikok/frontend-boilerplate.git
$ npm install

# install
$ npm install
```

## Stack
* js linter: eslint with airbnb javascript style guide
* dev server: browser-sync
* javascript: es2015 with webpack
* css: node-sass with scss style
* normalize: normalize.css
* images: imagemin and copy
* html: pug

## Usage
All tasks run with npm scripts.

```bash
## run server
$ npm start
## build sorce files
$ npm run build
## lint js and html
$ npm run lint
```

See below for other npm scripts.

### npm scripts
|npm run [foo] |description|malti task|
|-----------|------------|----------------|
|lint:js|run js linter||
|minify:images|minify images||
|copy:images|copy images||
|build:webpack|compile javascripts||
|watch:webpack|watch and compile javascripts||
|build:pug|compile pug(html)||
|watch:pug|watch and compile pug(html)||
|build:sass|compile css compressed||
|watch:sass|watch and compile css||
|browsersync|run web server at port 3000||
|clean|delete public directory||
|lint|run js and html linter|lint:*|
|build|release build|clean, minify:images, build:*|
|devbuild|development build|clean, copy:images, build:*|
|server|run server and watch and build|devbuild watch:* browsersync|

## Misc
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
