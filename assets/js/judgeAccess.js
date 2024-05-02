jQuery(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      //2回目以降アクセス時の処理
      console.log('2回目以降のアクセスです');
      $('shutter').remove();
      $('#message').fadeIn(500);
    } else {
      //初回アクセス時の処理
      sessionStorage.setItem('access', 0);
      console.log('初回アクセスです');
    }
  }
  webStorage();
});