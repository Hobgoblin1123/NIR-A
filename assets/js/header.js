var topPic = document.getElementById('topPic');
var topHeight = topPic.offsetHeight;

jQuery(function() {
    var header = jQuery('.fHeader');    
    header.hide();
    //スクロールが100に達したらボタン表示
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > topHeight) {
            header.fadeIn();
        } else {
            header.fadeOut();
        }
    });
});


var openBtn = $('img#open')
var closeBtn = $('img#close');
jQuery(function(){
    openBtn.on('click',function(){
        $(this).hide(),$('#sp-menu').animate({ right: "0px" }, 600);
        closeBtn.show();
    });
    closeBtn.on('click',function(){
        $(this).hide(),$('#sp-menu').animate({ right: "-100%" }, 600);
        openBtn.show();
    });
});