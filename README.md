显示种类的页面，点击 hats 张图片后会出现 专门显示hat的页面
查看
App.js 
directory.component.js
menu-item.component.js
文件



因为homepage component 被Route 包裹了起来，
所以它能使用Route的props(里面的history,match ,loation)
但是

directory.component.js
menu-item.component.js


是子component 他们使用不了Route的props (里面的history,match ,loation)

为了让 子component也能使用Route的props (里面的history,match ,loation)。
一种做法是，将props 传给 directory.component.js
再由directory.component.js 传给 menu-item.component.js 这太麻烦。

另一种做法就是
在 menu-item.component.js 文件中使用 withRouter
然后menu-item component就变成了 higher order component了



