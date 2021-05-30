(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{76:function(e){e.exports=JSON.parse('{"content":[{"type":0,"text":"\u5148\u628a\u4ee3\u7801\u6284\u4e0a\u53bb\uff0c\u4e4b\u540e\u518d\u8865\u89e3\u6790"},{"type":0,"text":"\u5148\u662f\u7ecf\u5178\u7684\u8282\u6d41\u9632\u6296"},{"type":1,"text":["//\u8282\u6d41","function throttle(fn, delay) {","\xa0\xa0\xa0\xa0var lastTime = 0;","\xa0\xa0\xa0\xa0return function() {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0var nowTime = Date.now();","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (nowTime - lastTime > delay) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fn.call(this);","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0lastTime = nowTime;","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0}","}"]},{"type":1,"text":["//\u9632\u6296","function debounce(fn, delay) {","\xa0\xa0\xa0\xa0var timer = null;","\xa0\xa0\xa0\xa0return function() {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0clearTimeout(timer)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0timer = setTimeout(function() {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0fn.apply(this)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}, delay)","\xa0\xa0\xa0\xa0}","}"]},{"type":0,"text":"\u6df1\u514b\u9686\u4e5f\u6ca1\u5565\u597d\u8bb2\u7684\uff0c\u5c31\u662f\u5224\u65ad\u5bf9\u8c61\u7c7b\u578b\uff0c\u8c03\u7528\u5177\u4f53\u7684\u65b9\u5f0f\u590d\u5236\uff0c\u7136\u540e\u6570\u7ec4\u3001\u5bf9\u8c61\u7528\u9012\u5f52\u53bb\u505a"},{"type":1,"text":["class DeepClone {","\xa0\xa0\xa0\xa0constructor() {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.cacheList = [];","\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0clone(source) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (source instanceof Object) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0const cache = this.findCache(source);","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (cache) return cache; ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0else {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0let target;","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (source instanceof Array) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0target = new Array();","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} else if (source instanceof Function) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0target = function () {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return source.apply(this, arguments);","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0};","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} else if (source instanceof Date) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0target = new Date(source);","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} else if (source instanceof RegExp) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0target = new RegExp(source.source, source.flags);","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0his.cacheList.push([source, target]);","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0for (let key in source) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0target[key] = this.clone(source[key]);","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return target;","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return source;","\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0findCache(source) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0for (let i = 0; i < this.cacheList.length; ++i) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (this.cacheList[i][0] === source) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return this.cacheList[i][1];","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return undefined;","\xa0\xa0\xa0\xa0}","}"]},{"type":0,"text":"New\u7684\u5b9e\u73b0\u7b2c\u4e00\u70b9\u590d\u5236\u539f\u578b\u94fe\uff0c\u5982\u679c\u662f\u5bf9\u8c61\u7684\u8bdd\u8c03\u7528\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\uff0c\u5982\u679c\u4e0d\u662f\u7684\u8bdd\u76f4\u63a5\u8fd4\u56dethis"},{"type":1,"text":["function myNew(Func, ...args) {","\xa0\xa0\xa0\xa0const instance = {};","\xa0\xa0\xa0\xa0if (Func.prototype) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Object.setPrototypeOf(instance, Func.prototype)","\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0const res = Func.apply(instance, args)","\xa0\xa0\xa0\xa0if (typeof res === \\"function\\" || (typeof res === \\"object\\" && res !== null)) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return res","\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0return instance","}"]},{"type":0,"text":"bind call apply\u4fee\u6539this\u6307\u5411\u7684\u4e09\u5144\u5f1f\u3002\u9700\u8981\u6ce8\u610f\u7684\u662fbind\u672c\u8eab\u4e0d\u8c03\u7528\u51fd\u6570\uff0c\u6240\u4ee5\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u3002\u8fd8\u8981\u6ce8\u610f\u7528new\u65b9\u6cd5\u521b\u5efa\u7684\u95ee\u9898\u3002"},{"type":1,"text":["Function.prototype.myBind = function (context = globalThis) {","  const fn = this","  const args = Array.from(arguments).slice(1)","  const newFunc = function () {","    const newArgs = args.concat(...arguments)","    if (this instanceof newFunc) {","      fn.apply(this, newArgs)","    } else {","      fn.apply(context, newArgs)","    }","  }","  newFunc.prototype = Object.create(fn.prototype)","  return newFunc","}"]},{"type":1,"text":["Function.prototype.myCall = function (context = globalThis) {","  const key = Symbol(\'key\')","  context[key] = this","  let args = [].slice.call(arguments, 1)","  let res = context[key](...args)","  delete context[key]","  return res","};"]},{"type":1,"text":["Function.prototype.myApply = function (context = globalThis) {","  const key = Symbol(\'key\')","  context[key] = this","  if (arguments[1]) {","    res = context[key](...arguments[1])","  } else {","    res = context[key]()","  }","  delete context[key]","  return res","};"]}]}')},77:function(e){e.exports=JSON.parse('{"content":[{"type":0,"text":"\u840c\u751f\u81ea\u5df1\u505a\u4e00\u4e2a\u4e2a\u4eba\u7ad9\u7684\u60f3\u6cd5\u5df2\u7ecf\u5f88\u4e45\u4e86\uff0c\u4f46\u56e0\u4e3a\u642d\u5efa\u7f51\u7ad9\u7684\u8fc7\u7a0b\u4e2d\u603b\u662f\u4f1a\u51fa\u73b0\u4e00\u4e9bbug\u5bfc\u81f4\u6211\u534a\u9014\u800c\u5e9f\u3002\u73b0\u5728\u7f51\u7ad9\u7ec8\u4e8e\u642d\u5efa\u597d\u4e86\uff0c\u6211\u6765\u5728\u8fd9\u91cc\u8bb0\u5f55\u4e00\u4e0b\u9047\u89c1\u7684bug\u548c\u89e3\u51b3\u7684\u65b9\u6cd5\u3002"},{"type":0,"text":"\u7b2c\u4e00\u4e2abug\u662f\u642d\u5efa\u9879\u76ee\u7684\u65f6\u5019\uff0c\u60f3\u628aant design\u7684SubMenu\u7ed9\u63d0\u53d6\u6210\u7ec4\u4ef6\uff0c\u4f46\u51fa\u73b0\u4e86Parent\u672a\u5b9a\u4e49\u7684\u9519\u8bef\u3002\u901a\u8fc7React\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u89c2\u5bdf\u5230\u662f\u56e0\u4e3a\u5b50\u7ec4\u4ef6\u5728import\u7684\u65f6\u5019\u5148\u4e8e\u7236\u7ec4\u4ef6\u521b\u5efa\u4e86\uff0c\u56e0\u6b64\u5bfc\u81f4\u4e86\u672a\u627e\u5230\u7236\u7ec4\u4ef6\u3002"},{"type":0,"text":"\u6211\u4e5f\u5c1d\u8bd5\u4e86\u5f88\u591a\u529e\u6cd5\uff0c\u5305\u62ec\u628a\u8fd9\u4e2a\u7ec4\u4ef6\u79fb\u52a8\u5230\u8fd9\u4e2ajs\u6587\u4ef6\u4e2d\uff0c\u907f\u514dimport\u64cd\u4f5c\u3002\u4f46\u4ed4\u7ec6\u7814\u7a76\u540e\u53d1\u73b0\uff0c<SubMenu>\u6807\u7b7e\u4e0d\u80fd\u653e\u5728\u7ec4\u4ef6\u7684\u6700\u5916\u5c42\uff0c\u6240\u4ee5\u53ea\u80fd\u5c06\u8fd9\u4e2a\u7ec4\u4ef6\u7528\u5185\u8054\u7684\u5f62\u5f0f\u653e\u5230\u76ee\u5f55\u6587\u4ef6\u91cc\u3002\u4e5f\u5bfc\u81f4\u4e86\u8fd9\u4e2a\u6587\u4ef6\u7684\u4f53\u79ef\u8fc7\u5927\uff0c\u662f\u5f71\u54cd\u5de5\u7a0b\u5316\u7684\u4e00\u4e2a\u95ee\u9898\u3002\u6682\u4e14\u5148\u628a\u8fd9\u4e2a\u95ee\u9898\u7559\u5230\u4e4b\u540e\u6765\u89e3\u51b3\u3002"},{"type":0,"text":"\u7b2c\u4e8c\u4e2a\u95ee\u9898\u662f\u6211\u5728\u56fa\u5b9a\u5bfc\u822a\u680f\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u4e86flex\u5e03\u5c40\u5931\u6548\uff0c\u5bfc\u81f4\u5bfc\u822a\u680f\u65e0\u6cd5\u586b\u6ee1\u5de6\u53f3\u4e24\u8fb9\uff0c\u56e0\u6b64\u9700\u8981\u5c06left\u548cright\u4e24\u4e2a\u5c5e\u6027\u90fd\u7f6e\u4e3a0\uff0c\u8ba9\u4ed6\u53ef\u4ee5\u81ea\u52a8\u586b\u5145\u3002\u5de6\u4fa7\u7684\u5bfc\u822a\u680f\u4e5f\u662f\u8fd9\u4e48\u5b9e\u73b0\u7684\uff0c\u8ba9\u4e0a\u90e8\u5206\u56fa\u5b9a\u5728\u9876\u90e8\u5bfc\u822a\u680f\u4e0b\u9762\uff0cbottom\u7f6e\u4e3a0."},{"type":0,"text":"\u4f46\u8fd9\u4e48\u5e03\u5c40\u8fd8\u662f\u6709\u4e2a\u95ee\u9898\uff0c\u56e0\u4e3a\u5bfc\u822a\u680f\u56fa\u5b9a\uff0c\u5185\u5bb9\u6ed1\u52a8\u7684\u8bdd\u5c31\u9700\u8981\u5bf9\u5185\u5bb9\u4e5ffixed\u5e03\u5c40\uff0c\u53ef\u8fd9\u6837\u8fd9\u4e2a\u76d2\u5b50\u5c31\u4f1a\u5de6\u53f3\u5bbd\u5ea6\u574d\u7f29\u4e3a0\u3002\u4e3a\u4e86\u7ed3\u5c40\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u8c03\u7528\u5f00\u53d1\u8005\u5de5\u5177\u89c2\u5bdf\u4ed6\u7684\u7236\u5143\u7d20\u7684\u4f4d\u7f6e\uff0c\u53d1\u73b0\u4e86\u4ed6\u7236\u5143\u7d20\u8fd8\u5728\u6807\u51c6\u6587\u6863\u6d41\u4e2d\u95f4\u7684\u4f4d\u7f6e\uff0c\u6240\u4ee5\u4e3a\u4e86\u907f\u514d\u8fd9\u4e2a\u574d\u7f29\uff0c\u9700\u8981\u5728\u5916\u9762\u5728\u653e\u4e00\u5c42div\u540c\u65f6\u8bbe\u7f6e\u4e3aoverflow:scroll\uff0c\u8fd9\u6837\u5c31\u628a\u7236\u5143\u7d20\u8bbe\u7f6e\u4e3a\u4e00\u4e2aBFC\u907f\u514d\u4e86\u8fd9\u4e2a\u574d\u7f29"},{"type":0,"text":"\u6211\u4e4b\u524d\u8ba4\u4e3a\u53ea\u6709\u6d6e\u52a8\u5b9a\u4f4d\u624d\u4f1a\u5bfc\u81f4\u7236\u5143\u7d20\u7684\u574d\u7f29\uff0c\u539f\u6765fixed\u7684\u5b9a\u4f4d\u4e5f\u4f1a\uff0c\u7b97\u662f\u5b66\u4f1a\u4e86\u3002"},{"type":0,"text":"\u53e6\u5916\uff0c\u7236\u5143\u7d20\u4e5f\u5e94\u8be5\u624b\u52a8\u7684\u8bbe\u7f6eheight\uff0c\u5426\u5219\u7236\u5143\u7d20fixed\u5b9a\u4f4d\u6c38\u8fdc\u4e0d\u4f1a\u79fb\u52a8\uff0c\u5e76\u4e14\u7236\u5143\u7d20\u4e3abfc\u9002\u5e94\u5b50\u5143\u7d20\u7684\u5927\u5c0f\uff0c\u90a3\u4ed6\u7684\u5b50\u5143\u7d20\u7684\u6ea2\u51fa\u90e8\u5206\u5c31\u76f8\u5f53\u4e8ehidden\u6389\u4e86\uff0c\u6c38\u8fdc\u4e5f\u770b\u4e0d\u4e86\u3002"},{"type":0,"text":"\u4e4b\u524d\u7684\u51e0\u4e2a\u90fd\u662f\u5e03\u5c40\u4e0a\u7684\u95ee\u9898\uff0c\u4f46\u6628\u665a\u8fd8\u78b0\u4e0a\u4e86\u4e00\u4e2anpm\u73af\u5883\u914d\u7f6e\u7684bug\u3002\u5728\u6211\u5b89\u88c5\u4e86axios\u4e4b\u540e\uff0c\u53d1\u73b0\u6ca1\u6709\u529e\u6cd5\u901a\u8fc7npm start\u8fd0\u884ccraco start\u811a\u672c\u4e86\uff0c\u67e5\u627e\u5404\u79cd\u8bba\u575b\u540e\u624d\u53d1\u73b0create-react-app\u811a\u624b\u67b6\u5728\u6dfb\u52a0\u65b0\u7684\u4f9d\u8d56\u65f6\u5b58\u5728\u4e22\u5305\u7684bug\u3002\u4e4b\u524d\u4e5f\u6ca1\u6709\u53ca\u65f6\u7684\u7528GitHub\u6765\u4fdd\u5b58\u4f9d\u8d56\uff0c\u5bfc\u81f4\u6211\u6628\u665a\u53c8\u624b\u52a8\u7684\u5b89\u88c5\u5404\u79cd\u7f3a\u5931\u7684\u4f9d\u8d56\u3002\u7ec8\u4e8e\u6700\u540e\u628a\u8fd9\u4e2a\u7f51\u7ad9\u53c8\u8dd1\u8d77\u6765\u4e86\uff0c\u771f\u662f\u523b\u9aa8\u96be\u5fd8\u3002\u6240\u4ee5\u8fd9\u4ef6\u4e8b\u8fd8\u63d0\u9192\u4e86\u6211\uff0c\u9664\u4e86\u6309ctrl+s\u4fdd\u5b58\u5916\uff0c\u8fd8\u8981\u53ca\u65f6\u7684\u4e0a\u4f20GitHub\u3002"},{"type":0,"text":"\u63a5\u4e0b\u6765\u7684\u4efb\u52a1\u5c31\u662f\u8ba9\u4e2a\u4eba\u7ad9\u9002\u914d\u79fb\u52a8\u7aef\u3002\u867d\u7136\u8fd9\u4e2a\u7f51\u9875\u6309\u7167\u6d41\u5f0f\u5e03\u5c40\u6765\u505a\u7684\uff0c\u4f46\u5e94\u8be5\u8fd8\u8981\u8fdb\u884c\u5a92\u4f53\u67e5\u8be2\u7684\u529f\u80fd\uff0c\u5355\u4f4d\u4e5f\u8981\u4ecepx\u5207\u6362\u4e3arem\u624d\u884c\u3002"}]}')},78:function(e){e.exports=JSON.parse('{"content":[{"type":0,"text":"flex\u5f39\u6027\u76d2\u5b50\u53ef\u4ee5\u5f88\u597d\u7684\u5b9e\u73b0\u6d41\u5f0f\u5e03\u5c40\uff0c\u5b9e\u73b0\u54cd\u5e94\u5f0f\u7684\u7f51\u9875\u3002"},{"type":0,"text":"\u5f53\u4e00\u4e2a\u5143\u7d20\u91c7\u7528display:flex\u540e\uff0c\u8fd9\u4e2a\u5143\u7d20\u5c31\u88ab\u79f0\u4e3aflex container\uff0c\u91cc\u9762\u7684\u6240\u6709\u5143\u7d20\u90fd\u4f1a\u91c7\u7528\u5f39\u6027\u5e03\u5c40\u3002"},{"type":0,"text":"flex container\u6709\u4e0b\u9762\u8fd9\u4e9b\u5c5e\u6027\uff1a"},{"type":0,"text":"flex-direction\u5c5e\u6027\u51b3\u5b9a\u4e3b\u8f74\u7684\u65b9\u5411\uff08\u5373\u9879\u76ee\u7684\u6392\u5217\u65b9\u5411\uff09\u3002"},{"type":1,"text":["flex-direction: row | row-reverse | column | column-reverse;"]},{"type":0,"text":"flex-wrap\u5c5e\u6027\u5b9a\u4e49\uff0c\u5982\u679c\u4e00\u6761\u8f74\u7ebf\u6392\u4e0d\u4e0b\uff0c\u5982\u4f55\u6362\u884c\u3002"},{"type":1,"text":["flex-wrap: nowrap | wrap | wrap-reverse;"]},{"type":0,"text":"flex-flow\u5c5e\u6027\u662fflex-direction\u5c5e\u6027\u548cflex-wrap\u5c5e\u6027\u7684\u7b80\u5199\u5f62\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3arow nowrap\u3002"},{"type":1,"text":["flex-flow: <flex-direction> || <flex-wrap>;"]},{"type":0,"text":"justify-content\u5c5e\u6027\u5b9a\u4e49\u4e86\u9879\u76ee\u5728\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002"},{"type":1,"text":["justify-content: flex-start | flex-end | center | space-between | space-around;"]},{"type":0,"text":"align-items\u5c5e\u6027\u5b9a\u4e49\u9879\u76ee\u5728\u4ea4\u53c9\u8f74\u4e0a\u5982\u4f55\u5bf9\u9f50\u3002"},{"type":1,"text":["align-items: flex-start | flex-end | center | baseline | stretch;"]},{"type":0,"text":"\u4e0b\u9762\u7684\u5c5e\u6027\u662f\u89c4\u5b9a\u5143\u7d20\u663e\u793a\u7684\u5c5e\u6027"},{"type":0,"text":"order\u5c5e\u6027\u5b9a\u4e49\u9879\u76ee\u7684\u6392\u5217\u987a\u5e8f\u3002"},{"type":1,"text":["order: <integer>;"]},{"type":0,"text":"flex-grow\u5c5e\u6027\u5b9a\u4e49\u9879\u76ee\u7684\u653e\u5927\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u5373\u5982\u679c\u5b58\u5728\u5269\u4f59\u7a7a\u95f4\uff0c\u4e5f\u4e0d\u653e\u5927\u3002"},{"type":1,"text":["flex-grow: <number>; "]},{"type":0,"text":"flex-shrink\u5c5e\u6027\u5b9a\u4e49\u4e86\u9879\u76ee\u7684\u7f29\u5c0f\u6bd4\u4f8b\uff0c\u9ed8\u8ba4\u4e3a1\uff0c\u5373\u5982\u679c\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8be5\u9879\u76ee\u5c06\u7f29\u5c0f\u3002"},{"type":1,"text":["flex-shrink: <number>; "]},{"type":0,"text":"flex-basis\u5c5e\u6027\u5b9a\u4e49\u4e86\u5728\u5206\u914d\u591a\u4f59\u7a7a\u95f4\u4e4b\u524d\uff0c\u9879\u76ee\u5360\u636e\u7684\u4e3b\u8f74\u7a7a\u95f4\uff08main size\uff09\u3002"},{"type":1,"text":["flex-basis: <length> | auto; "]},{"type":0,"text":"flex\u5c5e\u6027\u662fflex-grow, flex-shrink \u548c flex-basis\u7684\u7b80\u5199\uff0c\u9ed8\u8ba4\u503c\u4e3a0 1 auto"},{"type":1,"text":["flex: none | [ <\'flex-grow\'> <\'flex-shrink\'>? || <\'flex-basis\'> ]"]},{"type":0,"text":"align-self\u5c5e\u6027\u5141\u8bb8\u5355\u4e2a\u9879\u76ee\u6709\u4e0e\u5176\u4ed6\u9879\u76ee\u4e0d\u4e00\u6837\u7684\u5bf9\u9f50\u65b9\u5f0f\uff0c\u53ef\u8986\u76d6align-items\u5c5e\u6027\u3002\u9ed8\u8ba4\u503c\u4e3aauto\uff0c\u8868\u793a\u7ee7\u627f\u7236\u5143\u7d20\u7684align-items\u5c5e\u6027\uff0c\u5982\u679c\u6ca1\u6709\u7236\u5143\u7d20\uff0c\u5219\u7b49\u540c\u4e8estretch\u3002"},{"type":1,"text":["align-self: auto | flex-start | flex-end | center | baseline | stretch;"]}]}')},79:function(e){e.exports=JSON.parse('{"content":[{"type":0,"text":"Web \u9875\u9762\u7684\u5355\u7ebf\u7a0b\u67b6\u6784\u51b3\u5b9a\u4e86\u5f02\u6b65\u56de\u8c03\uff0c\u800c\u56de\u8c03\u592a\u591a\u5d4c\u5957\u5219\u5bb9\u6613\u4ea7\u751f\u56de\u8c03\u5730\u72f1\u3002\u4e0b\u9762\u7684\u4efb\u52a1\u4f9d\u8d56\u4e0a\u4e2a\u4efb\u52a1\u7684\u8bf7\u6c42\u7ed3\u679c\uff0c\u5e76\u5728\u4e0a\u4e2a\u4efb\u52a1\u7684\u56de\u8c03\u51fd\u6570\u5185\u90e8\u6267\u884c\u65b0\u7684\u4e1a\u52a1\u903b\u8f91\uff0c\u8fd9\u6837\u5f53\u5d4c\u5957\u5c42\u6b21\u591a\u4e86\u4e4b\u540e\uff0c\u4ee3\u7801\u7684\u53ef\u8bfb\u6027\u5c31\u53d8\u5f97\u975e\u5e38\u5dee\u4e86\u3002"},{"type":0,"text":"\u800cPromise\u7684\u4f5c\u7528\u9664\u4e86\u6d88\u706d\u5d4c\u5957\u5730\u72f1\u5916\uff0c\u8fd8\u4f7f\u5f97\u56de\u8c03\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u7684\u9519\u8bef\u80fd\u7edf\u4e00\u7684\u5904\u7406\uff0c\u8fdb\u4e00\u6b65\u7684\u964d\u4f4e\u4ee3\u7801\u7684\u8026\u5408\u7a0b\u5ea6\u3002"},{"type":0,"text":"\u4ea7\u751f\u5d4c\u5957\u51fd\u6570\u7684\u4e00\u4e2a\u4e3b\u8981\u539f\u56e0\u662f\u5728\u53d1\u8d77\u4efb\u52a1\u8bf7\u6c42\u65f6\u4f1a\u5e26\u4e0a\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u6837\u5f53\u4efb\u52a1\u5904\u7406\u7ed3\u675f\u4e4b\u540e\uff0c\u4e0b\u4e2a\u4efb\u52a1\u5c31\u53ea\u80fd\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u6765\u5904\u7406\u4e86\u3002\u9996\u5148\uff0cPromise \u5b9e\u73b0\u4e86\u56de\u8c03\u51fd\u6570\u7684\u5ef6\u65f6\u7ed1\u5b9a\u3002\u56de\u8c03\u51fd\u6570\u7684\u5ef6\u65f6\u7ed1\u5b9a\u5728\u4ee3\u7801\u4e0a\u4f53\u73b0\u5c31\u662f\u5148\u521b\u5efa Promise \u5bf9\u8c61 x1\uff0c\u901a\u8fc7 Promise \u7684\u6784\u9020\u51fd\u6570 executor \u6765\u6267\u884c\u4e1a\u52a1\u903b\u8f91\uff1b\u521b\u5efa\u597d Promise \u5bf9\u8c61 x1 \u4e4b\u540e\uff0c\u518d\u4f7f\u7528 x1.then \u6765\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\u3002\u5176\u6b21\uff0c\u9700\u8981\u5c06\u56de\u8c03\u51fd\u6570 onResolve \u7684\u8fd4\u56de\u503c\u7a7f\u900f\u5230\u6700\u5916\u5c42\u3002\u56e0\u4e3a\u6211\u4eec\u4f1a\u6839\u636e onResolve \u51fd\u6570\u7684\u4f20\u5165\u503c\u6765\u51b3\u5b9a\u521b\u5efa\u4ec0\u4e48\u7c7b\u578b\u7684 Promise \u4efb\u52a1\uff0c\u521b\u5efa\u597d\u7684 Promise \u5bf9\u8c61\u9700\u8981\u8fd4\u56de\u5230\u6700\u5916\u5c42\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u6446\u8131\u5d4c\u5957\u5faa\u73af\u4e86\u3002"},{"type":0,"text":"\u4e0b\u9762\u5c55\u793a\u4e00\u4e2a\u5efa\u8bae\u7684promise\u7684\u6e90\u7801"},{"type":1,"text":["class MyPromise {","\xa0\xa0\xa0\xa0constructor(func) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.status = \'pending\'","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.value = null","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.resolvedTasks = []","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.rejectedTasks = []","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this._resolve = this._resolve.bind(this)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this._reject = this._reject.bind(this)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0try {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0func(this._resolve, this._reject)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} catch (error) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this._reject(error)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0","\xa0\xa0\xa0\xa0_resolve(value) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0setTimeout(() => {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.status = \'fulfilled\'","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.value = value","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.resolvedTasks.forEach(t => t(value))","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0})","\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0","\xa0\xa0\xa0\xa0_reject(reason) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0setTimeout(() => {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.status = \'reject\'","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.value = reason","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.rejectedTasks.forEach(t => t(reason))","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0})","\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0","\xa0\xa0\xa0\xa0then(onFulfilled, onRejected) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return new MyPromise((resolve, reject) => {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.resolvedTasks.push((value) => {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0try {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0const res = onFulfilled(value)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (res instanceof MyPromise) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0res.then(resolve, reject)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} else {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0resolve(res)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} catch (error) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0reject(error)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0})","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0this.rejectedTasks.push((value) => {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0try {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0const res = onRejected(value)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0if (res instanceof MyPromise) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0res.then(resolve, reject)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} else {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0reject(res)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0} catch (error) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0reject(error)","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0})","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0})","\xa0\xa0\xa0\xa0","\xa0\xa0\xa0\xa0","\xa0\xa0\xa0\xa0catch(onRejected) {","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return this.then(null, onRejected);","\xa0\xa0\xa0\xa0}","  }"]},{"type":0,"text":"Promise\u6765\u652f\u6301\u5f02\u6b65\u7684\u65b9\u6cd5\u6211\u4eec\u53ef\u4ee5\u53c2\u8003\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u5728\u6267\u884cthen\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u5982\u679c\u5f53\u524d\u8fd8\u662fPENDING\u72b6\u6001\uff0c\u5c31\u628a\u56de\u8c03\u51fd\u6570\u5bc4\u5b58\u5230\u4e00\u4e2a\u6570\u7ec4\u4e2d\uff0c\u5f53\u72b6\u6001\u53d1\u751f\u6539\u53d8\u65f6\uff0c\u53bb\u6570\u7ec4\u4e2d\u53d6\u51fa\u56de\u8c03\u51fd\u6570\u3002\u8fd9\u6837\u5c31\u4e0d\u4f1a\u5bfc\u81f4pending\u72b6\u6001\u4e0b\u6267\u884cthen\u7684\u51fd\u6570\uff0c\u5bfc\u81f4\u8fd9\u4e2a\u51fd\u6570\u5185\u5bb9\u88ab\u653e\u5f03\u6267\u884c\u3002"},{"type":0,"text":""},{"type":0,"text":"\u63a5\u4e0b\u6765\u5c06async\u51fd\u6570\u524d\u6211\u60f3\u5148\u8bb2\u8bb2\u751f\u6210\u5668\u7684\u5de5\u4f5c\u65b9\u6cd5\u3002\u56e0\u4e3aasync\u80fd\u7528\u540c\u6b65\u7684\u5f62\u5f0f\u5b9e\u73b0\u5f02\u6b65\u64cd\u4f5c\uff0c\u672c\u8d28\u4e0a\u4e5f\u662fpromise+\u534f\u7a0b\u7684"},{"type":0,"text":"\u6211\u4eec\u5148\u6765\u770b\u770b\u4ec0\u4e48\u662f\u751f\u6210\u5668\u51fd\u6570?"},{"type":0,"text":"\u751f\u6210\u5668\u51fd\u6570\u662f\u4e00\u4e2a\u5e26\u661f\u53f7\u51fd\u6570\uff0c\u800c\u4e14\u662f\u53ef\u4ee5\u6682\u505c\u6267\u884c\u548c\u6062\u590d\u6267\u884c\u7684\u3002\u5728\u751f\u6210\u5668\u51fd\u6570\u5185\u90e8\u5982\u679c\u9047\u5230 yield \u5173\u952e\u5b57\uff0c\u90a3\u4e48 JavaScript \u5f15\u64ce\u5c06\u8fd4\u56de\u5173\u952e\u5b57\u540e\u9762\u7684\u5185\u5bb9\u7ed9\u5916\u90e8\uff0c\u5e76\u6682\u505c\u8be5\u51fd\u6570\u7684\u6267\u884c\u3002\u5916\u90e8\u51fd\u6570\u53ef\u4ee5\u901a\u8fc7 next \u65b9\u6cd5\u6062\u590d\u51fd\u6570\u7684\u6267\u884c\u3002"},{"type":0,"text":"gen \u534f\u7a0b\u548c\u7236\u534f\u7a0b\u662f\u5728\u4e3b\u7ebf\u7a0b\u4e0a\u4ea4\u4e92\u6267\u884c\u7684\uff0c\u5e76\u4e0d\u662f\u5e76\u53d1\u6267\u884c\u7684\uff0c\u5b83\u4eec\u4e4b\u524d\u7684\u5207\u6362\u662f\u901a\u8fc7 yield \u548c gen.next \u6765\u914d\u5408\u5b8c\u6210\u7684\u3002"},{"type":0,"text":"\u800casync\u672c\u8d28\u4e0a\u4e5f\u662f\u4e00\u4e2a\u9690\u5f0f\u8fd4\u56depromise\u7684\u751f\u6210\u5668\u51fd\u6570\uff0c\u4e0b\u9762\u7ed9\u4e00\u6bb5\u5b9e\u4f8b\u4ee3\u7801\u5c55\u793ajs\u5f15\u64ce\u662f\u5982\u4f55\u5728\u534f\u7a0b\u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u7684\u3002"},{"type":1,"text":["","async function foo() {","\xa0\xa0\xa0\xa0console.log(1)","\xa0\xa0\xa0\xa0let a = await 100","\xa0\xa0\xa0\xa0console.log(a)","\xa0\xa0\xa0\xa0console.log(2)","}","console.log(0)","foo()","console.log(3)"]},{"type":2,"text":"8dcd8cfa77d43d1fb928d8b001229b94.png"},{"type":0,"text":"\u5f53\u7136async\u89e3\u51b3\u4e86\u4e00\u90e8\u5206\u5f02\u6b65\u4ee3\u7801\u7f16\u5199\u7684\u95ee\u9898\uff0c\u4f46\u8fd8\u662f\u7559\u6709\u5f88\u591a\u7f3a\u9677\u3002\u4f8b\u5982\u5982\u679c\u5b50\u51fd\u6570\u4e3aasync\u51fd\u6570\u7684\u8bdd\uff0c\uff0c\u7236\u51fd\u6570\u4e5f\u4f1a\u662fasync\u51fd\u6570\u3002\u5341\u5206\u7684\u589e\u52a0\u5fc3\u667a\u4e0a\u7684\u8d1f\u62c5\u3002\u8fd9\u4e5f\u662freact\u7684fiber\u629b\u5f03\u4e86\u751f\u6210\u5668\u51fd\u6570\u548casync\uff0c\u8f6c\u800c\u81ea\u5df1\u5f00\u53d1\u4e00\u5957\u65b0\u7684\u5e93\u6765\u89e3\u51b3\u5f02\u6b65\u4e2d\u65adfiber\u6e32\u67d3\u7684\u95ee\u9898\u3002"},{"type":0,"text":""},{"type":0,"text":""}]}')},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(23),s=n.n(c),o=(n(85),n(10)),a=n(11),l=n(13),u=n(12),x=n(33),p=n(9),h=(n(86),n(101)),f=n(102),j=(n(87),n(3)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).handleClick=function(e){r.setState({current:e.key})},r.state={current:"home"},r}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"HeadNav",children:Object(j.jsxs)("div",{className:"nav-wrap",children:[Object(j.jsx)("div",{className:"nav-logo-wrap",children:Object(j.jsx)(f.a,{className:"nav-logo"})}),Object(j.jsx)("div",{className:"nav-list-wrap",children:Object(j.jsxs)(h.a,{selectedKeys:[this.state.current],mode:"horizontal",onClick:this.handleClick,children:[Object(j.jsx)(h.a.Item,{children:Object(j.jsx)(x.b,{to:"/",children:"\u9996\u9875"})},"home"),Object(j.jsx)(h.a.Item,{children:Object(j.jsx)(x.b,{to:"/about",children:"\u5173\u4e8e\u6211"})},"aboutme"),Object(j.jsx)(h.a.Item,{children:Object(j.jsx)(x.b,{to:"/article",children:"\u6587\u7ae0\u5206\u4eab"})},"article")]})})]})})}}]),n}(r.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{style:{position:"absolute",left:"50%",top:"40vh",transform:"translate(-20%,-50%)",fontSize:"20px",textAlign:"left",width:"60%"},children:[Object(j.jsx)("img",{src:"/blogSite/img/portrait2.png",style:{maxHeight:"400px",minWidth:"320px"},alt:"\u672c\u55b5\u7684\u865a\u62df\u5f62\u8c61"}),Object(j.jsxs)("div",{style:{flexDirection:"column",color:"#EEE"},children:[Object(j.jsx)("div",{children:"\u9648\u55b5\u55b5\uff0c\u4e2d\u5357\u5927\u5b66\u73b0\u5f79\u5927\u5b66\u751f"}),Object(j.jsx)("div",{children:"\u5b9e\u4e60\u524d\u7aef\u5de5\u7a0b\u5e08"}),Object(j.jsx)("div",{children:"\u8054\u7cfb\u65b9\u5f0f\uff1a1411307268@qq.com"})]})]})})}}]),n}(r.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{style:{position:"absolute",left:"50%",top:"40vh",transform:"translate(-50%,-50%)",fontSize:"20px",textAlign:"left",width:"70%",color:"#eee"},children:[Object(j.jsx)("div",{style:{margin:"25px"},children:"\u672c\u7f51\u7ad9\u91c7\u7528React\u3001React-router\u3001antd\u548caxios\u6846\u67b6\u7f16\u5199"}),Object(j.jsx)("div",{style:{margin:"25px"},children:"\u540e\u7aef\u4f7f\u7528\u4e86Node.js\u548cMongoDB\u8fdb\u884c\u5f00\u53d1"}),Object(j.jsx)("div",{style:{margin:"25px"},children:"\u81ea\u4e3b\u5b9e\u73b0\u4e86\u5bcc\u6587\u672c\u7684\u5c55\u793a\uff0c\u76ee\u524d\u6709\u4e09\u79cd\u683c\u5f0f\uff0c\u5206\u4e3a\u6587\u672c\u683c\u5f0f\uff0c\u4ee3\u7801\u683c\u5f0f\uff0c\u56fe\u7247\u6a21\u5f0f"})]})}}]),n}(r.Component),m=n(45),g=n(100),O=n(103);var v=function(e){return Object(j.jsx)("div",{style:{marginBottom:"10px",marginTop:"10px"},children:"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"+e.text})};var k=function(e){return Object(j.jsx)("div",{style:{background:"#ccc",marginLeft:"10%",marginRight:"10%",marginTop:"40px",paddingLeft:"5%",textAlign:"left",overflowX:"scroll"},children:e.text.map((function(e){return Object(j.jsx)("div",{children:e})}))})};var w=function(e){return Object(j.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",maxHeight:"30em",marginTop:"5em",marginBottom:"5em"},children:Object(j.jsx)("img",{src:"/blogSite/img/"+e.src})})},T=n(76),C=n(77),S=n(78),F=n(79);var P=function(e){var t;switch(console.log(e.title),e.title){case"\u4e2a\u4eba\u7ad9\u642d\u5efa\u5c0f\u8bb0":t=C.content;break;case"\u624b\u5199api":t=T.content;break;case"flex\u5e03\u5c40":t=S.content;break;case"Promise\u548cAsync\u51fd\u6570":t=F.content;break;default:t=null}return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{style:{fontSize:"20px",fontWeight:"bold"},children:e.title}),Object(j.jsx)("div",{style:{textAlign:"left"},children:t&&t.map((function(e){switch(e.type){case 0:return Object(j.jsx)(v,{text:e.text});case 1:return Object(j.jsx)(k,{text:e.text});case 2:return Object(j.jsx)(w,{src:e.text})}}))}),Object(j.jsx)("div",{style:{height:"20px"}})]})},A=h.a.SubMenu,N=(i.a.Component,h.a.SubMenu),M=g.a.Content,R=g.a.Sider,L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={firstLevelMenu:[],content:null},r.linkToArticle=r.linkToArticle.bind(Object(m.a)(r)),r}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.setState({firstLevelMenu:[{title:"\u539f\u751f\u5b66\u4e60",index:1,items:[{title:"flex\u5e03\u5c40",index:"sub1"},{title:"Promise\u548cAsync\u51fd\u6570",index:"sub2"},{title:"\u624b\u5199api",index:"sub3"}]},{title:"React\u6846\u67b6\u5b66\u4e60",index:2,items:[{title:"\u4e2a\u4eba\u7ad9\u642d\u5efa\u5c0f\u8bb0",index:"sub4"},{title:"useEffect\u7684\u6e90\u7801\u7814\u7a76",index:"sub5"}]}],content:"\u4e2a\u4eba\u7ad9\u642d\u5efa\u5c0f\u8bb0"})}},{key:"linkToArticle",value:function(e){this.setState({content:e})}},{key:"render",value:function(){var e=this,t=this.state.firstLevelMenu.map((function(t){return Object(j.jsx)(N,{icon:Object(j.jsx)(O.a,{}),title:t.title,children:t.items.map((function(t){return Object(j.jsx)(h.a.Item,{onClick:e.linkToArticle.bind(e,t.title),children:t.title},t.index)}))},t.index)}));return Object(j.jsx)(g.a,{children:Object(j.jsxs)(g.a,{style:{height:"100%"},children:[Object(j.jsx)(R,{width:200,className:"site-layout-background",style:{position:"fixed",top:"50px",bottom:0},children:Object(j.jsx)(h.a,{mode:"inline",defaultSelectedKeys:["sub4"],defaultOpenKeys:["2"],style:{height:"100%",borderRight:0},children:t})}),Object(j.jsx)(g.a,{children:Object(j.jsx)(M,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:580,position:"fixed",top:"50px",left:"200px",right:0,overflow:"scroll",height:"100%",backgroundColor:"white"},children:Object(j.jsx)(P,{title:this.state.content})})})]})})}}]),n}(r.Component),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{style:{backgroundColor:"white",height:"100vh"},children:Object(j.jsx)("div",{id:"2",children:"\u6b63\u5728\u65bd\u5de5"})})}}]),n}(r.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={},r}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{id:"DefaultLayout",children:[Object(j.jsx)(d,{match:this.props.match,location:this.props.location,history:this.props.history}),Object(j.jsxs)("div",{className:"content-wrap",style:{top:"50px",position:"relative"},children:[Object(j.jsx)(p.a,{path:"/",component:b,exact:!0}),Object(j.jsx)(p.a,{path:"/about",component:y}),Object(j.jsx)(p.a,{path:"/article",component:L}),Object(j.jsx)(p.a,{path:"/resource",component:D})]})]})}}]),n}(r.Component),_=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"2",children:"2"})}}]),n}(r.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{id:"router",children:Object(j.jsx)(x.a,{children:Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{path:"/",component:E}),Object(j.jsx)(p.a,{path:"/login",component:_})]})})})}}]),n}(r.Component),B=(n(97),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(I,{})})}}]),n}(r.Component)),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root")),J()}},[[98,1,2]]]);
//# sourceMappingURL=main.752dc46d.chunk.js.map