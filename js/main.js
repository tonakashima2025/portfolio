$(function(){

  // Topロゴクリックでページ最上部まで移動
  $('#top-btn').click(function() {
    $('html, body').animate({'scrollTop':0}, 500);
  });

  // ドロワーメニュー
  $('.navbar_toggle').on('click', function () {
    $('.dnav').toggleClass('open');
  });

  $('.dnav').find('a').on('click', function () {
    $('.dnav').removeClass('open');
  });
  
  // ナビゲーションクリックで該当箇所まで移動
  $('header a').click(function() {
    let headerHight = 76;
    let id = $(this).attr('href');
    let position = $(id).offset().top - headerHight;
    $('html,body').animate({'scrollTop':position},500);
  });

  // hoverでソーシャルアイコン拡大
  $('.sns').find('a').hover(
    function() {
      $(this).animate({'font-size':'2.5rem'}, 300);  
    },
    function() {
      $(this).animate({'font-size':'2.0rem'}, 300);  
    }
  );
});
