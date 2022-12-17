#!/usr/bin/env node

'use strict';

//加载插件 并唤起前置插件
let PluginManger = require("./lib/PluginManger.js");
let fs = require("fs");
let temporary = fs.readFileSync("./config/plugin.yml",{encoding:"utf8"});

let yaml = require("js-yaml");
temporary = yaml.load(temporary);
for (const key in temporary.list) { 
PluginManger.LoadPlugin(key)
console.log(temporary.list[key]);
}
