jQuery(function() {
    var header = jQuery('.fHeader');    
    header.hide();
    //スクロールが100に達したらボタン表示
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            header.fadeIn();
        } else {
            header.fadeOut();
        }
    });
});
