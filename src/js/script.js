$(function () {
    $('.header__buger-link').on('click',function(event) {
        $('#header__buger-checkBox').prop('checked',false);
    });
});
// リンクをクリックしたらバガーメニューを閉じる

$(function() {
  $('.bgimg-slider').bgSwitcher({
      images: ['dist/img/fv-bgi_01@2x.jpg','dist/img/fv-bgi_02@2x.jpg','dist/img/fv-bgi_03@2x.jpg'],
      effect: "drop",
      easing: "linear"
  });
});
// bgスライダー

$(window).on('scroll', function () {
  if ($('.MV').height() < $(this).scrollTop()) {
  $('.header').addClass('change-color'); }
  else {
  $('.header').removeClass('change-color'); }
});
// ヘッダースクロールしたら色が変わる

$('a[href^="#"]').click(function() {
  // スクロールの速度
  let speed = 400; // ミリ秒で記述
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? 'html' : href);
  let position = target.offset().top;
  $('body,html').animate({
    scrollTop: position
  }, speed, 'swing');
  return false;
});
// スムーススクロール