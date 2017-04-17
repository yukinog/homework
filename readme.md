# Forntend Boilerplate

## Stack
* linter: eslint with airbnb javascript style guide
* dev server: browser-sync
* javascript: es2015 with webpack
* css: node-sass with scss style

## cofig usage
Configs are almost all in `package.json`.

### browsersync
```
"browsersync": "./node_modules/.bin/browser-sync start --server 'public' --files 'public/' --port 3000 --browser firefox",
```

|--option|option description|example|
|-----------|------------|----------------|
|--port|port nubmer|--port 3000|
|--server|entry point, mostly directory with index.html|--server 'public'|
|--proxy|proxy an existing server instead of `--server`. usually used with MAMP|--proxy localhost:80|