#!/usr/bin/env node

'use strict';
//插件相关操作

let PluginManger = {};

PluginManger.LoadPlugin = function LoadPlugin(packageName)
{
 console.log('准备加载'+packageName);
}
module.exports = PluginManger;
