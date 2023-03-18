var tokuiten = document.getElementsByClassName('decoText')[0];
var syuzinko = document.getElementsByClassName('decoText')[1];
var anata = document.getElementsByClassName('decoText')[2];
var himitsu = document.getElementsByClassName('decoText')[3];
var kako = document.getElementsByClassName('decoText')[4];

var storyName = document.getElementById('story');
var paragraph1 = document.getElementById('paragraph2');
var eventkey1 = storyName.offsetTop;
var eventkey2 = paragraph1.offsetTop;

$(window).on('scroll', function() {
  stress1();
  stress2();
});

function stress1(){

}

function stress2(){
    if( eventkey1 < window.pageYOffset){
        $(tokuiten).animate({
            color: $.Color('yellow'),
            fontSize: '50px'
        },2000);
    }

    if(eventkey2 + 500 < $(window).scrollTop()){
        $(syuzinko).animate({
            color: $.Color('white'),
            fontSize: '30px'
        },2000);
        $(anata).animate({
            color: $.Color('white'),
            fontSize: '30px'
        },2000);
    }

    if(eventkey1 + 700 < window.pageYOffset){
        $(himitsu).animate({
            color: $.Color('red'),
            fontSize: '40px'
        },2000);
        $(kako).animate({
            color: $.Color('purple'),
            fontSize: '40px'
        },2000);
    }
}
