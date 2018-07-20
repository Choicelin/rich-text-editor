/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/19
 * Time: 20:31
 */


(function () {
  var lastEditRange = null

  var editorEle = document.getElementById('editor')
  editorEle.addEventListener('keyup', function() {
    lastEditRange  = window.getSelection().getRangeAt(0)
  })

  var toBoldEle = document.getElementById('bold')
  var boldToggle = false
  toBoldEle.addEventListener('click', function () {
    setFocus(editorEle, lastEditRange)
    boldToggle = !boldToggle
    document.execCommand('bold', boldToggle, null)
  })

  var blockquoteEle = document.getElementById('blockquote')
  blockquoteEle.addEventListener('click', function() {
    setFocus(editorEle, lastEditRange)
    console.log(window.getSelection().getRangeAt(0))
    document.execCommand('formatBlock', true, 'blockquote')
  })
})()

function setFocus(ele, range) {
  ele.focus()
  var selection = window.getSelection()
  if (range) {
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
