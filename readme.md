# My Default WBS Boilerplate

A simple boilerplate Webpack + Babel + SASS build project I developed to help me jump into creating new sites and testing Javascript libraries without having to worry about my Javascript breaking on different browsers.

## Usage

Core Webpack and Babel dependencies to install.

> Important
    
    npm i --save-dev webpack webpack-cli @babel/core babel-loader
   
---   
   
Quick and simple http server for hosting static web pages locally.

    npm i --save-dev http-server
        
---

Needed to transpile ES2015+ Javascript syntax.

    npm i --save-dev @babel/preset-env
    
If you need polyfills too.

    npm i --save-dev @babel/polyfill
    
---

For SASS

    npm i --save-dev node-sass sass-loader style-loader css-loader

Scripts 
---
Start the local HTTP server.

    npm run start

Start webpack's watcher.

    npm run webpack
