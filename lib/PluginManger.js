#!/usr/bin/env node

'use strict';
//插件相关操作
import chalk from 'chalk';

let PluginManger = {};

PluginManger.LoadPlugin = function LoadPlugin(packageName)
{
 console.log(chalk.green('准备加载'+packageName));
}
module.exports = PluginManger;
