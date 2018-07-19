/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/19
 * Time: 20:31
 */


(function () {
  console.log(1)
  var toBoldEle = document.getElementById('bold')
  var editorEle = document.getElementById('editor')
  toBoldEle.addEventListener('click', function () {
    document.execCommand('bold', true, null)
  })
})()
