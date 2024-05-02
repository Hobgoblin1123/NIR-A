jQuery(function(){
  $('#shutterBtn').on('click',function(){
    $('#shutterBtn').fadeOut(2000);
    $('#shutterBtn').css('animation','clickBtn 0.50s forwards');
    $('#bar1').css('animation','bar1 1s forwards'); //forwards...アニメーション終了後の状態を保存
    $('#bar2').css('animation','bar2 1s forwards');
    setTimeout(function(){
      $('#shutter1').fadeOut(2000);
    },1000); //読み込みしてから1000ミリ秒後に実行

    //shutter1がフェードアウトしてから300ミリ秒後にshutter2のアニメーション(lazer)実行
    setTimeout(function(){
      $('#lazer').css('animation','lazer forwards 4.0s');
    //lazerアニメーションが終わりそうなときにshutter2自体をフェードアウトさせる
      setTimeout(function(){
        $('#shutter2').fadeOut(1000);
      },3000);
    },3300);
    
    setTimeout(function(){
      $('#anatani').css('animation','message forwards 3.0s');
      setTimeout(function(){
        $('#miraiha').css('animation','message forwards 3.0s');
      },700);
      setTimeout(function(){
        $('#takusareta').css('animation','message forwards 2.5s');
      },1300);

      setTimeout(function(){
        setTimeout(function(){
          document.getElementById('miraiha').src = 'assets/images/miraiha2.png';
          //0.8秒の80％から100％にかけて光るから、0.64秒
        },640);
        $('#miraiha').css('animation','flash forwards 0.8s');
        $('#shutter3').css('animation','flashBg forwards 0.8s');
        console.log('a');
      },3800);
      setTimeout(function(){
        $('#shutter3').fadeOut(1000);
        $('#message').fadeIn(1000);
      },5600);
    },7800);

    setTimeout(function(){
      $('shutter').remove();
    },14500);
  });
});
