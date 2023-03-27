var slide1 = document.getElementById('hero');
var slide2 = document.getElementById('heroIntro');
var slide3 = document.getElementById('heroine');
var slide4 = document.getElementById('heroineIntro');
var slide5 = document.getElementById('boss');
var slide6 = document.getElementById('bossIntro');

var slide1Top = slide1.offsetTop;
var slide2Top = slide2.offsetTop;
var slide3Top = slide3.offsetTop;
var slide4Top = slide4.offsetTop;
var slide5Top = slide5.offsetTop;
var slide6Top = slide6.offsetTop;

var nowSlide = 1;
var isAnimating = false;

function shouldScroll1to2() {
  return nowSlide == 1 && $(window).scrollTop() > slide1Top && !isAnimating;
}

function shouldScroll2to1() {
  return nowSlide == 2 && $(window).scrollTop() < slide2Top && !isAnimating;
}

function shouldScroll2to3(){
  return nowSlide == 2 && $(window).scrollTop() > slide2Top && !isAnimating;
}

function shouldScroll3to2(){
  return nowSlide == 3 && $(window).scrollTop() < slide3Top && !isAnimating;
}

function shouldScroll3to4(){
  return nowSlide == 3 && $(window).scrollTop() > slide3Top && !isAnimating;
}

function shouldScroll4to3(){
  return nowSlide == 4 && $(window).scrollTop() < slide4Top && !isAnimating;
}

function shouldScroll4to5(){
  return nowSlide == 4 && $(window).scrollTop() > slide4Top && !isAnimating;
}

function shouldScroll5to4(){
  return nowSlide == 5 && $(window).scrollTop() < slide5Top && !isAnimating;
}

function shouldScroll5to6(){
  return nowSlide == 5 && $(window).scrollTop() > slide5Top && !isAnimating;
}

function shouldScroll6to5(){
  return nowSlide == 6 && $(window).scrollTop() < slide6Top && !isAnimating;
}

function scrollToElement(elementTop) {
  if (isAnimating) {
    return; // アニメーション中は何もしない
  }
  
  isAnimating = true;
  
  $("body").css('overflow','hidden');

  $("html, body").animate({
    scrollTop: elementTop
  }, 1000, function() {
    isAnimating = false;
    $("body").css('overflow','scroll');
    $(window).on('scroll', onScroll);
  });
  
  // スクロールイベントのハンドラを一時的に解除する
  $(window).off('scroll');
}

function onScroll() {
  if (shouldScroll1to2()) {
    nowSlide = 2;
    scrollToElement(slide2Top);
  } else if (shouldScroll2to1()) {
    nowSlide = 1;
    scrollToElement(slide1Top);
  } else if (shouldScroll2to3()) {
    nowSlide = 3;
    scrollToElement(slide3Top);
  } else if (shouldScroll3to2()) {
    nowSlide = 2;
    scrollToElement(slide2Top);
  } else if (shouldScroll3to4()){
    nowSlide = 4;
    scrollToElement(slide4Top);
  } else if (shouldScroll4to3()){
    nowSlide = 3;
    scrollToElement(slide3Top);
  } else if (shouldScroll4to5()){
    nowSlide = 5;
    scrollToElement(slide5Top);
  } else if (shouldScroll5to4()){
    nowSlide = 4;
    scrollToElement(slide4Top);
  } else if (shouldScroll5to6()){
    nowSlide = 6;
    scrollToElement(slide6Top);
  } else if (shouldScroll6to5()){
    nowSlide = 5;
    scrollToElement(slide5Top);
  }

  console.log(nowSlide);
}

$(window).on('scroll', onScroll);

