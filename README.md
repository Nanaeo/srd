# Hello SRD

SRD 是一款友情管理框架，使用Nodejs完成。
# Feat

1.多平台 (支持模式 cli gh-action vercel ...)

2.多语言 (国际化 zh-cn en zh-tw ...)

3.高扩展 (支持插件化扩展)
# SRD工作模式
前置插件管理底层标准化API 数据储存 数据输出/输入 事件触发/通知
通过前置插件处理cli或者workflow的事件 然后调用SDR Core进行相应流程
Core把实际功能交给Plugin实现 本身无实际功能 事件流程调用插件完成工作

(流程交由必须三个以上插件完成 EventHandler DataGenerate DataDeploy)
