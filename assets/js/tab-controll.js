jQuery(function(){
    jQuery('#tabpage2').fadeOut();
    jQuery('#tabpage3').fadeOut();
})

jQuery(function () {
    jQuery('#tab1').on('click', function(){
        jQuery('#tabpage1').fadeIn();
        jQuery('#tabpage2').fadeOut();
        jQuery('#tabpage3').fadeOut();
    });
  });

jQuery(function () {
    jQuery('#tab2').on('click', function(){
        jQuery('#tabpage2').fadeIn();
        jQuery('#tabpage1').fadeOut();
        jQuery('#tabpage3').fadeOut();
    });
});

jQuery(function () {
    jQuery('#tab3').on('click', function(){
        jQuery('#tabpage3').fadeIn();
        jQuery('#tabpage2').fadeOut();
        jQuery('#tabpage1').fadeOut();
    });
  });