/**
 * Creator: 鸡爪<413807584@qq.com>
 * Date: 2018/7/19
 * Time: 20:31
 */


(function () {
  var toBoldEle = document.getElementById('bold')
  var boldToggle = false
  toBoldEle.addEventListener('click', function () {
    boldToggle = !boldToggle
    document.execCommand('bold', boldToggle, null)
  })
})()
