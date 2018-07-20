/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/19
 * Time: 20:31
 */


(function () {

  var editorEle = document.getElementById('editor')

  var toBoldEle = document.getElementById('bold')
  var boldToggle = false
  toBoldEle.addEventListener('click', function () {
    boldToggle = !boldToggle
    document.execCommand('bold', boldToggle, null)
  })

  var blockquoteEle = document.getElementById('blockquote')
  blockquoteEle.addEventListener('click', function() {
    editorEle.focus()
    document.execCommand('formatBlock', true, 'blockquote')
  })
})()
