var pcTwitter = document.getElementById('pc-twitter');
var pcQ = document.getElementById('pcQ');
var spTwitter = document.getElementById('sp-twitter');
var spMenu = document.getElementById('sp-menu');

jQuery(function(){
    if(window.matchMedia("(max-width: 767px)").matches){
        document.getElementById('top-video').src = 'assets/videos/sp-top.mp4';
        pcTwitter.remove();
        pcQ.remove();
        jQuery('.pc-menu').remove();
    }
    else if(window.matchMedia("(min-width: 768px)").matches){
        document.getElementById('top-video').src = 'assets/videos/pc-top.mp4';
        spTwitter.remove();
        spMenu.remove();
        $('.menuBtn').remove();
    }
});