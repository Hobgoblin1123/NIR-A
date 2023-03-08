



// window.addEventListener('load', function () {
//   // スクロールする要素を取得する
//   const scrollElement = document.querySelector('.main');

//   // スクロールする要素の高さを取得する
//   const elementHeight = scrollElement.offsetHeight;

//   // 上または下にスクロールした場合に実行する関数
//   function scrollHandler() {
//     // スクロールした距離を取得する
//     const scrollDistance = window.pageYOffset - scrollElement.offsetTop;

//     // 上にスクロールする場合
//     if (scrollDistance < 0) {
//       // スクロールする距離を計算する
//       const distanceToScroll = Math.max(-scrollDistance, elementHeight);

//       // スクロールする
//       scrollElement.scrollTop -= distanceToScroll;

//       // スクロールが要素の高さ分完了した場合、スクロールを停止する
//       if (distanceToScroll === elementHeight) {
//         window.removeEventListener('scroll', scrollHandler);
//       }
//     }
//     // 下にスクロールする場合
//     else if (scrollDistance > 0) {
//       // スクロールする距離を計算する
//       const distanceToScroll = Math.min(scrollDistance, elementHeight);

//       // スクロールする
//       scrollElement.scrollTop += distanceToScroll;

//       // スクロールが要素の高さ分完了した場合、スクロールを停止する
//       if (distanceToScroll === elementHeight) {
//         window.removeEventListener('scroll', scrollHandler);
//       }
//     }
//   }

//   // スクロールイベントを監視する
//   window.addEventListener('scroll', function () {
//     // 上または下にスクロールした場合に実行する
//     scrollHandler();
//   });
// });





