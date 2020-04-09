var np = {};            

np.config = {
    'appContainer': '.notepad-app'
};

np.bShowStatusBar = false;   // 显示状态栏
np.bWrap = false;   // 换行
np.fontSize = '16';    // 16pt
np.fontFamily = 'Arial'; // 默认字体
np.fontStype = '常规';  // 字体样式


np.fontHandler = function (e) {
    np.fontFamily = e.family;
    np.fontStype = e.style;
    np.fontSize = e.size;

    $editor.setFont(e);
};

/* global $menubar $editor : true */
$(function () {
    $menubar.show(np.menuData);
    $editor.show({
        posHandler: function (row, col) {

        },
        contentHandler: function (isEmpty) {
            $menubar.enabled(1, 6, isEmpty);
        }
    });
    $editor.setFont({
        family: np.fontFamily,
        style: np.fontStype,
        size: np.fontSize
    });

    var $app = $('body');
    
    $app.click(function () {
        $menubar.hideMenu();
        $editor.focus();
    });
});