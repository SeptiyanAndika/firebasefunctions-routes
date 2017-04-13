'use strict';

const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const _  = require('underscore');

const routes_path = path.join(__dirname,'routes.js');    
const routes = require(routes_path);

let datas_export ={};
_.each(routes, (route, name) => {

    const name_arr = name.split(' ');
    let  route_name, route_verb;

    if (name_arr.length > 1) {
      route_name = name_arr[1];
      route_verb = name_arr[0];
    } else {
      route_name = name;
      route_verb = 'get';
    }

    if(route_name.indexOf("/")==0){
      route_name = route_name.substring(1, route_name.length);
    }

    let export_name = route_name.split("/")[0];
    route_name = route_name.split("/")[1] || "/";
    

    let controllers_routes = [];
    _.each(route,(name) => {
        let controllers = name.split('.');
        controllers_routes.push(require(`./controllers/${controllers[0]}`)[controllers[1]]);
    });

    var app = express()
    app.use(function (req, res, next) {
        if (!req.pipa) req.pipa = {};

        next();
    });

    app[route_verb](route_name,controllers_routes);
     
    datas_export[export_name] = functions.https.onRequest((req, res) => {
        if (!req.path) { 
          req.url = `/${req.url}`
        
        }
        return app(req, res)
    });
});


_.each(datas_export, (functions, name) => {
  exports[name] = functions;
})
