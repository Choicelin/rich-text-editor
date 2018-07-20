## 富文本编辑器的探索

### 动手实现一个富文本编辑器

#### 记录

1. document.execCommand会对鼠标选择的文本执行命令，[第三个commit](https://github.com/Choicelin/rich-text-editor/commit/05d5632dd95350e3378de5a43ee55a92a14aa0ed)目前就是做到这个，
接下来需要怎么做到编程选择文本

2. 观察Quill的操作方式，发现它的交互与我第一点里想的不一样，是点击B后变成粗体模式，
再次点击变成正常模式，来试试,见[step2](https://github.com/Choicelin/rich-text-editor/commit/0f9e412e62c1ebf6919c99a588f9e045cb52c8da)提交

3. step2的交互是点击editor触发编辑模式，然后点击B修改为粗体模式，接着再次触发编辑
模式，这时进行编辑就是粗体，如果再次点击B，此时再编辑便回到正常模式。这里发现虽然editor
失去焦点，但是点击B后的模式还是一直存在，所以document.execCommand不仅仅是对选择的文本
有作用，而且还对编辑激活状态的editor的区域保持了一个模式状态，这个模式状态会保持着，然后
接下来的编辑都会应用这个模式

4. formatBlock命令是对当前所有的内容加一个包裹,通过回车键以后会对新一行的内容产生包裹，
具体可以参考提交[step3](https://github.com/Choicelin/rich-text-editor/commit/9de9d54fbb936ff8051090048ae9099d36feb002)，在这里，如果给blockquote标签写样式，即可获得自己编辑器的独特风格，
考虑到最后的富文本内容会提交给后端，所以这里样式应想办法弄到行内样式里面去

5. 在处理样式之前，先考虑一下点击按钮自动聚焦光标到行尾这个交互,参见[step4](https://github.com/Choicelin/rich-text-editor/commit/58e42e0044ba3af31b39949ae431769c93ea01dd)，Selection对象
代表一个选区，即鼠标按住左键拖动时的一个区域，具体的这个区域又是一个Range对象，如果你没有拖动鼠标
这个区域的开始和结束就是重合的，这里通过记录键盘抬起时的Range来得到最后的位置，最后在点击按钮时
将这个区域加入到选区中，此时的光标是跟随这个区域的，于是光标就到了最后的位置。
