var slide1 = document.getElementById('hero');
var slide2 = document.getElementById('heroine');
var slide3 = document.getElementById('boss')

var heroTop = slide1.offsetTop;
var heroineTop = slide2.offsetTop;
var bossTop = slide3.offsetTop;

var nowSlide = 1;
var isAnimating = false;

function shouldScroll1to2() {
  return nowSlide == 1 && $(window).scrollTop() > heroTop;
}

function shouldScroll2to1() {
  return nowSlide == 2 && $(window).scrollTop() < heroineTop;
}

function shouldScroll2to3(){
  return nowSlide == 2 && $(window).scrollTop() > heroineTop;
}

function shouldScroll3to2(){
  return nowSlide == 3 && $(window).scrollTop() < bossTop;
}

function scrollToElement(elementTop) {
  if (isAnimating) {
    return; // アニメーション中は何もしない(isAnimatingがtrueであると、return;が実行される。return;で終わるとその先の処理は実行されない)
  }
  
  isAnimating = true;
  
  $("html, body").animate({
    scrollTop: elementTop
  }, 500, function() {
    isAnimating = false;
  });
  
  // スクロールイベントのハンドラを一時的に解除する
  $(window).off('scroll');
  
  // スクロールが完了した後に、再度スクロールイベントのハンドラを登録する
  setTimeout(function() {
    $(window).on('scroll', onScroll);
  }, 500);
}

function onScroll() {
  if (shouldScroll1to2()) {
    nowSlide = 2;
    scrollToElement(heroineTop);
  } else if (shouldScroll2to1()) {
    nowSlide = 1;
    scrollToElement(heroTop);
  } else if (shouldScroll2to3()) {
    nowSlide = 3;
    scrollToElement(bossTop);
  } else if (shouldScroll3to2()) {
    nowSlide = 2;
    scrollToElement(heroineTop);
  }

  console.log(nowSlide);
}

$(window).on('scroll', onScroll);







